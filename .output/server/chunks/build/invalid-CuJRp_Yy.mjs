const invalid = `<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseTextarea
      v-model="value"
      size="sm"
      label="\u067E\u06CC\u0627\u0645"
      rounded="md"
      placeholder="\u0646\u0648\u0634\u062A\u0646 \u06CC\u06A9 \u067E\u06CC\u0627\u0645..."
      error="\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u067E\u06CC\u0627\u0645 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"
    />

    <BaseTextarea
      v-model="value"
      label="\u067E\u06CC\u0627\u0645"
      rounded="md"
      placeholder="\u0646\u0648\u0634\u062A\u0646 \u06CC\u06A9 \u067E\u06CC\u0627\u0645..."
      error="\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u067E\u06CC\u0627\u0645 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
<\/script>
`;

export { invalid as default };
