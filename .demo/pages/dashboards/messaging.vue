<script setup lang="ts">

// import { usePanels } from '../../../layers/tairo/composables/panels'
import { useUserStore } from '~/store/user'
import type { Conversation, Attachment, Message } from '~/types/conversation'

definePageMeta({
  title: 'پیام‌رسانی',
  layout: 'empty',
  preview: {
    title: 'برنامه پیام‌رسان',
    description: 'برای اپلیکیشن‌های چت و پیام‌رسانی',
    categories: ['داشبوردها'],
    src: '/img/screens/dashboards-messaging.png',
    srcDark: '/img/screens/dashboards-messaging-dark.png',
    order: 26,
  },
})

const { open } = usePanels()
const route = useRoute()
const router = useRouter()
const llmProvider = ref(route.query.llm as string || '')
const userStore = useUserStore()
const userId = computed(() => userStore.user?.id || 0)

let authRedirectTimeout: ReturnType<typeof setTimeout> | null = null

const notifyAuthRequirement = () => {
  if (authRedirectTimeout) return

  push.error({
    title: 'نیاز به ورود',
    message: 'برای ادامه استفاده از پیام‌رسان باید وارد حساب کاربری خود شوید.',
  })
  authRedirectTimeout = setTimeout(() => {
    router.push('/auth')
    authRedirectTimeout = null
  }, 3000)
}

const ensureAuthenticated = () => {
  if (userId.value) return true
  notifyAuthRequirement()
  return false
}

const emptyConversation = ref<Conversation[]>([
  {
    id: 1,
    title: 'بدون عنوان',
    provider: null,
    user: {
      name: 'کاربر ناشناس',
      profilePicture: '/img/avatars/default-other.jpg',
    },
    messages: [
      {
        type: 'received',
        text: 'پیامی وجود ندارد',
        time: 'هم اکنون',
        attachments: [] as Attachment[],
      },
    ],
  }])
const conversations = ref<Conversation[]>([...emptyConversation.value])
// const error = ref<string | null>(null)

const chatEl = ref<HTMLElement>()
const expanded = ref(true)
const loading = ref(false)
const message = ref('')
const messageLoading = ref(false)
const botTyping = ref(false)
const activeConversation = ref(1)
const selectedFiles = ref<File[]>([])
const fileInput = ref<HTMLInputElement | null>(null)
const filePreviews = ref<string[]>([])
const creatingConversation = ref(false)
const providerOptions = [
  { value: 'gpt-3.5-turbo', label: 'OpenAI GPT-3.5 Turbo' },
  { value: 'gpt-4o-mini', label: 'OpenAI GPT-4o Mini' },
  { value: 'claude-3-sonnet', label: 'Anthropic Claude 3 Sonnet' },
]
const showCreateModal = ref(false)
const newConversationTitle = ref('درخواست ایجاد مکالمه جدید')
const newConversationProvider = ref(providerOptions[0].value)
const deletingConversation = ref<number | null>(null)

const openCreateConversation = () => {
  if (!ensureAuthenticated()) return

  creatingConversation.value = false
  newConversationTitle.value = 'درخواست ایجاد مکالمه جدید'
  const providerExists = providerOptions.some(option => option.value === llmProvider.value)
  newConversationProvider.value = providerExists ? llmProvider.value : providerOptions[0].value
  showCreateModal.value = true
}

const cancelCreateConversation = () => {
  showCreateModal.value = false
  creatingConversation.value = false
  newConversationTitle.value = 'درخواست ایجاد مکالمه جدید'
  newConversationProvider.value = providerOptions[0].value
}

const getConversationTitle = (conversation: Conversation) => {
  return conversation.title || 'بدون عنوان'
}

// // const userId = 1 // Replace with auth user ID

const selectedConversation = computed(() => {
  return (
    conversations.value.find(
      conversation => conversation.id === activeConversation.value,
    ) || emptyConversation.value[0]
  )
})

const providerLabelMap = computed(() => {
  return providerOptions.reduce((acc, option) => {
    acc[option.value] = option.label
    return acc
  }, {} as Record<string, string>)
})

const resolveProviderLabel = (value: string | null | undefined) => {
  if (!value) return null
  return providerLabelMap.value[value] ?? value
}

