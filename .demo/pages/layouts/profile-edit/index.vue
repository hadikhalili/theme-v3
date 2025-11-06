<script setup lang="ts">
import { ref, computed, watchEffect, nextTick, watch, onMounted } from 'vue'
import { useAsyncData } from '#app'
import { push } from 'notivue'
import { useUserStore } from '~/store/user'

interface UserProfile {
  personalInfo: {
    firstName: string | null
    lastName: string | null
    role: string | null
    picture: string | null
    referralCode?: string | null
    referredByCode?: string | null
    credit?: number | null
  }
  profile: {
    firstName: string | null
    lastName: string | null
    role: string | null
    location: string | null
    bio: string | null
    referralCode?: string | null
    referredByCode?: string | null
    credit?: number | null
  }
  info: {
    experience: string | null
    firstJob: boolean | null
    flexible: boolean | null
    remote: boolean | null
  }
  social: {
    facebook: string | null
    twitter: string | null
    dribbble: string | null
    instagram: string | null
    github: string | null
    gitlab: string | null
  }
  settings?: {
    twoFactor: {
      enabled: boolean
      phoneNumber: string | null
    }
    notifications: {
      enabled: boolean
      flushLowPriority: boolean
      marketing: boolean
      partners: boolean
    }
  }
}

const router = useRouter()
const userStore = useUserStore()
const userId = computed(() => userStore.user?.id ?? null)
const loading = ref(false)
const success = ref(false)
const error = ref<string | null>(null)
const filePreview = ref<string | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const formKey = ref(0)

const formValues = ref({
  firstName: '',
  lastName: '',
  role: '',
  location: '',
  bio: '',
  referralCode: '',
  experience: '',
  firstJob: null as boolean | null,
  flexible: null as boolean | null,
  remote: null as boolean | null,
  facebook: '',
  twitter: '',
  dribbble: '',
  instagram: '',
  github: '',
  gitlab: '',
  profilePicture: '/img/avatars/default-other.jpg',
})

const inviteCode = ref('')
const isReferralLocked = ref(false)
const hasHydratedForm = ref(false)

const emptyProfile: UserProfile = {
  personalInfo: {
    firstName: '',
    lastName: '',
    role: '',
    picture: '/img/avatars/default-other.jpg',
    referralCode: null,
    credit: 0,
  },
  profile: {
    firstName: '',
    lastName: '',
    role: '',
    location: null,
    bio: null,
    referralCode: null,
    credit: 0,
  },
  info: {
    experience: null,
    firstJob: null,
    flexible: null,
    remote: null,
  },
  social: {
    facebook: null,
    twitter: null,
    dribbble: null,
    instagram: null,
    github: null,
    gitlab: null,
  },
  settings: {
    twoFactor: {
      enabled: false,
      phoneNumber: null,
    },
    notifications: {
      enabled: true,
      flushLowPriority: true,
      marketing: false,
      partners: false,
    },
  },
}

const fileName = computed(() => selectedFile.value?.name || 'انتخاب تصویر')
const hasFilePreview = computed(() => !!filePreview.value)
const profilePicture = computed(() => filePreview.value || data.value?.personalInfo?.picture || '/img/placeholder.png')

let cachedProfile: UserProfile | null = null

const { data, error: fetchError, refresh } = await useAsyncData<UserProfile>(
  'profile',
  async () => {
    if (!userId.value) {
      return cachedProfile ?? emptyProfile
    }

    const profile = await $fetch<UserProfile>('/api/profile', {
      method: 'GET',
      query: { userId: userId.value.toString() },
      credentials: 'include',
    })

    cachedProfile = profile
    return profile
  },
  {
    default: () => ({}) as UserProfile,
    watch: [userId],
    server: false,
  },
)

onMounted(async () => {
  const isAuth = await userStore.checkAuth()
  if (!isAuth) {
    await router.push('/auth')
    return
  }
  if (userId.value) {
    await refresh({ dedupe: false })
  }
})

watch(
  () => userStore.user,
  () => {},
  { immediate: true, deep: true },
)

