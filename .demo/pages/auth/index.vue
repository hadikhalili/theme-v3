<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'
import {
  useTokenClient,
  type AuthCodeFlowSuccessResponse,
  type AuthCodeFlowErrorResponse,
} from 'vue3-google-signin'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '~/store/user'
import { useCustomFetch } from '~/composables/useCustomFetch'

const userStore = useUserStore() // استفاده از store
const router = useRouter()
const route = useRoute()
const loading = ref(false)

definePageMeta({
  layout: 'empty',
  title: 'ورود',
  preview: {
    title: 'ورود ۱',
    description: 'برای احراز هویت و ورود',
    categories: ['چیدمان‌ها', 'احراز هویت'],
    src: '/img/screens/auth-login-1.png',
    srcDark: '/img/screens/auth-login-1-dark.png',
    order: 151,
  },
})

const VALIDATION_TEXT = {
  EMAIL_REQUIRED: 'یک ایمیل معتبر لازم است',
  PASSWORD_REQUIRED: 'وارد کردن رمز عبور لازم است',
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z.object({
  email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
  password: z.string().min(1, VALIDATION_TEXT.PASSWORD_REQUIRED),
  trustDevice: z.boolean(),
})

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = {
  email: '',
  password: '',
  trustDevice: false,
} satisfies FormInput

const {
  handleSubmit,
  handleReset,
  isSubmitting,
  setFieldError,
  meta,
  values,
  errors,
  resetForm,
  setFieldValue,
  setErrors,
} = useForm({
  validationSchema,
  initialValues,
})

// چک وضعیت authenticated و redirect اگر وارد شده
onMounted(async () => {
  const isAuth = await userStore.checkAuth()
  if (isAuth) {
    await router.push('/dashboards') // redirect به صفحه خانه
  }
})

// فرم ورود با username/password
const onSubmit = handleSubmit(async (values) => {
  loading.value = true
  try {
    await userStore.login(values.email, values.password)
    push.success({
      title: 'ورود موفق',
      message: 'ورود با موفقیت انجام شد',
    })
    await router.push('/dashboards') // redirect پس از موفقیت
  }
  catch (error: any) {
    console.error('Login error:', error)
    setFieldError('password', 'نام کاربری یا رمز عبور نامعتبر است')
    push.error({
      title: 'خطا در ورود',
      message: error.message || 'ورود ناموفق بود',
    })
    resetForm() // reset فرم در صورت خطا
  }
  finally {
    loading.value = false
  }
})

// ورود با گوگل
interface GoogleUserInfo {
  sub: string
  email: string
  name: string
  picture?: string
}

const handleOnSuccess = async (response: AuthCodeFlowSuccessResponse) => {
  loading.value = true
  const { customFetch } = useCustomFetch()
  try {
    // console.log('Google Response:', response)

    // بررسی وجود access_token
    if (!response.access_token || typeof response.access_token !== 'string') {
      throw new Error('No valid access token provided')
    }

    const userInfo = await customFetch<GoogleUserInfo>('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${response.access_token}`,
      },
    })

    await userStore.googleLogin(userInfo.sub, userInfo.email, userInfo.name)
    push.success({
      title: 'ورود موفق',
      message: 'ورود با گوگل با موفقیت انجام شد',
    })
    router.push('/dashboards') // redirect پس از موفقیت
  }
  catch (error: any) {
    console.error('Error handling Google Sign-In:', error)
    push.error({
      title: 'خطا در ورود با گوگل',
      message: error.message || 'ورود ناموفق بود',
    })
  }
  finally {
    loading.value = false
  }
}

const handleOnError = (errorResponse: AuthCodeFlowErrorResponse) => {
  console.log('Error: ', errorResponse)
  push.error({
    title: 'خطا در ورود با گوگل',
    message: 'ورود ناموفق بود',
  })
}

const { isReady, login } = useTokenClient({
  onSuccess: handleOnSuccess,
  onError: handleOnError,
})

</script>

