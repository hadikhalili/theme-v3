const floatLabel = `<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseInput
      v-model="fields.first"
      size="sm"
      rounded="md"
      label="Size: sm"
      placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      label-float
    />

    <BaseInput
      v-model="fields.second"
      icon="lucide:search"
      size="sm"
      rounded="md"
      label="Size: sm"
      placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      label-float
    />

    <BaseInput
      v-model="fields.third"
      size="md"
      rounded="md"
      label="\u0627\u0646\u062F\u0627\u0632\u0647: md"
      placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      label-float
    />

    <BaseInput
      v-model="fields.fourth"
      icon="lucide:search"
      size="md"
      rounded="md"
      label="\u0627\u0646\u062F\u0627\u0632\u0647: md"
      placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      label-float
    />

    <BaseInput
      v-model="fields.fifth"
      size="lg"
      rounded="md"
      label="Size: lg"
      placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      label-float
    />

    <BaseInput
      v-model="fields.sixth"
      icon="lucide:search"
      size="lg"
      rounded="md"
      label="Size: lg"
      placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      label-float
    />
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
  sixth: '',
})
<\/script>
`;

export { floatLabel as default };
