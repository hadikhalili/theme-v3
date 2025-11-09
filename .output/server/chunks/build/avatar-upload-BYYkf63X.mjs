const avatarUpload = `<template>
  <div>
    <form
      action=""
      method="POST"
      @submit.prevent=""
    >
      <BaseInputFileHeadless
        v-slot="{ open, remove, preview, files }"
        v-model="inputFile"
        accept="image/*"
      >
        <div class="relative size-20">
          <img
            v-if="files?.length && files.item(0)"
            :src="preview(files.item(0)!).value"
            alt="\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC"
            class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
          >

          <img
            v-else
            :src="currentAvatar"
            alt="\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC"
            class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
          >

          <div v-if="files?.length && files.item(0)" class="absolute bottom-0 end-0 z-20">
            <BaseButtonIcon
              size="sm"
              rounded="full"
              data-nui-tooltip="\u062D\u0630\u0641 \u062A\u0635\u0648\u06CC\u0631"
              class="scale-90"
              @click="remove(files.item(0)!)"
            >
              <Icon name="lucide:x" class="size-4" />
            </BaseButtonIcon>
          </div>

          <div v-else class="absolute bottom-0 end-0 z-20">
            <div class="relative" data-nui-tooltip="\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u062A\u0635\u0648\u06CC\u0631">
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
    </form>
  </div>
</template>

<script setup lang="ts">
// This is the computed value that will be used to display the current avatar
const currentAvatar = computed(() => '/img/avatars/10.svg')
const inputFile = ref<FileList | null>(null)
<\/script>
`;

export { avatarUpload as default };