<template>
  <div class="dark:bg-muted-800 flex min-h-screen bg-white">
    <div
      class="relative flex flex-1 flex-col justify-center px-6 py-12 lg:w-2/5 lg:flex-none"
    >
      <div class="dark:bg-muted-800 relative mx-auto w-full max-w-sm bg-white">
        <!--Nav-->
        <div class="flex w-full items-center justify-between">
          <button class="btn btn-active btn-accent">Accent</button>
          <NuxtLink
            to="/dashboards"
            class="text-muted-400 hover:text-primary-500 flex items-center gap-2 font-sans font-medium transition-colors duration-300"
          >
            <Icon name="gg:arrow-long-left" class="size-5 rtl:rotate-180" />
            <span>بازگشت به خانه</span>
          </NuxtLink>
          <!--Theme button-->
          <BaseThemeToggle />
        </div>
        <div>
          <BaseHeading
            as="h2"
            size="3xl"
            lead="relaxed"
            weight="medium"
            class="mt-6"
          >
            خوش آمدید.
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-400 mb-6">
            با استفاده از حساب گوگل یا اطلاعات ورود خود وارد شوید.
          </BaseParagraph>
          <!-- Social Sign Up Buttons -->
          <div class="flex flex-wrap justify-between gap-4">
            <!--Google button-->
            <button
              class="dark:bg-muted-700 text-muted-800 border-muted-300 dark:border-muted-600 nui-focus relative inline-flex grow items-center justify-center gap-2 rounded border bg-white px-6 py-4 dark:text-white"
              :disabled="!isReady || loading"
              @click="() => login()"
            >
              <Icon name="logos:google-icon" class="size-5" />
              <div>با گوگل وارد شوید</div>
            </button>
          </div>
          <!-- 'or' divider -->
          <div class="flex-100 mt-8 flex items-center">
            <hr
              class="border-muted-200 dark:border-muted-700 flex-auto border-t-2"
            >
            <span
              class="text-muted-600 dark:text-muted-300 px-4 font-sans font-light"
            >
              یا
            </span>
            <hr
              class="border-muted-200 dark:border-muted-700 flex-auto border-t-2"
            >
          </div>
        </div>

        <!--Form section-->
        <form
          method="POST"
          action=""
          class="mt-6"
          novalidate
          @submit.prevent="onSubmit"
        >
          <div class="mt-5">
            <div>
              <div class="space-y-4">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="email"
                >
                  <BaseInput
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting || loading"
                    type="email"
                    label="آدرس ایمیل"
                    placeholder="آدرس ایمیل"
                    autocomplete="email"
                    :classes="{
                      input: 'h-12',
                    }"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>

                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="password"
                >
                  <BaseInput
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting || loading"
                    type="password"
                    label="رمز عبور"
                    placeholder="رمز عبور"
                    autocomplete="current-password"
                    :classes="{
                      input: 'h-12',
                    }"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
              </div>

              <div class="mt-6 flex items-center justify-between">
                <Field
                  v-slot="{ field, handleChange, handleBlur }"
                  name="trustDevice"
                >
                  <BaseCheckbox
                    :model-value="field.value"
                    :disabled="isSubmitting || loading"
                    rounded="sm"
                    label="اعتماد برای ۶۰ روز"
                    color="primary"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>

                <div class="text-xs leading-5">
                  <NuxtLink
                    to="/auth/recover"
                    class="text-primary-600 hover:text-primary-500 font-sans font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                  >
                    رمز عبور خود را فراموش کرده‌اید؟
                  </NuxtLink>
                </div>
              </div>

              <!--Submit-->
              <div class="mt-6">
                <div class="block w-full rounded-md shadow-sm">
                  <BaseButton
                    :disabled="isSubmitting || loading"
                    :loading="isSubmitting || loading"
                    type="submit"
                    color="primary"
                    class="!h-11 w-full"
                  >
                    ورود
                  </BaseButton>
                </div>
              </div>
            </div>

            <!--No account link-->
            <p
              class="text-muted-400 mt-4 flex justify-between font-sans text-xs leading-5"
            >
              <span>حساب کاربری ندارید؟</span>
              <NuxtLink
                to="/auth/signup-1"
                class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
              >
                ثبت نام
              </NuxtLink>
            </p>
          </div>
        </form>
      </div>
    </div>
    <div
      class="bg-muted-100 dark:bg-muted-900 relative hidden w-0 flex-1 items-center justify-center lg:flex lg:w-3/5"
    >
      <div class="mx-auto w-full max-w-4xl">
        <!--Media image-->
        <img
          class="mx-auto max-w-md"
          src="/img/illustrations/magician.svg"
          alt=""
          width="500"
          height="500"
        >
      </div>
    </div>
  </div>
</template>
