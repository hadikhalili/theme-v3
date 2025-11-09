import { PrismaClient } from '@prisma/client';

const clients = /* @__PURE__ */ new Map();
const getClient = (databaseUrl) => {
  if (!clients.has(databaseUrl)) {
    console.info("[prisma] creating new client for", databaseUrl);
    const client = new PrismaClient({
      datasources: { db: { url: databaseUrl } },
      log: ["error"]
    });
    clients.set(databaseUrl, client);
  } else {
    console.info("[prisma] reusing existing client for", databaseUrl);
  }
  return clients.get(databaseUrl);
};
const resolveDatabaseUrl = (event) => {
  if (process.env.NUXT_DATABASE_URL) {
    return process.env.NUXT_DATABASE_URL;
  }
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }
  const runtimeConfig = event?.context?.runtimeConfig;
  if (runtimeConfig?.databaseUrl) {
    return runtimeConfig.databaseUrl;
  }
  throw new Error("`databaseUrl` is not configured in runtimeConfig or environment variables.");
};
const getPrismaClient = (event) => {
  const databaseUrl = resolveDatabaseUrl(event);
  console.debug("[prisma] getPrismaClient called", { databaseUrl });
  return getClient(databaseUrl);
};

export { getPrismaClient as g };