const selectedProviderLabel = computed(() => {
  const conversationProvider = resolveProviderLabel(selectedConversation.value.provider)
  if (conversationProvider) return conversationProvider

  const activeProvider = llmProvider.value ? resolveProviderLabel(llmProvider.value) : null
  return activeProvider ?? 'نامشخص'
})

onMounted(async () => {
  console.log('onMounted triggered')
  await fetchConversations()
  await fetchConversations()
  if (llmProvider.value) {
    await createOrLoadChatForProvider(llmProvider.value)
  }
  setTimeout(() => {
    if (chatEl.value) {
      chatEl.value.scrollTo({
        top: chatEl.value.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, 300)
})

// فرض می‌کنیم userId از جایی (مثلاً state یا auth) دریافت می‌شود
// const userId = 1 // جایگزین با مقدار واقعی userId (مثلاً از store یا context)

// دریافت مکالمات هنگام بارگذاری
const fetchConversations = async () => {
  if (!ensureAuthenticated()) return

  const query: any = { userId: userId.value.toString() }
  if (llmProvider.value) query.provider = llmProvider.value

  const { data, error } = await useFetch<Conversation[]>('/api/chat/conversations', {
    query,
    immediate: true,
  })

  watchEffect(() => {
    if (error.value) {
      console.error('خطا در دریافت مکالمات:', error.value)
      conversations.value = emptyConversation.value
      push.error({
        title: 'خطا رخ داد',
        message: error.value?.message || 'دریافت مکالمات ناموفق بود',
      })
    }
    else if (data.value) {
      conversations.value = data.value
      setTimeout(() => {
        if (chatEl.value) {
          chatEl.value.scrollTo({
            top: chatEl.value.scrollHeight,
            behavior: 'smooth',
          })
        }
      }, 300)
    }
  })
}

const createOrLoadChatForProvider = async (provider: string) => {
  if (!ensureAuthenticated()) return

  const { data, error } = await useFetch('/api/chat/create-or-load', {
    method: 'POST',
    body: { userId: userId.value, provider, title: `Chat with ${provider}` },
  })
  if (data.value) {
    llmProvider.value = provider
    activeConversation.value = data.value.id
    await fetchConversations()
  }
  else if (error.value) {
    console.error('Error creating/loading chat:', error.value)
  }
}

const submitCreateConversation = async () => {
  if (creatingConversation.value || messageLoading.value || !ensureAuthenticated()) return

  creatingConversation.value = true

  try {
    const sanitizedTitle = newConversationTitle.value.trim() || 'درخواست ایجاد مکالمه جدید'
    const selectedProvider = newConversationProvider.value

    const newConversation = await $fetch<Conversation>('/api/chat/conversations', {
      method: 'POST',
      body: {
        userId: userId.value,
        title: sanitizedTitle,
        provider: selectedProvider,
      },
    })
    newConversation.provider = selectedProvider || null

    const query: Record<string, string> = {
      userId: userId.value.toString(),
    }
    if (selectedProvider) {
      query.provider = selectedProvider
      llmProvider.value = selectedProvider
      router.replace({
        query: {
          ...route.query,
          llm: selectedProvider,
        },
      })
    }

    const updatedConversations = await $fetch<Conversation[]>('/api/chat/conversations', { query })
    if (updatedConversations.length) {
      const freshlyCreated = updatedConversations.find(conversation => conversation.id === newConversation.id) ?? newConversation
      const remaining = updatedConversations.filter(conversation => conversation.id !== newConversation.id)
      conversations.value = [freshlyCreated, ...remaining]
    }
    else {
      conversations.value = [newConversation]
    }

    showCreateModal.value = false
    newConversationTitle.value = 'درخواست ایجاد مکالمه جدید'
    selectConversation(newConversation.id)
  }
  catch (error: any) {
    console.error('خطا در ایجاد مکالمه:', error)
    push.error({
      title: 'خطا در ایجاد مکالمه',
      message: error?.data?.statusMessage || error?.message || 'ایجاد مکالمه جدید با مشکل مواجه شد',
    })
  }
  finally {
    creatingConversation.value = false
  }
}

const deleteConversation = async (conversationId: number) => {
  if (deletingConversation.value !== null || !ensureAuthenticated()) return
  deletingConversation.value = conversationId

  try {
    await $fetch(`/api/chat/conversations/${conversationId}`, {
      method: 'DELETE',
      body: { userId: userId.value },
    })

    const wasActive = activeConversation.value === conversationId
    conversations.value = conversations.value.filter(conversation => conversation.id !== conversationId)

    if (!conversations.value.length) {
      conversations.value = [...emptyConversation.value]
      activeConversation.value = conversations.value[0].id
      message.value = ''
      selectedFiles.value = []
      filePreviews.value.forEach(url => URL.revokeObjectURL(url))
      filePreviews.value = []
    }
    else if (wasActive) {
      selectConversation(conversations.value[0].id)
    }
  }
  catch (error: any) {
    console.error('حذف مکالمه با خطا مواجه شد:', error)
    push.error({
      title: 'حذف مکالمه ناموفق بود',
      message: error?.data?.statusMessage || error?.message || 'امکان حذف مکالمه وجود ندارد',
    })
  }
  finally {
    deletingConversation.value = null
  }
}

function selectConversation(id: number) {
  if (messageLoading.value) return

  loading.value = true
  message.value = ''
  selectedFiles.value = []
  filePreviews.value.forEach(url => URL.revokeObjectURL(url))
  filePreviews.value = []
  const conversation = conversations.value.find(conversation => conversation.id === id)
  if (conversation?.provider) {
    llmProvider.value = conversation.provider
  }
  activeConversation.value = id

  setTimeout(() => {
    loading.value = false
    setTimeout(() => {
      if (chatEl.value) {
        chatEl.value.scrollTo({
          top: chatEl.value.scrollHeight,
          behavior: 'smooth',
        })
      }
    }, 300)
  }, 1000)
}

// مدیریت انتخاب فایل
const handleFileSelect = async (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.files || input.files.length === 0) return

  const files = Array.from(input.files)
  const maxSize = 10 * 1024 * 1024 // 10MB
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf']

  const validFiles = files.filter((file) => {
    if (!allowedTypes.includes(file.type)) {
      push.warning({
        title: 'خطا در انتخاب فایل',
        message: `نوع فایل ${file.name} پشتیبانی نمی‌شود`,
      })
      return false
    }
    if (file.size > maxSize) {
      push.warning({
        title: 'خطا در انتخاب فایل',
        message: `حجم فایل ${file.name} بیش از حد مجاز (10 مگابایت) است`,
      })
      return false
    }
    return true
  })

  selectedFiles.value = validFiles
  filePreviews.value = validFiles
    .filter(file => file.type.startsWith('image/'))
    .map(file => URL.createObjectURL(file))
}

// حذف فایل انتخاب‌شده
const removeFile = (index: number) => {
  if (filePreviews.value[index]) {
    URL.revokeObjectURL(filePreviews.value[index])
  }
  selectedFiles.value.splice(index, 1)
  filePreviews.value.splice(index, 1)
}

// آپلود فایل‌ها به سرور
const uploadFiles = async (files: File[]): Promise<Attachment[]> => {
  const attachments: Attachment[] = []
  for (const file of files) {
    console.log(`Uploading file with type: ${file.type}`) // لاگ نوع فایل
    const formData = new FormData()
    formData.append('file', file)

    const { data, error } = await useFetch<{ url: string, name: string, type: string }>(
      '/api/chat/upload',
      {
        method: 'POST',
        body: formData,
      },
    )

    if (error.value) {
      throw new Error(error.value.message || `آپلود فایل ${file.name} ناموفق بود`)
    }

    if (data.value) {
      attachments.push({
        type: file.type.startsWith('image/') ? 'image' : 'file',
        url: data.value.url,
        image: file.type.startsWith('image/') ? data.value.url : undefined,
        text: file.name,
        name: data.value.name,
      })
    }
  }
  return attachments
}

// ارسال پیام به endpoint
async function submitMessage() {
  if (!message.value.trim() && selectedFiles.value.length === 0) return
  if (messageLoading.value || !ensureAuthenticated()) return

  messageLoading.value = true
  try {
    // آپلود فایل‌ها
    const attachments = selectedFiles.value.length ? await uploadFiles(selectedFiles.value) : []

    const newMessage: Message = {
      type: 'sent',
      text: message.value.trim() || 'پیوست', // اگر متن خالی باشد، "پیوست" استفاده می‌شود
      time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      attachments,
    }

    botTyping.value = true

    const { data, error } = await useFetch<Message | Message[]>('/api/chat/message', {
      method: 'POST',
      body: {
        userId: userId.value,
        conversationId: activeConversation.value,
        message: newMessage,
        attachments: attachments.map(att => ({
          url: att.url,
          name: att.name,
          type: att.type,
        })),
      },
    })

    if (error.value) {
      throw new Error(error.value.message || 'ارسال پیام ناموفق بود')
    }

    if (data.value) {
      const index = conversations.value.findIndex(
        conversation => conversation.id === activeConversation.value,
      )
      if (index !== -1) {
        // اگر پاسخ یک آرایه باشد (پیام کاربر + پیام API)، همه را اضافه می‌کنیم
        const messagesToAdd = Array.isArray(data.value) ? data.value : [data.value]
        conversations.value[index].messages.push(...messagesToAdd)
      }
      message.value = ''
      selectedFiles.value = []
      filePreviews.value.forEach(url => URL.revokeObjectURL(url))
      filePreviews.value = []

      await nextTick()

      if (chatEl.value) {
        chatEl.value.scrollTo({
          top: chatEl.value.scrollHeight,
          behavior: 'smooth',
        })
      }
    }
  }
  catch (err) {
    console.error('خطا در ارسال پیام:', err)
    push.error({
      title: 'خطا در ارسال',
      message: (err as Error).message || 'ارسال پیام یا فایل ناموفق بود',
    })
  }
  finally {
    botTyping.value = false
    messageLoading.value = false
  }
}
</script>

<template>
  <div class="relative">
    <div class="bg-muted-100 dark:bg-muted-900 flex min-h-screen">
      <!-- Sidebar -->
      <div
        class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative z-10 hidden h-screen w-20 border-e bg-white sm:block"
      >
        <div class="flex h-full flex-col justify-between">
          <div class="flex flex-col">
            <div
              class="ltablet:w-full flex size-16 shrink-0 items-center justify-center lg:w-full"
            >
              <NuxtLink to="#" class="flex items-center justify-center">
                <TairoLogo class="text-primary-600 h-10" />
              </NuxtLink>
            </div>
            <div
              class="ltablet:w-full flex size-16 shrink-0 items-center justify-center lg:w-full"
            >
              <a
                href="#"
                class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
                title="بازگشت"
                @click.prevent="$router.back()"
              >
                <Icon name="lucide:arrow-left" class="size-5 rtl:rotate-180" />
              </a>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex h-16 w-full items-center justify-center">
              <button
                type="button"
                class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
                title="جستجو"
                @click="open('search')"
              >
                <Icon name="ph:magnifying-glass-duotone" class="size-5" />
              </button>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <NuxtLink
                to="#"
                class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
                title="تنظیمات"
              >
                <Icon name="ph:gear-six-duotone" class="size-5" />
              </NuxtLink>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <NuxtLink
                to="/layouts/ertegha-2"
                class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
                title="ارتقا حساب"
              >
                <Icon name="ph:rocket-launch-duotone" class="size-5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- Conversations -->
      <div
        class="ltablet:border-e border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative z-[9] h-screen w-28 bg-white sm:w-48 lg:border-e"
      >
        <div class="flex h-full flex-col">
          <button
            type="button"
            class="flex size-16 shrink-0 items-center justify-center sm:w-36"
            :disabled="creatingConversation || showCreateModal"
            @click.prevent="openCreateConversation"
          >
            <span
              class="bg-primary-500 mr-4 flex h-10 w-full items-center justify-center rounded-lg text-white"
              :class="creatingConversation ? 'opacity-60 cursor-not-allowed' : ''"
            >
              <Icon name="lucide:plus" class="size-4" />
            </span>
          </button>
          <TairoModal
            :open="showCreateModal"
            size="sm"
            @close="cancelCreateConversation"
          >
            <template #header>
              <div class="flex w-full items-center justify-between p-4 md:p-6">
                <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
                  درخواست ایجاد مکالمه جدید
                </h3>
                <BaseButtonClose @click="cancelCreateConversation" />
              </div>
            </template>
            <div class="space-y-4 p-4 md:p-6">
              <BaseInput
                v-model="newConversationTitle"
                label="عنوان"
                placeholder="مکالمه جدید"
              />
              <BaseSelect
                v-model="newConversationProvider"
                label="مدل زبانی"
              >
                <option
                  v-for="option in providerOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </BaseSelect>
            </div>
            <template #footer>
              <div class="flex justify-end gap-x-2 p-4 md:p-6">
                <BaseButton
                  color="default"
                  @click="cancelCreateConversation"
                >
                  انصراف
                </BaseButton>
                <BaseButton
                  color="primary"
                  variant="solid"
                  :disabled="creatingConversation || !newConversationTitle.trim()"
                  @click="submitCreateConversation"
                >
                  ایجاد مکالمه
                </BaseButton>
              </div>
            </template>
          </TairoModal>
          <!-- List -->
          <a
            v-for="conversation in conversations"
            :key="conversation.id"
            href="#"
            class="group relative flex size-16 shrink-0 items-center justify-center border-s-2 pr-1 sm:w-full"
            :class="
              activeConversation === conversation.id
                ? 'border-primary-500 bg-primary-100'
                : 'border-transparent'
            "
            @click.prevent="selectConversation(conversation.id)"
          >
            <button
              type="button"
              class="absolute -end-2 -top-2 size-6 items-center justify-center rounded-full bg-red-500 text-white transition duration-200"
              :class="deletingConversation === conversation.id ? 'flex' : 'hidden group-hover:flex'"
              :disabled="deletingConversation === conversation.id"
              @click.stop.prevent="deleteConversation(conversation.id)"
            >
              <Icon
                v-if="deletingConversation !== conversation.id"
                name="lucide:x"
                class="size-3"
              />
              <Icon
                v-else
                name="lucide:loader-2"
                class="size-3 animate-spin"
              />
            </button>
            <BaseText
              size="xs"
              class="text-muted-500 dark:text-muted-400 max-w-xs"
            >
              {{ getConversationTitle(conversation) }}
            </BaseText>
            <!--            <BaseAvatar :src="conversation.user.photo" size="sm" />-->
          </a>
        </div>
      </div>
      <!-- Current conversation -->
      <div
        class="relative w-full transition-all duration-300"
        :class="
          expanded
            ? 'ltablet:max-w-[calc(100%_-_160px)] lg:max-w-[calc(100%_-_160px)]'
            : 'ltablet:max-w-[calc(100%_-_470px)] lg:max-w-[calc(100%_-_550px)]'
        "
      >
        <div class="flex w-full flex-col">
          <!-- Header -->
          <div
            class="flex h-16 w-full items-center justify-between px-4 sm:px-8"
          >
            <div class="flex w-80 items-center gap-2">
              <BaseInput
                class="w-auto"
                :model-value="selectedProviderLabel"
                label="نوع مدل زبانی:"
                rounded="lg"
                disabled
              />
            </div>

            <TairoSidebarTools
              class="relative -end-4 z-20 flex h-16 w-[90%] scale-90 items-center justify-end gap-2 sm:end-0 sm:scale-100"
            />
          </div>
          <!-- Body -->
          <div
            ref="chatEl"
            class="relative h-[calc(100vh_-_128px)] w-full p-4 sm:p-8"
            :class="
              loading ? 'overflow-hidden' : 'overflow-y-auto nui-slimscroll'
            "
          >
            <!-- Loader-->
            <div
              class="bg-muted-100 dark:bg-muted-900 pointer-events-none absolute inset-0 z-10 size-full p-8 transition-opacity duration-300"
              :class="loading ? 'opacity-100' : 'opacity-0 pointer-events-none'"
            >
              <div class="mt-12 space-y-12">
                <div class="flex w-full max-w-md gap-4">
                  <BasePlaceload
                    class="size-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload class="h-3 w-full max-w-56 rounded" />
                    <BasePlaceload class="h-3 w-full max-w-32 rounded" />
                  </div>
                </div>
                <div class="flex w-full max-w-md gap-4">
                  <BasePlaceload
                    class="size-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload class="h-3 w-full max-w-64 rounded" />
                    <BasePlaceload class="h-3 w-full max-w-48 rounded" />
                  </div>
                </div>
                <div
                  class="ms-auto flex w-full max-w-md flex-row-reverse justify-end gap-4"
                >
                  <BasePlaceload
                    class="size-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload
                      class="ms-auto h-3 w-full max-w-64 rounded"
                    />
                    <BasePlaceload
                      class="ms-auto h-3 w-full max-w-48 rounded"
                    />
                  </div>
                </div>
                <div
                  class="ms-auto flex w-full max-w-md flex-row-reverse justify-end gap-4"
                >
                  <BasePlaceload
                    class="size-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload
                      class="ms-auto h-3 w-full max-w-56 rounded"
                    />
                    <BasePlaceload
                      class="ms-auto h-3 w-full max-w-32 rounded"
                    />
                  </div>
                </div>
                <div class="flex w-full max-w-md gap-4">
                  <BasePlaceload
                    class="size-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload class="h-3 w-full max-w-56 rounded" />
                    <BasePlaceload class="h-3 w-full max-w-32 rounded" />
                  </div>
                </div>
                <div class="flex w-full max-w-md gap-4">
                  <BasePlaceload
                    class="size-8 shrink-0 rounded-full"
                    :width="32"
                    :height="32"
                  />
                  <div class="grow space-y-2">
                    <BasePlaceload class="h-3 w-full max-w-64 rounded" />
                    <BasePlaceload class="h-3 w-full max-w-48 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <!-- Messages loop -->
            <div v-if="!loading" class="space-y-12">
              <div
                v-for="(item, index) in selectedConversation?.messages"
                :key="index"
                class="relative flex w-full gap-4"
                :class="[
                  item.type === 'received' ? 'flex-row' : 'flex-row-reverse',
                  item.type === 'separator' ? 'justify-center' : '',
                ]"
              >
                <template v-if="item.type !== 'separator'">
                  <div class="shrink-0">
                    <BaseAvatar
                      v-if="item.type === 'received'"
                      src="/img/icons/logos/ai-logo.jpg"
                      size="xs"
                    />
                    <BaseAvatar
                      v-else-if="item.type === 'sent'"
                      src="/img/avatars/2.svg"
                      size="xs"
                    />
                  </div>
                  <div class="flex max-w-md flex-col">
                    <div
                      class="bg-muted-200 dark:bg-muted-800 rounded-xl p-4"
                      :class="[
                        item.type === 'received' ? 'rounded-ss-none' : '',
                        item.type === 'sent' ? 'rounded-se-none' : '',
                      ]"
                    >
                      <p class="font-sans text-sm">
                        {{ item.text }}
                      </p>
                    </div>
                    <div
                      class="text-muted-400 mt-1 font-sans text-xs"
                      :class="item.type === 'received' ? 'text-right' : ''"
                    >
                      {{ item.time }}
                    </div>
                    <div
                      v-if="item.attachments?.length"
                      class="mt-2 space-y-2"
                    >
                      <template
                        v-for="(attachment, idx) in item.attachments"
                        :key="idx"
                      >
                        <div
                          v-if="attachment.type === 'image'"
                          class="dark:bg-muted-800 max-w-xs rounded-2xl bg-white p-2"
                          :class="item.type === 'sent' ? 'ms-auto' : ''"
                        >
                          <img
                            :src="attachment.url || attachment.image || '/img/placeholder.png'"
                            :alt="attachment.text || 'تصویر'"
                            class="rounded-xl"
                            @error="() => (attachment.url = '/img/placeholder.png')"
                          />
                        </div>
                        <NuxtLink
                          v-else-if="attachment.type === 'file'"
                          :to="attachment.url"
                          class="dark:bg-muted-800 block max-w-xs rounded-2xl bg-white p-2"
                          :class="item.type === 'sent' ? 'ms-auto' : ''"
                        >
                          <div class="flex items-center gap-2">
                            <Icon name="lucide:file" class="size-5" />
                            <p
                              class="text-muted-800 dark:text-muted-100 font-sans text-sm"
                            >
                              {{ attachment.name || attachment.text || 'فایل' }}
                            </p>
                          </div>
                        </NuxtLink>
                        <NuxtLink
                          v-else-if="attachment.type === 'link'"
                          :to="attachment.url"
                          class="dark:bg-muted-800 block max-w-xs rounded-2xl bg-white p-2"
                          :class="item.type === 'sent' ? 'ms-auto' : ''"
                        >
                          <img
                            :src="attachment.image || '/img/placeholder.png'"
                            :alt="attachment.text || 'لینک'"
                            class="rounded-xl"
                          />
                          <div class="px-1 py-2">
                            <p
                              class="text-muted-800 dark:text-muted-100 font-sans"
                            >
                              {{ attachment.url?.replace(/(^\w+:|^)\/\//, '') }}
                            </p>
                            <p class="text-muted-400 font-sans text-xs">
                              {{ attachment.text || 'لینک' }}
                            </p>
                          </div>
                        </NuxtLink>
                      </template>
                    </div>
                  </div>
                </template>
                <div v-else>
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div
                      class="border-muted-300/50 dark:border-muted-800 w-full border-t"
                    />
                  </div>
                  <div class="relative flex justify-center">
                    <span
                      class="bg-muted-100 dark:bg-muted-900 text-muted-400 px-3 font-sans text-xs uppercase"
                    >
                      {{ item.time }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="botTyping" class="relative flex w-full gap-4">
              <div class="shrink-0">
                <BaseAvatar src="/img/icons/logos/ai-logo.jpg" size="xs" />
              </div>
              <div class="flex max-w-md flex-col">
                <div class="bg-muted-200 dark:bg-muted-800 rounded-xl rounded-ss-none p-4">
                  <div class="flex items-center gap-2">
                    <Icon name="lucide:loader-2" class="size-4 animate-spin" />
                    <p class="font-sans text-sm">در حال دریافت پاسخ...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Compose -->
          <form
            method="POST"
            action=""
            class="bg-muted-100 dark:bg-muted-900 flex h-16 w-full items-center px-4 sm:px-8"
            @submit.prevent="submitMessage"
          >
            <div class="relative w-full">
              <BaseInput
                v-model="message"
                :disabled="messageLoading"
                rounded="full"
                :classes="{
                  input: 'h-12 ps-6 pe-24',
                }"
                placeholder="نوشتن پیام..."
              />
              <div class="absolute end-2 top-0 flex h-10 items-center gap-1">
                <button
                  type="button"
                  class="text-muted-400 hover:text-primary-500 flex h-12 w-10 items-center justify-center transition-colors duration-300"
                  :disabled="messageLoading"
                  @click="fileInput?.click()"
                >
                  <Icon name="lucide:paperclip" class="size-5" />
                </button>
                <input
                  ref="fileInput"
                  type="file"
                  multiple
                  accept="image/jpeg,image/png,image/gif,application/pdf"
                  class="hidden"
                  @change="handleFileSelect"
                >
                <button
                  type="button"
                  class="text-muted-400 hover:text-primary-500 flex h-12 w-10 items-center justify-center transition-colors duration-300"
                  :disabled="messageLoading"
                >
                  <Icon name="lucide:smile" class="size-5" />
                </button>
                <button
                  type="submit"
                  class="text-muted-400 hover:text-primary-500 flex h-12 w-10 items-center justify-center transition-colors duration-300"
                  :disabled="messageLoading || (!message.trim() && !selectedFiles.length)"
                >
                  <Icon name="lucide:send" class="size-5" />
                </button>
              </div>
            </div>
          </form>
          <!-- File Previews -->
          <div v-if="filePreviews.length || selectedFiles.length" class="bg-muted-100 dark:bg-muted-900 flex flex-wrap gap-2 px-4 pb-4 sm:px-8">
            <div
              v-for="(preview, index) in filePreviews"
              :key="index"
              class="relative"
            >
              <img
                :src="preview"
                alt="پیش‌نمایش"
                class="size-16 rounded-lg object-cover"
              >
              <button
                type="button"
                class="absolute right-0 top-0 flex size-5 items-center justify-center rounded-full bg-red-500 text-white"
                @click="removeFile(index)"
              >
                <Icon name="lucide:x" class="size-3" />
              </button>
            </div>
            <div
              v-for="(file, index) in selectedFiles.filter(f => !f.type.startsWith('image/'))"
              :key="`file-${index}`"
              class="dark:bg-muted-800 relative flex items-center rounded-lg bg-white px-2 py-1"
            >
              <Icon name="lucide:file" class="mr-2 size-5" />
              <span class="text-sm">{{ file.name }}</span>
              <button
                type="button"
                class="absolute right-0 top-0 flex size-5 items-center justify-center rounded-full bg-red-500 text-white"
                @click="removeFile(index)"
              >
                <Icon name="lucide:x" class="size-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
