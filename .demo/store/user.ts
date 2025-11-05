// store/user.ts
import { defineStore } from 'pinia'
import { useCustomFetch } from '~/composables/useCustomFetch'

interface User {
  id: number
  username: string
  email: string
  name: string
  firstName?: string | null
  lastName?: string | null
  referralCode?: string | null
  credit?: number | null
  // O3OUOO? U?UOU,O_U?OUO UcOO?O"O? U.OU+U+O_ profilePicture, isAdmin, etc.
}

type RefreshResponse = {
  accessToken: string
  refreshToken?: string
  user?: User
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    accessToken: null as string | null,
    refreshToken: null as string | null,
    isAuthenticated: false,
  }),
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    pick: ['refreshToken', 'user', 'isAuthenticated'],
  },
  actions: {
    // U,OU_UOU+ O"O username/password
    async login(username: string, password: string) {
      const { customFetch } = useCustomFetch()
      try {
        const response = await customFetch<{ accessToken: string, refreshToken: string, user: User }>('/api/auth/login', {
          method: 'POST',
          body: { username, password },
          credentials: 'include',
        })
        this.user = response.user
        this.accessToken = response.accessToken
        this.refreshToken = response.refreshToken
        this.isAuthenticated = true
      }
      catch (error) {
        console.error('Login failed:', error)
        throw error
      }
    },
    // U,OU_UOU+ O"O U_U^U_U,
    async googleLogin(googleId: string, email: string, name: string) {
      const { customFetch } = useCustomFetch()
      try {
        const response = await customFetch<{ accessToken: string, refreshToken: string, user: User }>('/api/auth/googleAuth', {
          method: 'POST',
          body: { googleId, email, name },
          credentials: 'include',
        })
        this.user = response.user
        this.accessToken = response.accessToken
        this.refreshToken = response.refreshToken
        this.isAuthenticated = true
      }
      catch (error) {
        console.error('Google login failed:', error)
        throw error
      }
    },
    // refresh token
    async refresh() {
      console.log('[userStore] refresh called', {
        refreshToken: this.refreshToken,
        accessToken: this.accessToken,
        hasUser: !!this.user,
      })
      if (!this.refreshToken) {
        console.warn('[userStore] refresh aborted: missing refreshToken')
        this.logout()
        return
      }
      const { customFetch } = useCustomFetch()
      try {
        const response = await customFetch<RefreshResponse>('/api/auth/refresh', {
          method: 'POST',
          body: { refreshToken: this.refreshToken },
          credentials: 'include',
        })
        this.accessToken = response.accessToken
        if (response.refreshToken) {
          this.refreshToken = response.refreshToken
        }
        if (response.user) {
          this.user = response.user
        }
        this.isAuthenticated = !!this.user
        console.log('[userStore] refresh success', {
          user: this.user,
          accessToken: this.accessToken,
          refreshToken: this.refreshToken,
          isAuthenticated: this.isAuthenticated,
        })
      }
      catch (error) {
        console.error('Refresh failed:', error)
        this.logout()
        throw error
      }
    },
    // O"O?O?O3UO auth U_O3 OO? persist (U^ refresh OU_O? U,OO?U.)
    async checkAuth() {
      console.log('[userStore] checkAuth invoked', {
        isAuthenticated: this.isAuthenticated,
        hasUser: !!this.user,
        hasAccessToken: !!this.accessToken,
        hasRefreshToken: !!this.refreshToken,
      })
      if (this.refreshToken && (!this.accessToken || !this.user)) {
        await this.refresh()
      }
      const result = this.isAuthenticated && !!this.user
      console.log('[userStore] checkAuth result', {
        result,
        user: this.user,
        accessToken: this.accessToken,
        refreshToken: this.refreshToken,
      })
      return result
    },
    // OrO?U^O? UcOO?O"O?
    logout() {
      this.user = null
      this.accessToken = null
      this.refreshToken = null
      this.isAuthenticated = false
    },
  },
})
