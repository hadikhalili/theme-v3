const invalidIcon = `<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseInput
        v-model="fields.first"
        icon="lucide:search"
        size="sm"
        rounded="md"
        label="Size: sm"
        placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
        error="\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0645\u0639\u062A\u0628\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"
      />
    </div>

    <div class="flex-1">
      <BaseInput
        v-model="fields.second"
        icon="lucide:search"
        size="md"
        rounded="md"
        label="\u0627\u0646\u062F\u0627\u0632\u0647: md"
        placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
        error="\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0645\u0639\u062A\u0628\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"
      />
    </div>

    <div class="flex-1">
      <BaseInput
        v-model="fields.third"
        icon="lucide:search"
        size="lg"
        rounded="md"
        label="Size: lg"
        placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
        error="\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0645\u0639\u062A\u0628\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"
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

export { invalidIcon as default };
