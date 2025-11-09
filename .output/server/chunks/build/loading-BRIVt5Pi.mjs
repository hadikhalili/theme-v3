const loading = `<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseAutocomplete
      v-model="fields.first"
      :items="frameworks"
      size="sm"
      rounded="md"
      placeholder="\u0645\u062B\u0627\u0644: Nuxt"
      label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
      loading
    />

    <BaseAutocomplete
      v-model="fields.second"
      :items="frameworks"
      size="sm"
      icon="lucide:search"
      rounded="md"
      placeholder="\u0645\u062B\u0627\u0644: Nuxt"
      label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
      loading
    />

    <BaseAutocomplete
      v-model="fields.third"
      :items="frameworks"
      rounded="md"
      placeholder="\u0645\u062B\u0627\u0644: Nuxt"
      label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
      loading
    />

    <BaseAutocomplete
      v-model="fields.fourth"
      :items="frameworks"
      icon="lucide:search"
      rounded="md"
      placeholder="\u0645\u062B\u0627\u0644: Nuxt"
      label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
      loading
    />

    <BaseAutocomplete
      v-model="fields.fifth"
      :items="frameworks"
      size="lg"
      rounded="md"
      placeholder="\u0645\u062B\u0627\u0644: Nuxt"
      label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
      loading
    />

    <BaseAutocomplete
      v-model="fields.sixth"
      :items="frameworks"
      icon="lucide:search"
      size="lg"
      rounded="md"
      placeholder="\u0645\u062B\u0627\u0644: Nuxt"
      label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
      loading
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

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
<\/script>
`;

export { loading as default };
