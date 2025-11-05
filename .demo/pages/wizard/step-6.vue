<script setup lang="ts">
import type { Project, ProjectStepData, Tool } from '../../types'

definePageMeta({
  title: 'ویزارد — گام ۶',
  preview: {
    title: 'ویزارد — گام ۶',
    description: 'برای مراحل راه‌اندازی و فرم‌های مرحله‌ای',
    categories: ['داشبوردها', 'ویزاردها', 'فرم‌ها'],
    src: '/img/screens/wizard-6.png',
    srcDark: '/img/screens/wizard-6-dark.png',
    order: 35,
  },
})
useHead({
  title: 'ابزارهای پروژه',
})

const { data: project, checkPreviousSteps } = useMultiStepForm<Project, ProjectStepData>()

onBeforeMount(checkPreviousSteps)

const tools: Tool[] = [
  {
    name: 'ایلاستریتور',
    description: 'نرم‌افزار طراحی',
    logo: '/img/logos/tools/illustrator.svg',
  },
  {
    name: 'فتوشاپ',
    description: 'نرم‌افزار طراحی',
    logo: '/img/logos/tools/photoshop.svg',
  },
  {
    name: 'ادوبی XD',
    description: 'نرم‌افزار طراحی',
    logo: '/img/logos/tools/xd.svg',
  },
  {
    name: 'فیگما',
    description: 'نرم‌افزار طراحی',
    logo: '/img/logos/tools/xd.svg',
  },
  {
    name: 'اینوژن',
    description: 'نرم‌افزار طراحی',
    logo: '/img/logos/tools/invision.svg',
  },
  {
    name: 'جیرا',
    description: 'ردیاب مشکلات',
    logo: '/img/logos/tools/jira.svg',
  },
  {
    name: 'تایگا',
    description: 'تخته اسکرام',
    logo: '/img/logos/tools/taiga.svg',
  },
  {
    name: 'اسلک',
    description: 'اپلیکیشن پیام‌رسان',
    logo: '/img/logos/tools/slack.svg',
  },
  {
    name: 'آسانا',
    description: 'مدیریت وظایف',
    logo: '/img/logos/tools/asana.svg',
  },
  {
    name: 'تیم‌ورک',
    description: 'اپلیکیشن همکاری',
    logo: '/img/logos/tools/teamwork.svg',
  },
  {
    name: 'گیت‌هاب',
    description: 'مخزن کد',
    logo: '/img/logos/tools/github.svg',
  },
  {
    name: 'گیت‌لب',
    description: 'مخزن کد',
    logo: '/img/logos/tools/gitlab.svg',
  },
]
</script>

<template>
  <div>
    <DemoWizardStepTitle />

    <div class="mx-auto grid max-w-4xl gap-4 px-4 sm:grid-cols-3">
      <!-- Tools -->
      <div
        v-for="tool in tools"
        :key="tool.name"
        class="relative"
      >
        <BaseCheckboxHeadless
          v-model="project.tools"
          :value="tool"
          :name="tool.name"
        >
          <BaseCard
            rounded="lg"
            class="peer-checked:border-primary-500 peer-checked:shadow-muted-300/30 dark:peer-checked:shadow-muted-900/30 p-4 peer-checked:shadow-xl"
          >
            <div class="flex items-center gap-3">
              <img
                :src="tool.logo"
                class="size-8"
                alt=""
              >
              <div>
                <div
                  class="text-muted-800 dark:text-muted-100 text-sm font-medium"
                >
                  {{ tool.name }}
                </div>
                <div class="text-muted-400 text-xs">
                  {{ tool.description }}
                </div>
              </div>
            </div>
          </BaseCard>
        </BaseCheckboxHeadless>
      </div>
    </div>
  </div>
</template>
