const shapes = `<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseTextarea
      v-model="fields.first"
      label="Rounded: none"
      rounded="none"
      placeholder="\u0646\u0648\u0634\u062A\u0646 \u06CC\u06A9 \u067E\u06CC\u0627\u0645..."
      rows="1"
      :classes="{
        textarea: 'resize-none overflow-hidden',
      }"
      autogrow
    />

    <BaseTextarea
      v-model="fields.second"
      label="Rounded: sm"
      rounded="sm"
      placeholder="\u0646\u0648\u0634\u062A\u0646 \u06CC\u06A9 \u067E\u06CC\u0627\u0645..."
      rows="1"
      :classes="{
        textarea: 'resize-none overflow-hidden',
      }"
      autogrow
    />

    <BaseTextarea
      v-model="fields.third"
      label="Rounded: md"
      rounded="md"
      placeholder="\u0646\u0648\u0634\u062A\u0646 \u06CC\u06A9 \u067E\u06CC\u0627\u0645..."
      rows="1"
      :classes="{
        textarea: 'resize-none overflow-hidden',
      }"
      autogrow
    />

    <BaseTextarea
      v-model="fields.fourth"
      label="Rounded: lg"
      rounded="lg"
      placeholder="\u0646\u0648\u0634\u062A\u0646 \u06CC\u06A9 \u067E\u06CC\u0627\u0645..."
      rows="1"
      :classes="{
        textarea: 'resize-none overflow-hidden',
      }"
      autogrow
    />
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
})
<\/script>
`;

export { shapes as default };
