<script setup lang="ts">
import type { Project, ProjectStepData } from '../../types'

definePageMeta({
  title: 'ویزارد — گام ۴',
  preview: {
    title: 'ویزارد — گام ۴',
    description: 'برای مراحل راه‌اندازی و فرم‌های مرحله‌ای',
    categories: ['داشبوردها', 'ویزاردها', 'فرم‌ها'],
    src: '/img/screens/wizard-4.png',
    srcDark: '/img/screens/wizard-4-dark.png',
    order: 33,
  },
})
useHead({
  title: 'فایل‌های پروژه',
})

const { data: project, checkPreviousSteps } = useMultiStepForm<Project, ProjectStepData>()

onBeforeMount(checkPreviousSteps)

const toggled = ref(Boolean(project.value.files?.length))
</script>

<template>
  <div>
    <DemoWizardStepTitle />

    <div class="px-4">
      <BasePlaceholderPage
        v-if="!toggled"
        title="آپلود فایل‌های پروژه"
        subtitle="اگر فایل‌های مورد نیاز دارید، آنها را به پروژه خود اضافه کنید. نگران نباشید، می‌توانید بعداً هم فایل‌ها را مدیریت کنید."
      >
        <template #image>
          <img
            src="/img/illustrations/wizard/upload.svg"
            class="mx-auto max-w-[210px] rounded-full"
            alt="بارگذاری فایل‌ها"
          >
        </template>
        <div class="mt-2 text-center">
          <button
            type="button"
            class="text-primary-500 font-sans underline underline-offset-4"
            @click="toggled = true"
          >
            بارگذاری فایل‌ها
          </button>
        </div>
      </BasePlaceholderPage>
      <div v-else class="relative mx-auto max-w-3xl">
        <BaseInputFileHeadless
          v-slot="{ open, remove, preview, drop, files }"
          v-model="project.files"
          multiple
        >
          <!-- Controls -->
          <div class="mb-4 flex items-center gap-2">
            <button
              type="button"
              class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-10 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
              tooltip="انتخاب فایل‌ها"
              @click="open"
            >
              <Icon name="lucide:plus" class="size-4" />
              <span class="sr-only">انتخاب فایل‌ها</span>
            </button>
            <button
              type="button"
              class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-10 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
              tooltip="شروع آپلود"
            >
              <Icon name="lucide:arrow-up" class="size-4" />

              <span class="sr-only">شروع آپلود</span>
            </button>
          </div>

          <div
            role="button"
            tabindex="-1"
            class=""
            @dragenter.stop.prevent
            @dragover.stop.prevent
            @drop="drop"
          >
            <div
              v-if="!files?.length"
              class="nui-focus border-muted-300 dark:border-muted-800 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-700 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300"
              tabindex="0"
              role="button"
              @click="open"
              @keydown.enter.prevent="open"
            >
              <div class="p-5 text-center">
                <Icon
                  name="mdi-light:cloud-upload"
                  class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 size-12 transition-colors duration-300"
                />
                <h4 class="text-muted-400 font-sans text-base">
                  فایل‌ها را برای بارگذاری رها کنید
                </h4>
                <div>
                  <span
                    class="text-muted-400 font-sans text-xs font-semibold uppercase"
                  >
                    یا
                  </span>
                </div>
                <label
                  for="file"
                  class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-base underline underline-offset-4 transition-colors duration-300"
                >
                  انتخاب فایل‌ها
                </label>
              </div>
            </div>
            <ul v-else class="mt-6 space-y-2">
              <li v-for="file in files" :key="file.name">
                <div
                  class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3"
                >
                  <div class="flex items-center gap-2">
                    <div class="shrink-0">
                      <img
                        v-if="file.type.startsWith('image')"
                        class="size-14 rounded-xl object-cover object-center"
                        :src="preview(file).value"
                        alt="Image preview"
                      >
                      <img
                        v-else
                        class="size-14 rounded-xl object-cover object-center"
                        src="/img/avatars/placeholder-file.png"
                        alt="Image preview"
                      >
                    </div>
                    <div class="font-sans">
                      <span
                        class="text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm"
                      >
                        {{ file.name }}
                      </span>
                      <span class="text-muted-400 block text-xs">
                        {{ formatFileSize(file.size) }}
                      </span>
                    </div>
                  </div>

                  <div
                    class="ms-auto w-32 px-4 transition-opacity duration-300"
                    :class="'opacity-100'"
                  >
                    <BaseProgress
                      :value="0"
                      size="xs"
                      :color="'success'"
                    />
                  </div>
                  <div class="flex gap-2">
                    <button
                      class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                      disabled
                      type="button"
                      tooltip="لغو"
                    >
                      <Icon name="lucide:slash" class="size-4" />
                      <span class="sr-only">لغو</span>
                    </button>

                    <button
                      class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                      type="button"
                      tooltip="بارگذاری"
                    >
                      <Icon name="lucide:arrow-up" class="size-4" />
                      <span class="sr-only">بارگذاری</span>
                    </button>
                    <button
                      class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                      type="button"
                      tooltip="حذف"
                      @click.prevent="remove(file)"
                    >
                      <Icon name="lucide:x" class="size-4" />
                      <span class="sr-only">حذف</span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </BaseInputFileHeadless>
      </div>
    </div>
  </div>
</template>
