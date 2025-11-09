const multipleValue = `<template>
  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseCheckbox
      v-model="value"
      name="multiple-demo-1"
      label="\u06AF\u0632\u06CC\u0646\u0647 \u06F1"
      value="\u06AF\u0632\u06CC\u0646\u0647 \u06F1"
      rounded="lg"
      color="muted"
    />

    <BaseCheckbox
      v-model="value"
      name="multiple-demo-2"
      label="\u06AF\u0632\u06CC\u0646\u0647 \u06F2"
      value="\u06AF\u0632\u06CC\u0646\u0647 \u06F2"
      rounded="lg"
      color="muted"
    />

    <BaseCheckbox
      v-model="value"
      name="multiple-demo-3"
      label="\u06AF\u0632\u06CC\u0646\u0647 \u06F3"
      value="\u06AF\u0632\u06CC\u0646\u0647 \u06F3"
      rounded="lg"
      color="muted"
    />

    <BaseCheckbox
      v-model="value"
      name="multiple-demo-4"
      label="\u06AF\u0632\u06CC\u0646\u0647 \u06F4"
      value="\u06AF\u0632\u06CC\u0646\u0647 \u06F4"
      rounded="lg"
      color="muted"
    />

    <BaseCheckbox
      v-model="value"
      name="multiple-demo-5"
      label="\u06AF\u0632\u06CC\u0646\u0647 \u06F5"
      value="\u06AF\u0632\u06CC\u0646\u0647 \u06F5"
      rounded="lg"
      color="muted"
    />
  </BaseFocusLoop>
</template>

<script setup lang="ts">
const value = ref(['\u06AF\u0632\u06CC\u0646\u0647 \u06F1', '\u06AF\u0632\u06CC\u0646\u0647 \u06F2'])
<\/script>
`;

export { multipleValue as default };
