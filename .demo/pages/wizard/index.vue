<script setup lang="ts">
import type { Project, ProjectStepData, ProjectType } from '../../types'

definePageMeta({
  title: 'ویزارد — گام ۱',
  preview: {
    title: 'ویزارد — گام ۱',
    description: 'برای مراحل راه‌اندازی و فرم‌های مرحله‌ای',
    categories: ['داشبوردها', 'ویزاردها', 'فرم‌ها'],
    src: '/img/screens/wizard-1.png',
    srcDark: '/img/screens/wizard-1-dark.png',
    order: 30,
  },
})
useHead({
  title: 'نوع پروژه',
})

const {
  getNextStep,
  data: project,
  handleSubmit,
  goToStep,
} = useMultiStepForm<Project, ProjectStepData>()

function onSelectType(type: ProjectType) {
  // const next = getNextStep()
  // if (next) {
  project.value.type = type
  handleSubmit()
  // goToStep(next)
  // }
}
</script>

<template>
  <div>
    <DemoWizardStepTitle />
    <div class="mx-auto w-full max-w-6xl px-4 text-center">
      <div class="ltablet:grid-cols-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Choice -->
        <div
          class="dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl"
          :class="[
            project.type === 'design'
              ? 'dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl'
              : '',
          ]"
        >
          <img
            class="rounded-2xl"
            src="/img/illustrations/wizard/design.svg"
            alt="طراحی UI/UX"
          >
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              <span>طراحی UI/UX</span>
            </BaseHeading>
            <BaseParagraph class="text-muted-400">
              <span>
                طراحی UI/UX برای بهبود تعامل بین کاربر و محصول انجام می‌شود.
              </span>
            </BaseParagraph>
          </div>
          <div class="mb-5 flex flex-col items-center">
            <BaseButton
              :to="getNextStep()?.to"
              color="primary"
              rounded="lg"
              class="w-36"
              @click.prevent="() => onSelectType('design')"
            >
              <span>
                {{ project.type === 'design' ? 'انتخاب شده' : 'ادامه' }}
              </span>
            </BaseButton>
            <div class="mt-4 text-center">
              <NuxtLink
                to="/wizard"
                class="text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <span>بیشتر بیاموزید</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- Choice -->
        <div
          class="dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl"
          :class="[
            project.type === 'development'
              ? 'dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl'
              : '',
          ]"
        >
          <img
            class="rounded-2xl"
            src="/img/illustrations/wizard/development.svg"
            alt="توسعه وب"
          >
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              <span>توسعه وب</span>
            </BaseHeading>
            <BaseParagraph class="text-muted-400">
              <span>
                یک رشته که شامل ایجاد وب‌سایت‌ها و برنامه‌های وب است
              </span>
            </BaseParagraph>
          </div>
          <div class="mb-5 flex flex-col items-center">
            <BaseButton
              :to="getNextStep()?.to"
              color="primary"
              rounded="lg"
              class="w-36"
              @click.prevent="() => onSelectType('development')"
            >
              <span>
                {{ project.type === 'development' ? 'انتخاب شده' : 'ادامه' }}
              </span>
            </BaseButton>
            <div class="mt-4 text-center">
              <NuxtLink
                to="/wizard"
                class="text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <span>بیشتر بیاموزید</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- Choice -->
        <div
          class="dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl"
          :class="[
            project.type === 'marketing'
              ? 'dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl'
              : '',
          ]"
        >
          <img
            class="rounded-2xl"
            src="/img/illustrations/wizard/marketing.svg"
            alt="توسعه وب"
          >
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              <span>بازاریابی</span>
            </BaseHeading>
            <BaseParagraph class="text-muted-400">
              <span>
                یک رشته که شامل ایجاد محتوای تبلیغاتی است
              </span>
            </BaseParagraph>
          </div>
          <div class="mb-5 flex flex-col items-center">
            <BaseButton
              :to="getNextStep()?.to"
              color="primary"
              rounded="lg"
              class="w-36"
              @click.prevent="() => onSelectType('marketing')"
            >
              <span>
                {{ project.type === 'marketing' ? 'انتخاب شده' : 'ادامه دادن' }}
              </span>
            </BaseButton>
            <div class="mt-4 text-center">
              <NuxtLink
                to="/wizard"
                class="text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <span>بیشتر بیاموزید</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