watch(
  userId,
  async (id) => {
    if (id) {
      await refresh({ dedupe: false })
    }
  },
  { immediate: true },
)

watchEffect(() => {
  if (fetchError.value) {
    error.value = fetchError.value?.message || 'خطا در بارگذاری اطلاعات پروفایل'
    push.error({
      title: 'خطا',
      message: error.value,
    })
  }
  else if (data.value && Object.keys(data.value).length > 0) {
    const referredByCode = data.value.profile?.referredByCode
      ?? data.value.personalInfo?.referredByCode
      ?? ''
    Object.assign(formValues.value, {
      firstName: data.value.profile?.firstName ?? '',
      lastName: data.value.profile?.lastName ?? '',
      role: data.value.profile?.role ?? '',
      location: data.value.profile?.location ?? '',
      bio: data.value.profile?.bio ?? '',
      referralCode: referredByCode,
      experience: data.value.info?.experience ?? '',
      firstJob: data.value.info?.firstJob ?? null,
      flexible: data.value.info?.flexible ?? null,
      remote: data.value.info?.remote ?? null,
      facebook: data.value.social?.facebook ?? '',
      twitter: data.value.social?.twitter ?? '',
      dribbble: data.value.social?.dribbble ?? '',
      instagram: data.value.social?.instagram ?? '',
      github: data.value.social?.github ?? '',
      gitlab: data.value.social?.gitlab ?? '',
      profilePicture: data.value.personalInfo?.picture ?? '/img/avatars/default-other.jpg',
    })
    inviteCode.value = data.value.personalInfo?.referralCode
    ?? data.value.profile?.referralCode
    ?? inviteCode.value
    isReferralLocked.value = referredByCode.trim().length > 0
    if (!hasHydratedForm.value) {
      hasHydratedForm.value = true
      formKey.value += 1
    }
  }
})

const handleFileSelect = async (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.files || input.files.length === 0) {
    return
  }

  const file = input.files[0]
  const maxSize = 5 * 1024 * 1024
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']

  if (!allowedTypes.includes(file.type)) {
    push.warning({
      title: 'خطا در انتخاب فایل',
      message: 'نوع فایل ' + file.name + ' پشتیبانی نمی‌شود',
    })
    return
  }

  if (file.size > maxSize) {
    push.warning({
      title: 'خطا در انتخاب فایل',
      message: 'حجم فایل ' + file.name + ' نباید بیشتر از ۵ مگابایت باشد',
    })
    return
  }

  selectedFile.value = file
  filePreview.value = URL.createObjectURL(file)
}

