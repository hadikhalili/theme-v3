const shapes = `<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseInput
      v-model="fields.first"
      rounded="none"
      label="Rounded: none"
      placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
    />

    <BaseInput
      v-model="fields.second"
      rounded="sm"
      label="Rounded: sm"
      placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
    />

    <BaseInput
      v-model="fields.third"
      rounded="md"
      label="Rounded: md"
      placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
    />

    <BaseInput
      v-model="fields.fourth"
      rounded="lg"
      label="Rounded: lg"
      placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
    />

    <BaseInput
      v-model="fields.fourth"
      rounded="full"
      label="Rounded: full"
      placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
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
