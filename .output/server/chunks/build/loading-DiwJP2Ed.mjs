const loading = `<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseTextarea
      v-model="value"
      size="sm"
      label="\u067E\u06CC\u0627\u0645"
      rounded="md"
      placeholder="\u0646\u0648\u0634\u062A\u0646 \u06CC\u06A9 \u067E\u06CC\u0627\u0645..."
      loading
    />

    <BaseTextarea
      v-model="value"
      label="\u067E\u06CC\u0627\u0645"
      rounded="md"
      placeholder="\u0646\u0648\u0634\u062A\u0646 \u06CC\u06A9 \u067E\u06CC\u0627\u0645..."
      loading
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
<\/script>
`;

export { loading as default };
