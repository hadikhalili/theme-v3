const mediaResult = `<template>
  <div class="max-w-sm">
    <BaseAutocomplete
      v-model="value"
      :items="people"
      :display-value="(item: Person) => item.name"
      :filter-items="filterItems"
      icon="ph:users-three"
      rounded="md"
      placeholder="\u062C\u0633\u062A\u062C\u0648..."
      label="\u0645\u0627\u0645\u0648\u0631"
      clearable
      :properties="{
        value: 'id',
        label: 'name',
        sublabel: 'text',
        media: 'media',
      }"
    />
  </div>
</template>

<script setup lang="ts">
interface Person {
  id: number
  name: string
  text: string
  media: string
}

const people = ref<Person[]>([
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
])
const value = ref<Person>()

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

export { mediaResult as default };
