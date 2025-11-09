const multiple = `<template>
  <div class="max-w-sm">
    <BaseAutocomplete
      v-model="value"
      :items="frameworks"
      rounded="md"
      icon="lucide:list-filter"
      placeholder="\u062C\u0633\u062A\u062C\u0648..."
      label="\u0645\u0627\u0645\u0648\u0631"
      multiple
    />
  </div>
</template>

<script setup lang="ts">
const value = ref<string[]>(['Nuxt', 'Vue.js'])

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
<\/script>
`;

export { multiple as default };
