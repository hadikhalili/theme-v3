const base = `<template>
  <div class="flex flex-col gap-6 md:flex-row md:items-start">
    <BaseFocusLoop class="flex w-3/5 flex-wrap items-end gap-4">
      <BaseCheckboxAnimated
        v-model="options"
        value="\u06AF\u0632\u06CC\u0646\u0647 \u06F1"
        color="primary"
      />

      <BaseCheckboxAnimated
        v-model="options"
        value="\u06AF\u0632\u06CC\u0646\u0647 \u06F2"
        color="info"
      />

      <BaseCheckboxAnimated
        v-model="options"
        value="\u06AF\u0632\u06CC\u0646\u0647 \u06F3"
        color="success"
      />

      <BaseCheckboxAnimated
        v-model="options"
        value="\u06AF\u0632\u06CC\u0646\u0647 \u06F4"
        color="warning"
      />

      <BaseCheckboxAnimated
        v-model="options"
        value="\u06AF\u0632\u06CC\u0646\u0647 \u06F5"
        color="danger"
      />
    </BaseFocusLoop>
  </div>
</template>

<script setup lang="ts">
const options = ref([
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F1',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F2',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F3',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F4',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F5',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F6',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F7',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F8',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F9',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F0',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F1',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F2',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F3',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F4',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F5',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F6',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F7',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F8',
  '\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F9',
])
<\/script>
`;

export { base as default };
