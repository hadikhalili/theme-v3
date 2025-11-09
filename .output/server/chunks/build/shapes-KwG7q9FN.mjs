const shapes = `<template>
  <div class="grid gap-6 md:max-w-3xl md:grid-cols-3">
    <BaseAutocomplete
      v-model="fields.first"
      :items="frameworks"
      rounded="none"
      label="Rounded: none"
      placeholder="\u0645\u062B\u0627\u0644: \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A"
    />

    <BaseAutocomplete
      v-model="fields.second"
      :items="frameworks"
      rounded="sm"
      label="Rounded: sm"
      placeholder="\u0645\u062B\u0627\u0644: \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A"
    />

    <BaseAutocomplete
      v-model="fields.third"
      :items="frameworks"
      rounded="md"
      label="Rounded: md"
      placeholder="\u0645\u062B\u0627\u0644: \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A"
    />

    <BaseAutocomplete
      v-model="fields.fourth"
      :items="frameworks"
      rounded="lg"
      label="Rounded: lg"
      placeholder="\u0645\u062B\u0627\u0644: \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A"
    />

    <BaseAutocomplete
      v-model="fields.fifth"
      :items="frameworks"
      rounded="full"
      label="Rounded: full"
      placeholder="\u0645\u062B\u0627\u0644: \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A"
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
})

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
<\/script>
`;

export { shapes as default };
