const disabled = `<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseListbox
        v-model="value"
        label="\u0627\u0646\u062A\u062E\u0627\u0628 \u0639\u0636\u0648"
        size="sm"
        :items="peopleNames"
        placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u0639\u0636\u0648"
        rounded="md"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
        }"
        disabled
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        label="\u0627\u0646\u062A\u062E\u0627\u0628 \u0639\u0636\u0648"
        size="md"
        :items="peopleNames"
        placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u0639\u0636\u0648"
        rounded="md"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
        }"
        disabled
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        label="\u0627\u0646\u062A\u062E\u0627\u0628 \u0639\u0636\u0648"
        size="lg"
        :items="peopleNames"
        placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u0639\u0636\u0648"
        rounded="md"
        :properties="{
          value: 'id',
          label: 'name',
          sublabel: 'text',
        }"
        disabled
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref({
  id: 3,
  name: '\u0645\u0627\u06CC\u06A9 \u0645\u06CC\u0644\u0631',
  text: '\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC',
})

const peopleNames = [
  {
    id: 1,
    name: '\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u067E\u0631\u0632',
    text: '\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634',
  },
  {
    id: 2,
    name: '\u0622\u0631\u0648\u0646 \u0627\u0633\u067E\u0644\u0627\u062A\u0631',
    text: '\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647',
  },
  {
    id: 3,
    name: '\u0645\u0627\u06CC\u06A9 \u0645\u06CC\u0644\u0631',
    text: '\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC',
  },
  {
    id: 4,
    name: '\u0628\u0646\u062F\u06CC\u06A9\u062A \u06A9\u0633\u0644\u0631',
    text: '\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644',
  },
  {
    id: 5,
    name: '\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC',
    text: '\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644',
  },
]
<\/script>
`;

export { disabled as default };
