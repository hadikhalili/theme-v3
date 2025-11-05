import { PrismaClient } from '@prisma/client'
import type { H3Event } from 'h3'

const clients = new Map<string, PrismaClient>()

const getClient = (databaseUrl: string) => {
  if (!clients.has(databaseUrl)) {
    console.info('[prisma] creating new client for', databaseUrl)
    const client = new PrismaClient({
      datasources: { db: { url: databaseUrl } },
      log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
    })
    clients.set(databaseUrl, client)
  }
  else {
    console.info('[prisma] reusing existing client for', databaseUrl)
  }
  return clients.get(databaseUrl)!
}

const resolveDatabaseUrl = (event?: H3Event) => {
  // اول متغیرهای محیطی را چک کنیم
  if (process.env.NUXT_DATABASE_URL) {
    return process.env.NUXT_DATABASE_URL
  }

  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL
  }

  // سپس runtimeConfig را چک کنیم
  const runtimeConfig = event?.context?.runtimeConfig
  if (runtimeConfig?.databaseUrl) {
    return runtimeConfig.databaseUrl as string
  }

  throw new Error('`databaseUrl` is not configured in runtimeConfig or environment variables.')
}

export const getPrismaClient = (event?: H3Event): PrismaClient => {
  const databaseUrl = resolveDatabaseUrl(event)

  console.debug('[prisma] getPrismaClient called', { databaseUrl })
  return getClient(databaseUrl)
}

export default getPrismaClient
