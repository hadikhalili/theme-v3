const icon = `<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.first"
        :items="frameworks"
        icon="lucide:search"
        size="sm"
        rounded="md"
        placeholder="\u0645\u062B\u0627\u0644: Nuxt"
        label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.second"
        :items="frameworks"
        icon="lucide:search"
        rounded="md"
        placeholder="\u0645\u062B\u0627\u0644: Nuxt"
        label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.third"
        :items="frameworks"
        icon="lucide:search"
        size="lg"
        rounded="md"
        placeholder="\u0645\u062B\u0627\u0644: Nuxt"
        label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
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

const frameworks = ref(['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
const people = ref([
  '\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u067E\u0631\u0632',
  '\u0622\u0631\u0648\u0646 \u0627\u0633\u067E\u0644\u0627\u062A\u0631',
  '\u0645\u0627\u06CC\u06A9 \u0645\u06CC\u0644\u0631',
  '\u0628\u0646\u062F\u06CC\u06A9\u062A \u06A9\u0633\u0644\u0631',
  '\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC',
])
<\/script>
`;

export { icon as default };