const removeFile = () => {
  if (filePreview.value) {
    URL.revokeObjectURL(filePreview.value)
  }
  selectedFile.value = null
  filePreview.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

watch(
  () => formValues.value.referralCode,
  (newValue) => {
    if (isReferralLocked.value || typeof newValue !== 'string') {
      return
    }
    const sanitized = newValue.toUpperCase().replace(/[^A-Z0-9]/g, '')
    if (sanitized !== newValue) {
      formValues.value.referralCode = sanitized
    }
  },
)

const validateForm = () => {
  if (!formValues.value.firstName.trim()) {
    error.value = 'نام را وارد کنید.'
    push.error({ title: 'خطا', message: error.value })
    return false
  }
  if (!formValues.value.lastName.trim()) {
    error.value = 'نام خانوادگی را وارد کنید.'
    push.error({ title: 'خطا', message: error.value })
    return false
  }
  if (!formValues.value.role.trim()) {
    error.value = 'عنوان شغلی را وارد کنید.'
    push.error({ title: 'خطا', message: error.value })
    return false
  }
  return true
}

const submitForm = async () => {
  if (!validateForm()) {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  loading.value = true
  success.value = false
  error.value = null

  try {
    const formData = new FormData()
    formData.append('profile', JSON.stringify({
      firstName: formValues.value.firstName,
      lastName: formValues.value.lastName,
      role: formValues.value.role,
      location: formValues.value.location || null,
      bio: formValues.value.bio || null,
      referralCode: formValues.value.referralCode || null,
    }))
    formData.append('info', JSON.stringify({
      experience: formValues.value.experience || null,
      firstJob: formValues.value.firstJob,
      flexible: formValues.value.flexible,
      remote: formValues.value.remote,
    }))
    formData.append('social', JSON.stringify({
      facebook: formValues.value.facebook || null,
      twitter: formValues.value.twitter || null,
      dribbble: formValues.value.dribbble || null,
      instagram: formValues.value.instagram || null,
      github: formValues.value.github || null,
      gitlab: formValues.value.gitlab || null,
    }))
    formData.append('userId', userId.value?.toString() || '')
    if (selectedFile.value) {
      formData.append('avatar', selectedFile.value)
    }

    const response = await $fetch<UserProfile>('/api/profile', {
      method: 'POST',
      body: formData,
      query: { userId: userId.value?.toString() },
      credentials: 'include',
    })

    let updatedReferredByCode: string | undefined
    if (response && typeof response === 'object') {
      if ('referredByCode' in response) {
        updatedReferredByCode = String((response as any).referredByCode ?? '')
        formValues.value.referralCode = updatedReferredByCode
      }
      if ('referralCode' in response) {
        inviteCode.value = String((response as any).referralCode ?? inviteCode.value ?? '')
      }
    }
    const lockSource = updatedReferredByCode ?? formValues.value.referralCode ?? ''
    isReferralLocked.value = lockSource.trim().length > 0

    push.success({
      title: 'موفقیت',
      message: 'پروفایل با موفقیت به‌روزرسانی شد.',
    })

    await refresh({ dedupe: false })
    await nextTick()
    formKey.value += 1

    if (filePreview.value) {
      URL.revokeObjectURL(filePreview.value)
      filePreview.value = null
      selectedFile.value = null
    }

    success.value = true
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      success.value = false
    }, 3000)
  }
  catch (err: any) {
    error.value = err.message || 'خطا در به‌روزرسانی پروفایل'
    push.error({
      title: 'خطا',
      message: error.value || '',
    })
    const persistedReferredBy = data.value?.profile?.referredByCode
      ?? data.value?.personalInfo?.referredByCode
      ?? ''
    isReferralLocked.value = persistedReferredBy.trim().length > 0
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="relative">
    <div class="bg-muted-100 dark:bg-muted-900 flex min-h-screen">
      <div class="relative w-full p-4 sm:p-8">
        <div class="flex w-full flex-col">
          <div class="flex h-16 w-full items-center justify-between px-4 sm:px-8">
            <h1 class="text-2xl font-bold">
              ویرایش پروفایل
            </h1>
          </div>
          <div class="nui-slimscroll relative h-[calc(100vh_-_128px)] w-full overflow-y-auto p-4 sm:p-8">
            <div
              class="bg-muted-100 dark:bg-muted-900 pointer-events-none absolute inset-0 z-10 size-full p-8 transition-opacity duration-300"
              :class="loading ? 'opacity-100' : 'opacity-0 pointer-events-none'"
            >
              <div class="mt-12 space-y-4">
                <BasePlaceload class="h-10 w-full max-w-md rounded" />
                <BasePlaceload class="h-10 w-full max-w-md rounded" />
                <BasePlaceload class="h-10 w-full max-w-md rounded" />
              </div>
            </div>
            <form
              v-if="!loading"
              :key="formKey"
              @submit.prevent="submitForm"
            >
              <div class="mb-6">
                <h2 class="mb-2 text-xl font-semibold">
                  اطلاعات شخصی
                </h2>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label for="firstName" class="block text-sm font-medium">نام</label>
                    <BaseInput
                      id="firstName"
                      v-model.trim="formValues.firstName"
                      type="text"
                      rounded="lg"
                      :classes="{ wrapper: 'h-10' }"
                      :class="{ 'border-red-500': error && !formValues.firstName.trim() }"
                    />
                    <span v-if="error && !formValues.firstName.trim()" class="text-sm text-red-500">نام را وارد کنید.</span>
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-medium">نام خانوادگی</label>
                    <BaseInput
                      id="lastName"
                      v-model.trim="formValues.lastName"
                      type="text"
                      rounded="lg"
                      :classes="{ wrapper: 'h-10' }"
                      :class="{ 'border-red-500': error && !formValues.lastName.trim() }"
                    />
                    <span v-if="error && !formValues.lastName.trim()" class="text-sm text-red-500">نام خانوادگی را وارد کنید.</span>
                  </div>
                  <div>
                    <label for="role" class="block text-sm font-medium">عنوان شغلی</label>
                    <BaseInput
                      id="role"
                      v-model.trim="formValues.role"
                      type="text"
                      rounded="lg"
                      :classes="{ wrapper: 'h-10' }"
                      :class="{ 'border-red-500': error && !formValues.role.trim() }"
                    />
                    <span v-if="error && !formValues.role.trim()" class="text-sm text-red-500">عنوان شغلی را وارد کنید.</span>
                  </div>
                  <div>
                    <label for="referralCode" class="block text-sm font-medium">کد معرف</label>
                    <BaseInput
                      id="referralCode"
                      v-model.trim="formValues.referralCode"
                      type="text"
                      rounded="lg"
                      maxlength="32"
                      autocomplete="off"
                      :disabled="loading || isReferralLocked"
                      :classes="{ wrapper: 'h-10' }"
                    />
                    <p v-if="!isReferralLocked" class="text-muted-500 mt-1 text-xs">
                      لطفاً فقط از حروف و اعداد انگلیسی استفاده کنید.
                    </p>
                    <p v-else class="text-muted-500 mt-1 text-xs">
                      کد معرف شما ثبت شده و امکان تغییر آن وجود ندارد.
                    </p>
                  </div>
                  <div>
                    <label for="inviteCode" class="block text-sm font-medium">دیگران را دعوت کنید</label>
                    <BaseInput
                      id="inviteCode"
                      v-model="inviteCode"
                      type="text"
                      rounded="lg"
                      readonly
                      autocomplete="off"
                      :classes="{ wrapper: 'h-10' }"
                    />
                    <p class="text-muted-500 mt-1 text-xs">
                      این کد را با دوستان خود به اشتراک بگذارید تا اعتبار دریافت کنید.
                    </p>
                  </div>
                  <div>
                    <label for="avatar" class="block text-sm font-medium">تصویر پروفایل</label>
                    <input
                      id="avatar"
                      ref="fileInput"
                      type="file"
                      class="hidden"
                      accept="image/jpeg,image/png,image/gif"
                      @change="handleFileSelect"
                    >
                    <button
                      type="button"
                      class="flex h-10 w-full items-center justify-center rounded-lg border border-gray-300 bg-white text-sm"
                      @click="fileInput?.click()"
                    >
                      {{ fileName }}
                    </button>
                    <div v-if="hasFilePreview" class="relative mt-2">
                      <img
                        :src="profilePicture"
                        alt="Profile Picture"
                        class="size-24 rounded-full object-cover"
                      >
                      <button
                        type="button"
                        class="absolute right-0 top-0 flex size-5 items-center justify-center rounded-full bg-red-500 text-white"
                        @click="removeFile"
                      >
                        <Icon name="lucide:x" class="size-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-6">
                <h2 class="mb-2 text-xl font-semibold">
                  اطلاعات تماس و توضیحات
                </h2>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label for="location" class="block text-sm font-medium">محل سکونت</label>
                    <BaseInput
                      id="location"
                      v-model.trim="formValues.location"
                      type="text"
                      rounded="lg"
                      :classes="{ wrapper: 'h-10' }"
                    />
                  </div>
                  <div>
                    <label for="bio" class="block text-sm font-medium">بیوگرافی</label>
                    <BaseTextarea
                      id="bio"
                      v-model.trim="formValues.bio"
                      rounded="lg"
                      :classes="{ textarea: 'h-24' }"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-6">
                <h2 class="mb-2 text-xl font-semibold">
                  اطلاعات شغلی و ترجیحات
                </h2>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label for="experience" class="block text-sm font-medium">سابقه کاری</label>
                    <BaseInput
                      id="experience"
                      v-model.trim="formValues.experience"
                      type="text"
                      rounded="lg"
                      :classes="{ wrapper: 'h-10' }"
                    />
                  </div>
                  <div>
                    <label for="firstJob" class="block text-sm font-medium">آیا این اولین شغل شماست؟</label>
                    <BaseSelect
                      id="firstJob"
                      v-model="formValues.firstJob"
                      rounded="lg"
                      :classes="{ wrapper: 'h-10' }"
                    >
                      <option :value="null">
                        انتخاب کنید
                      </option>
                      <option :value="true">
                        بله
                      </option>
                      <option :value="false">
                        خیر
                      </option>
                    </BaseSelect>
                  </div>
                  <div>
                    <label for="flexible" class="block text-sm font-medium">انعطاف‌پذیری در برنامه کاری</label>
                    <BaseSelect
                      id="flexible"
                      v-model="formValues.flexible"
                      rounded="lg"
                      :classes="{ wrapper: 'h-10' }"
                    >
                      <option :value="null">
                        انتخاب کنید
                      </option>
                      <option :value="true">
                        بله
                      </option>
                      <option :value="false">
                        خیر
                      </option>
                    </BaseSelect>
                  </div>
                  <div>
                    <label for="remote" class="block text-sm font-medium">مایل به دورکاری هستید؟</label>
                    <BaseSelect
                      id="remote"
                      v-model="formValues.remote"
                      rounded="lg"
                      :classes="{ wrapper: 'h-10' }"
                    >
                      <option :value="null">
                        انتخاب کنید
                      </option>
                      <option :value="true">
                        بله
                      </option>
                      <option :value="false">
                        خیر
                      </option>
                    </BaseSelect>
                  </div>
                </div>
              </div>
              <div class="mb-6">
                <h2 class="mb-2 text-xl font-semibold">
                  شبکه‌های اجتماعی
                </h2>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label for="facebook" class="block text-sm font-medium">فیسبوک</label>
                    <BaseInput
                      id="facebook"
                      v-model.trim="formValues.facebook"
                      type="text"
                      rounded="lg"
                      :classes="{ wrapper: 'h-10' }"
                    />
                  </div>
                  <div>
                    <label for="twitter" class="block text-sm font-medium">توئیتر</label>
                    <BaseInput
                      id="twitter"
                      v-model.trim="formValues.twitter"
                      type="text"
                      rounded="lg"
                      :classes="{ wrapper: 'h-10' }"
                    />
                  </div>
                  <div>
                    <label for="dribbble" class="block text-sm font-medium">دریبل</label>
                    <BaseInput
                      id="dribbble"
                      v-model.trim="formValues.dribbble"
                      type="text"
                      rounded="lg"
                      :classes="{ wrapper: 'h-10' }"
                    />
                  </div>
                  <div>
                    <label for="instagram" class="block text-sm font-medium">اینستاگرام</label>
                    <BaseInput
                      id="instagram"
                      v-model.trim="formValues.instagram"
                      type="text"
                      rounded="lg"
                      :classes="{ wrapper: 'h-10' }"
                    />
                  </div>
                  <div>
                    <label for="github" class="block text-sm font-medium">گیت‌هاب</label>
                    <BaseInput
                      id="github"
                      v-model.trim="formValues.github"
                      type="text"
                      rounded="lg"
                      :classes="{ wrapper: 'h-10' }"
                    />
                  </div>
                  <div>
                    <label for="gitlab" class="block text-sm font-medium">گیت‌لب</label>
                    <BaseInput
                      id="gitlab"
                      v-model.trim="formValues.gitlab"
                      type="text"
                      rounded="lg"
                      :classes="{ wrapper: 'h-10' }"
                    />
                  </div>
                </div>
              </div>
              <div class="flex justify-end">
                <button
                  type="submit"
                  class="bg-primary-500 hover:bg-primary-600 flex h-10 items-center justify-center rounded-lg px-4 text-white transition-colors duration-300"
                  :disabled="loading || success"
                >
                  <span v-if="success">ذخیره شد!</span>
                  <span v-else>ذخیره تغییرات</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
