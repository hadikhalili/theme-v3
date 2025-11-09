const iconResult = `<template>
  <div class="max-w-sm">
    <BaseAutocomplete
      v-model="value"
      :items="hobbies"
      :display-value="(item: Hobby) => item.name"
      :filter-items="filterItems"
      icon="ph:buildings"
      rounded="md"
      placeholder="\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0633\u0631\u06AF\u0631\u0645\u06CC"
      label="\u0634\u0631\u06A9\u062A"
      clearable
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        icon: 'icon',
      }"
    />
  </div>
</template>

<script setup lang="ts">
interface Hobby {
  id: number
  name: string
  text: string
  icon: string
}

const value = ref<Hobby>()
const hobbies = ref<Hobby[]>([
  {
    id: 1,
    name: '\u0641\u06CC\u0644\u0645\u200C\u0647\u0627',
    text: '\u0633\u06CC\u0646\u0645\u0627 \u0648 \u0646\u0645\u0627\u06CC\u0634\u200C\u0647\u0627',
    icon: 'ph:sword-duotone',
  },
  {
    id: 2,
    name: '\u0633\u0641\u0631',
    text: '\u06AF\u0631\u062F\u0634\u06AF\u0631\u06CC \u0648 \u0633\u0641\u0631',
    icon: 'ph:airplane-duotone',
  },
  {
    id: 3,
    name: '\u0646\u0648\u0634\u06CC\u062F\u0646\u06CC\u200C\u0647\u0627',
    text: '\u0634\u0631\u0627\u0628\u200C\u0647\u0627 \u0648 \u0646\u0648\u0634\u06CC\u062F\u0646\u06CC\u200C\u0647\u0627\u06CC \u0639\u0627\u0644\u06CC',
    icon: 'ph:brandy-duotone',
  },
  {
    id: 4,
    name: '\u0647\u0646\u0631\u0647\u0627',
    text: '\u0646\u0642\u0627\u0634\u06CC\u200C\u0647\u0627 \u0648 \u0645\u062C\u0633\u0645\u0647\u200C\u0633\u0627\u0632\u06CC',
    icon: 'ph:paint-brush-duotone',
  },
  {
    id: 5,
    name: '\u06A9\u0627\u0631\u0627\u0626\u0648\u06A9\u0647',
    text: '\u062E\u0648\u0627\u0646\u062F\u0646 \u0628\u0627 \u062F\u0648\u0633\u062A\u0627\u0646',
    icon: 'ph:microphone-stage-duotone',
  },
])

function filterItems(query?: string, items?: any[]) {
  if (!query || !items) {
    return items ?? []
  }

  // search by name or text
  return items.filter((item) => {
    const nameMatches = item?.name?.toLowerCase().includes(query.toLowerCase())
    const textMatches = item?.text?.toLowerCase().includes(query.toLowerCase())
    return nameMatches || textMatches
  })
}
<\/script>
`;

export { iconResult as default };
