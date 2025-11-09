const contrastMuted = `<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseListbox
        v-model="value"
        contrast="muted"
        label="Rounded: md"
        size="sm"
        :items="frameworks"
        placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628"
        rounded="md"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        contrast="muted"
        label="Rounded: md"
        size="md"
        :items="frameworks"
        placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628"
        rounded="md"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        contrast="muted"
        label="Rounded: md"
        size="lg"
        :items="frameworks"
        placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628"
        rounded="md"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref()

const frameworks = ['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js']
<\/script>
`;

export { contrastMuted as default };
