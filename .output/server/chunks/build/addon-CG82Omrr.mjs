const addon = `<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseInput
        v-model="fields.first"
        addon="https://"
        size="sm"
        rounded="md"
        label="Size: sm"
        placeholder="\u0645\u062B\u0627\u0644: google.com"
      />
    </div>

    <div class="flex-1">
      <BaseInput
        v-model="fields.second"
        addon="https://"
        size="md"
        rounded="md"
        label="\u0627\u0646\u062F\u0627\u0632\u0647: md"
        placeholder="\u0645\u062B\u0627\u0644: google.com"
      />
    </div>

    <div class="flex-1">
      <BaseInput
        v-model="fields.third"
        addon="https://"
        size="lg"
        rounded="md"
        label="Size: lg"
        placeholder="\u0645\u062B\u0627\u0644: google.com"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
})
<\/script>
`;

export { addon as default };
