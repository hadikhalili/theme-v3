const error = `<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseListbox
        v-model="value"
        label="Rounded: md"
        size="sm"
        :items="frameworks"
        placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628"
        rounded="md"
        error="\u0627\u06CC\u0646 \u0641\u06CC\u0644\u062F \u0636\u0631\u0648\u0631\u06CC \u0627\u0633\u062A"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        label="Rounded: md"
        size="md"
        :items="frameworks"
        placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628"
        rounded="md"
        error="\u0627\u06CC\u0646 \u0641\u06CC\u0644\u062F \u0636\u0631\u0648\u0631\u06CC \u0627\u0633\u062A"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        label="Rounded: md"
        size="lg"
        :items="frameworks"
        placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628"
        rounded="md"
        error="\u0627\u06CC\u0646 \u0641\u06CC\u0644\u062F \u0636\u0631\u0648\u0631\u06CC \u0627\u0633\u062A"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref()

const frameworks = ['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js']
<\/script>
`;

export { error as default };
