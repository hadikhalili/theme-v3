const addon = `<template>
  <div class="grid gap-6 md:max-w-3xl md:grid-cols-2">
    <BaseTextarea
      v-model="value"
      size="sm"
      label="\u067E\u06CC\u0627\u0645"
      rounded="md"
      placeholder="\u0646\u0648\u0634\u062A\u0646 \u06CC\u06A9 \u067E\u06CC\u0627\u0645..."
      :rows="6"
      addon
    >
      <template #addon>
        <div class="flex items-center gap-2">
          <BaseAvatar
            src="/img/avatars/2.svg"
            class="me-1"
            size="xs"
          />

          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            class="text-muted-800 dark:text-white"
          >
            \u0645\u0627\u06CC\u0627
          </BaseHeading>
        </div>

        <div class="flex items-center gap-2">
          <BaseButton size="sm">
            \u0627\u0631\u0633\u0627\u0644 \u0646\u0638\u0631
          </BaseButton>
        </div>
      </template>
    </BaseTextarea>

    <BaseTextarea
      v-model="value"
      label="\u067E\u06CC\u0627\u0645"
      rounded="md"
      placeholder="\u0646\u0648\u0634\u062A\u0646 \u06CC\u06A9 \u067E\u06CC\u0627\u0645..."
      :rows="6"
      addon
    >
      <template #addon>
        <div class="flex items-center gap-2">
          <BaseAvatar
            src="/img/avatars/2.svg"
            class="me-1"
            size="xs"
          />

          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            class="text-muted-800 dark:text-white"
          >
            \u0645\u0627\u06CC\u0627
          </BaseHeading>
        </div>

        <div class="flex items-center gap-2">
          <BaseButton size="sm">
            \u0627\u0631\u0633\u0627\u0644 \u0646\u0638\u0631
          </BaseButton>
        </div>
      </template>
    </BaseTextarea>
  </div>
</template>

<script setup lang="ts">
const value = ref('')
<\/script>
`;

export { addon as default };
