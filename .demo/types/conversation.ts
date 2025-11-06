// ~/types/conversation.ts
export interface User {
  name: string | null
  profilePicture: string | null
}

export interface Message {
  type: string
  text: string
  time: string
  apiRequestTokens?: number // اضافه کردن apiRequestTokens
  apiResponseTokens?: number // اضافه کردن apiResponseTokens
  attachments: Attachment[]
}

export interface Attachment {
  type: string
  image?: string
  url: string
  text: string
  name?: string
}

export interface Conversation {
  id: number
  title: string | null
  provider: string | null
  user: User
  messages: Message[]
}
