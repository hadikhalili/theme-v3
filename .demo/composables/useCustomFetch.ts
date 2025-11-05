// composables/useCustomFetch.ts
import { useUserStore } from '~/store/user'

export const useCustomFetch = () => {
  const userStore = useUserStore()

  const customFetch = async <T>(url: string, options: any = {}): Promise<T> => {
    let retryCount = 0

    // Interceptor request: اضافه کردن header Authorization
    if (userStore.accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${userStore.accessToken}`,
      }
    }

    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        return await $fetch<T>(url, options)
      }
      catch (error: any) {
        if (error.status === 401 && retryCount < 1) {
          retryCount++
          try {
            await userStore.refresh()
            options.headers = {
              ...options.headers,
              Authorization: `Bearer ${userStore.accessToken}`,
            }
            continue // retry
          }
          catch (refreshError) {
            console.error('Failed to refresh token:', refreshError)
            userStore.logout()
            throw refreshError
          }
        }
        else {
          throw error
        }
      }
    }
  }

  return { customFetch }
}
