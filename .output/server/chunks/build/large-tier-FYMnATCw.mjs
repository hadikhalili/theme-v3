const largeTier = `<template>
  <!-- Element to trigger the modal -->
  <div class="flex gap-x-2">
    <div class="flex items-end gap-4">
      <BaseButton class="gap-2" @click="isModal2XlOpen = true">
        <Icon name="lucide:app-window" class="w-4" />
        2XL dialog
      </BaseButton>
    </div>

    <div class="flex items-end gap-4">
      <BaseButton class="gap-2" @click="isModal3XlOpen = true">
        <Icon name="lucide:app-window" class="w-4" />
        \u062F\u06CC\u0627\u0644\u0648\u06AF \u06F3XL
      </BaseButton>
    </div>
  </div>

  <!-- Modal component -->
  <TairoModal
    :open="isModal2XlOpen"
    size="2xl"
    @close="isModal2XlOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
          2\u062F\u06CC\u0627\u0644\u0648\u06AF XL
        </h3>

        <BaseButtonClose @click="isModal2XlOpen = false" />
      </div>
    </template>

    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full max-w-xs text-center">
        <div class="relative mx-auto mb-4 flex size-24">
          <img
            src="https://media.cssninja.io/shuriken/avatars/13.svg"
            class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
            alt=""
          >
        </div>

        <h3 class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white">
          \u062F\u0639\u0648\u062A \u062C\u062F\u06CC\u062F
        </h3>

        <p class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5">
          \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u0650\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A\u060C \u0633\u062F \u062F\u0648 \u0627\u06CC\u0648\u0633\u0645\u0648\u062F.
        </p>
      </div>
    </div>

    <template #footer>
      <!-- Footer -->
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton @click="isModal2XlOpen = false">
            \u0631\u062F \u06A9\u0631\u062F\u0646
          </BaseButton>

          <BaseButton
            color="primary"
            variant="solid"
            @click="isModal2XlOpen = false"
          >
            \u0642\u0628\u0648\u0644
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>

  <!-- Modal component -->
  <TairoModal
    :open="isModal3XlOpen"
    size="3xl"
    @close="isModal3XlOpen = false"
  >
    <template #header>
      <!-- Header -->
      <div class="flex w-full items-center justify-between p-4 md:p-6">
        <h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white">
          \u062F\u06CC\u0627\u0644\u0648\u06AF \u06F3XL
        </h3>

        <BaseButtonClose @click="isModal3XlOpen = false" />
      </div>
    </template>
    <!-- Body -->
    <div class="p-4 md:p-6">
      <div class="mx-auto w-full max-w-xs text-center">
        <div class="relative mx-auto mb-4 flex size-24">
          <img
            src="https://media.cssninja.io/shuriken/avatars/17.svg"
            class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
            alt=""
          >
        </div>

        <h3 class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white">
          \u062F\u0639\u0648\u062A \u062C\u062F\u06CC\u062F
        </h3>

        <p class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5">
          \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u0650\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A\u060C \u0633\u062F \u062F\u0648 \u0627\u06CC\u0648\u0633\u0645\u0648\u062F.
        </p>
      </div>
    </div>

    <template #footer>
      <!-- Footer -->
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton @click="isModal3XlOpen = false">
            \u0631\u062F \u06A9\u0631\u062F\u0646
          </BaseButton>

          <BaseButton
            color="primary"
            variant="solid"
            @click="isModal3XlOpen = false"
          >
            \u0642\u0628\u0648\u0644
          </BaseButton>
        </div>
      </div>
    </template>
  </TairoModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isModal2XlOpen = ref(false)
const isModal3XlOpen = ref(false)
<\/script>
`;

export { largeTier as default };
