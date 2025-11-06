export interface User {
  id: number
  email: string
  name: string
  username: string
  jwtToken: string
  isAdmin: boolean
}

export interface AuthResponse {
  user: User
  refreshToken: string
}
