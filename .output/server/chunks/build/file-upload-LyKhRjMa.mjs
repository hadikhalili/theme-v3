const fileUpload = `<template>
  <div class="max-w-xl">
    <BaseInputFileHeadless
      v-slot="{ open, remove, preview, drop, files }"
      v-model="uploadedFiles"
      multiple
    >
      <!-- Controls -->
      <div class="mb-4 flex items-center gap-2">
        <button
          type="button"
          class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
          tooltip="\u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627"
          @click="open"
        >
          <Icon name="lucide:plus" class="size-4" />

          <span class="sr-only">\u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627</span>
        </button>

        <button
          type="button"
          class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
          tooltip="\u0634\u0631\u0648\u0639 \u0622\u067E\u0644\u0648\u062F"
        >
          <Icon name="lucide:arrow-up" class="size-4" />

          <span class="sr-only">\u0634\u0631\u0648\u0639 \u0622\u067E\u0644\u0648\u062F</span>
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
          class="nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300"
          tabindex="0"
          role="button"
          @click="open"
          @keydown.enter.prevent="open"
        >
          <div class="p-5 text-center">
            <Icon
              name="mdi-light:cloud-upload"
              class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 size-10 transition-colors duration-300"
            />

            <h4 class="text-muted-400 font-sans text-sm">
              \u0641\u0627\u06CC\u0644\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0627\u06CC \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0631\u0647\u0627 \u06A9\u0646\u06CC\u062F
            </h4>

            <div>
              <span class="text-muted-400 font-sans text-[0.7rem] font-semibold uppercase">
                \u06CC\u0627
              </span>
            </div>

            <label
              for="file"
              class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"
            >
              \u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627
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
                  <span class="text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm">
                    {{ file.name }}
                  </span>

                  <span class="text-muted-400 block text-xs">
                    {{ formatFileSize(file.size) }}
                  </span>
                </div>
              </div>

              <div class="ms-auto w-32 px-4 transition-opacity duration-300" :class="'opacity-100'">
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
                  tooltip="\u0644\u063A\u0648"
                >
                  <Icon name="lucide:slash" class="size-4" />

                  <span class="sr-only">\u0644\u063A\u0648</span>
                </button>

                <button
                  class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                  type="button"
                  tooltip="\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC"
                >
                  <Icon name="lucide:arrow-up" class="size-4" />

                  <span class="sr-only">Upload</span>
                </button>

                <button
                  class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                  type="button"
                  tooltip="\u062D\u0630\u0641"
                  @click.prevent="remove(file)"
                >
                  <Icon name="lucide:x" class="size-4" />

                  <span class="sr-only">\u062D\u0630\u0641</span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </BaseInputFileHeadless>
  </div>
</template>

<script setup lang="ts">
const uploadedFiles = ref<FileList | null>(null)
<\/script>
`;

export { fileUpload as default };
