<script setup lang="ts">
import type { Project, ProjectStepData } from '../../types'

definePageMeta({
  title: 'ویزارد — گام ۲',
  preview: {
    title: 'ویزارد — گام ۲',
    description: 'برای مراحل راه‌اندازی و فرم‌های مرحله‌ای',
    categories: ['داشبوردها', 'ویزاردها', 'فرم‌ها'],
    src: '/img/screens/wizard-2.png',
    srcDark: '/img/screens/wizard-2-dark.png',
    order: 31,
  },
})
useHead({
  title: 'اطلاعات پروژه',
})

const { data: project, errors, checkPreviousSteps } = useMultiStepForm<Project, ProjectStepData>()

onBeforeMount(checkPreviousSteps)

const avatarPreview = useNinjaFilePreview(() => project.value.avatar)

// BaseInputFileHeadless gives us a listfile input, but we need to
// extract the file from the list and set it to the form
const inputFile = ref<FileList | null>(null)
watch(inputFile, (value) => {
  const file = value?.item(0) || null
  project.value.avatar = file
})
</script>

<template>
  <div>
    <DemoWizardStepTitle />

    <div class="mx-auto flex w-full max-w-5xl flex-col px-4">
      <div class="flex items-center justify-center">
        <BaseFullscreenDropfile
          icon="ph:image-duotone"
          :filter-file-dropped="(file) => file.type.startsWith('image')"
          @drop="
            (value) => {
              inputFile = value
            }
          "
        />
        <BaseInputFileHeadless
          v-slot="{ open, remove, files }"
          v-model="inputFile"
          accept="image/*"
        >
          <div class="relative size-20">
            <img
              v-if="avatarPreview"
              :src="avatarPreview"
              alt="پیش‌نمایش بارگذاری"
              class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
            >
            <img
              v-else
              src="/img/avatars/placeholder-file.png"
              alt="پیش‌نمایش بارگذاری"
              class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
            >
            <div
              v-if="files?.length && files.item(0)"
              class="absolute bottom-0 end-0 z-20"
            >
              <BaseButtonIcon
                size="sm"
                rounded="full"
                tooltip="حذف تصویر"
                @click="remove(files.item(0)!)"
              >
                <Icon name="lucide:x" class="size-4" />
              </BaseButtonIcon>
            </div>
            <div v-else class="absolute bottom-0 end-0 z-20">
              <div class="relative" tooltip="بارگذاری تصویر">
                <BaseButtonIcon
                  size="sm"
                  rounded="full"
                  @click="open"
                >
                  <Icon name="lucide:plus" class="size-4" />
                </BaseButtonIcon>
              </div>
            </div>
          </div>
        </BaseInputFileHeadless>
        <BaseInputHelpText v-if="errors.fields.avatar" color="danger">
          {{ errors.fields.avatar }}
        </BaseInputHelpText>
      </div>

      <div class="my-4 text-center font-sans">
        <p class="text-muted-500 text-sm">
          آپلود لوگوی پروژه
        </p>
        <p class="text-muted-400 text-xs">
          اندازه فایل نمی‌تواند بیش از 2MB باشد
        </p>
      </div>
      <div class="mx-auto flex w-full max-w-sm flex-col gap-3">
        <BaseInput
          v-model="project.name"
          :error="errors.fields.name"
          rounded="lg"
          placeholder="نام پروژه"
          :classes="{
            input: 'h-12 text-base text-center',
          }"
        />
        <BaseTextarea
          v-model="project.description"
          :error="errors.fields.description"
          rounded="lg"
          placeholder="پروژه خود را توصیف کنید..."
          autogrow
          class="max-h-52"
        />
      </div>
    </div>
  </div>
</template>
