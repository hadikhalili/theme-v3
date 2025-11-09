const allowCreate = `<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.first"
        :items="frameworks"
        icon="lucide:search"
        size="sm"
        rounded="md"
        placeholder="\u0645\u062B\u0627\u0644: SvelteKit"
        label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
        allow-create
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.second"
        :items="frameworks"
        icon="lucide:search"
        size="md"
        rounded="md"
        placeholder="\u0645\u062B\u0627\u0644: SvelteKit"
        label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
        allow-create
      />
    </div>

    <div class="flex-1">
      <BaseAutocomplete
        v-model="fields.third"
        :items="frameworks"
        icon="lucide:search"
        size="lg"
        rounded="md"
        placeholder="\u0645\u062B\u0627\u0644: SvelteKit"
        label="\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9"
        allow-create
      >
        <template
          #create-item="{
            query,
            active,
            selected,
          }"
        >
          <BaseAutocompleteItem
            rounded="md"
            :item="{
              icon: 'ph:plus-circle',
              label: \`Add '\${query}'\`,
              sublabel: 'Create new item',
              value: query,
            }"
            :active="active"
            :selected="selected"
          />
        </template>
      </BaseAutocomplete>
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: undefined,
  second: undefined,
  third: undefined,
})

const frameworks = ref(['Javascript', 'Nuxt', 'Vue.js', 'React.js', 'Angular', 'Alpine.js'])
<\/script>
`;

export { allowCreate as default };
