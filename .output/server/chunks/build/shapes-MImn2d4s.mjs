const shapes = `<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseListbox
      v-model="value"
      label="Rounded: none"
      :items="frameworks"
      placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628"
      rounded="none"
    />

    <BaseListbox
      v-model="value"
      label="Rounded: sm"
      :items="frameworks"
      placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628"
      rounded="sm"
    />

    <BaseListbox
      v-model="value"
      label="Rounded: md"
      :items="frameworks"
      placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628"
      rounded="md"
    />

    <BaseListbox
      v-model="value"
      label="Rounded: lg"
      :items="frameworks"
      placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628"
      rounded="lg"
    />

    <BaseListbox
      v-model="value"
      label="Rounded: full"
      :items="frameworks"
      placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628"
      rounded="full"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref()

const frameworks = ['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js']
<\/script>
`;

export { shapes as default };
