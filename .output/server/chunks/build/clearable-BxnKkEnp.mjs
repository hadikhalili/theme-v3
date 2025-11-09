const clearable = `<template>
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
        clearable
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.second"
        :items="frameworks"
        icon="lucide:search"
        size="md"
        rounded="md"
        placeholder="\u0645\u062B\u0627\u0644: Nuxt"
        label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
        clearable
        :clear-value="''"
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
        clearable
        :clear-value="'Javascript'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: undefined,
  second: '',
  third: 'Javascript',
})

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
<\/script>
`;

export { clearable as default };
