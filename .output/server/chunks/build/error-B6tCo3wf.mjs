const error = `<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.first"
        :items="frameworks"
        size="sm"
        rounded="md"
        label="Size: sm"
        placeholder="\u0645\u062B\u0627\u0644: \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A"
        error="\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.second"
        :items="frameworks"
        size="md"
        rounded="md"
        label="\u0627\u0646\u062F\u0627\u0632\u0647: md"
        placeholder="\u0645\u062B\u0627\u0644: \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A"
        error="\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.third"
        :items="frameworks"
        size="lg"
        rounded="md"
        label="Size: lg"
        placeholder="\u0645\u062B\u0627\u0644: \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A"
        error="\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
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

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
<\/script>
`;

export { error as default };
