<script setup lang="ts">
import type { Project, ProjectStepData } from '../types'

definePageMeta({
  layout: 'empty',
})
useHead({
  titleTemplate: title => `${title} | ویزارد - گام ${currentStepId.value + 1}`,
})

const initialState = ref<Project>({
  type: undefined,
  name: '',
  description: '',
  startDate: undefined,
  endDate: undefined,
  customer: {
    name: undefined,
    logo: undefined,
    location: undefined,
  },
  files: null,
  avatar: null,
  team: [],
  tools: [],
  budget: '< 5K',
})

const toaster = useToaster()

const { handleSubmit, currentStepId } = provideMultiStepForm({
  initialState,
  steps: [
    {
      to: '/wizard',
      meta: {
        name: 'نوع پروژه',
        title: 'نوع پروژه را انتخاب کنید',
        subtitle: 'نوع پروژه‌ای که می‌خواهید ایجاد کنید را انتخاب کنید',
      },
      validate({ data, setFieldError, resetFieldError }) {
        resetFieldError(['type'])
        if (!data.value.type) {
          setFieldError('type', 'لطفاً نوعی را انتخاب کنید')
        }
      },
    },
    {
      to: '/wizard/step-2',
      meta: {
        name: 'اطلاعات پروژه',
        title: 'این پروژه درباره چیست؟',
        subtitle: 'مدیریت بهتر با افزودن تمام اطلاعات مربوط به پروژه',
      },
      validate({ data, setFieldError, resetFieldError }) {
        resetFieldError(['name'])
        if (!data.value.name) {
          setFieldError('name', 'لطفاً نام پروژه را وارد کنید')
        }
      },
    },
    {
      to: '/wizard/step-3',
      meta: {
        name: 'جزئیات پروژه',
        title: 'جزئیات بیشتری اضافه کنید',
        subtitle: 'جزئیات مفید را به پروژه خود اضافه کنید. می‌توانید این را بعداً ویرایش کنید',
      },
    },
    {
      to: '/wizard/step-4',
      meta: {
        name: 'فایل‌های پروژه',
        title: 'فایل‌ها را به این پروژه اضافه کنید',
        subtitle:
          'یا می‌توانید این مرحله را رد کنید. همیشه می‌توانید فایل‌های بیشتری بعداً اضافه کنید',
      },
    },
    {
      to: '/wizard/step-5',
      meta: {
        name: 'عضو تیم',
        title: 'چه کسی روی این پروژه کار خواهد کرد؟',
        subtitle: 'با افزودن اعضای تیم خود شروع کنید',
      },
    },
    {
      to: '/wizard/step-6',
      meta: {
        name: 'ابزارهای پروژه',
        title: 'چه ابزارهایی را استفاده خواهید کرد؟',
        subtitle: 'مجموعه‌ای از ابزارهایی که در این پروژه استفاده خواهید کرد را انتخاب کنید',
      },
    },
    {
      to: '/wizard/step-7',
      meta: {
        preview: true,
        name: 'پایان',
        title: 'مطمئن شوید که خوب به نظر می‌رسد',
        subtitle:
          'می‌توانید به مراحل قبلی برگردید اگر نیاز به ویرایش چیزی دارید',
      },
    },
  ],
  onSubmit: async (state, ctx) => {
    // Simulate async request
    await new Promise(resolve => setTimeout(resolve, 4000))

    toaster.clearAll()
    toaster.show({
      title: 'موفقیت',
      message: `پروژه ${state.name} ایجاد شد!`,
      color: 'success',
      icon: 'ph:check',
      closable: true,
    })
  },
  onError: (error) => {
    toaster.clearAll()
    toaster.show({
      title: 'اوه!',
      message: error.message,
      color: 'danger',
      icon: 'lucide:alert-triangle',
      closable: true,
    })
  },
})
</script>

<template>
  <TairoSidebarLayout
    :toolbar="false"
    :sidebar="false"
    class="bg-muted-100 dark:bg-muted-900 min-h-screen w-full"
  >
    <template #logo>
      <NuxtLink
        to="/"
        class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
        @click.prevent="$router.back()"
      >
        <Icon name="lucide:arrow-left" class="size-5 rtl:rotate-180" />
      </NuxtLink>
    </template>

    <DemoWizardNavigation />

    <form
      action=""
      method="POST"
      novalidate
      @submit.prevent="handleSubmit"
    >
      <div class="pb-32 pt-24">
        <NuxtPage />
      </div>
      <DemoWizardButtons />
    </form>
  </TairoSidebarLayout>
</template>
