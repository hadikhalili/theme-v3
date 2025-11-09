const floatLabel = `<template>
  <div class="grid gap-6 md:max-w-xl md:grid-cols-2">
    <BaseListbox
      v-model="value"
      label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
      size="sm"
      :items="frameworks"
      placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628"
      rounded="md"
      label-float
    />

    <BaseListbox
      v-model="objectValue"
      size="sm"
      rounded="md"
      label="\u0645\u0631\u062F\u0645"
      :items="people"
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        media: 'media',
      }"
      label-float
    />

    <BaseListbox
      v-model="value"
      label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
      size="md"
      :items="frameworks"
      placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628"
      rounded="md"
      label-float
    />

    <BaseListbox
      v-model="objectValue"
      size="md"
      rounded="md"
      label="\u0645\u0631\u062F\u0645"
      :items="people"
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        media: 'media',
      }"
      label-float
    />

    <BaseListbox
      v-model="value"
      label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
      size="lg"
      :items="frameworks"
      placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628"
      rounded="md"
      label-float
    />

    <BaseListbox
      v-model="objectValue"
      size="lg"
      rounded="md"
      label="\u0645\u0631\u062F\u0645"
      :items="people"
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        media: 'media',
      }"
      label-float
    />
  </div>
</template>

<script setup lang="ts">
import { fr } from 'date-fns/locale'

const value = ref()

const frameworks = ['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js']

const objectValue = ref({
  id: 2,
  name: '\u0622\u0631\u0648\u0646 \u0627\u0633\u067E\u0644\u0627\u062A\u0631',
  text: '\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647',
  media: '/img/avatars/16.svg',
})

const people = [
  {
    id: 1,
    name: '\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u067E\u0631\u0632',
    text: '\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634',
    media: '/img/avatars/19.svg',
  },
  {
    id: 2,
    name: '\u0622\u0631\u0648\u0646 \u0627\u0633\u067E\u0644\u0627\u062A\u0631',
    text: '\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647',
    media: '/img/avatars/16.svg',
  },
  {
    id: 3,
    name: '\u0645\u0627\u06CC\u06A9 \u0645\u06CC\u0644\u0631',
    text: '\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC',
    media: '/img/avatars/3.svg',
  },
  {
    id: 4,
    name: '\u0628\u0646\u062F\u06CC\u06A9\u062A \u06A9\u0633\u0644\u0631',
    text: '\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644',
    media: '/img/avatars/22.svg',
  },
  {
    id: 5,
    name: '\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC',
    text: '\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644',
    media: '/img/avatars/2.svg',
  },
]
<\/script>
`;

export { floatLabel as default };
