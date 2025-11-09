const contrastMuted = `<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.first"
        :items="frameworks"
        contrast="muted"
        size="sm"
        rounded="md"
        label="Size: sm"
        placeholder="\u0645\u062B\u0627\u0644: \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A"
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.second"
        :items="frameworks"
        contrast="muted"
        size="md"
        rounded="md"
        label="\u0627\u0646\u062F\u0627\u0632\u0647: md"
        placeholder="\u0645\u062B\u0627\u0644: \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A"
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.third"
        :items="frameworks"
        contrast="muted"
        size="lg"
        rounded="md"
        label="Size: lg"
        placeholder="\u0645\u062B\u0627\u0644: \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A"
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

export { contrastMuted as default };
