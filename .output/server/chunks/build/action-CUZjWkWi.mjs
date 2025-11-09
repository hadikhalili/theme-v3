const action = `<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseInput
        v-model="fields.first"
        size="sm"
        rounded="md"
        label="Size: sm"
        placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      >
        <template #action>
          <button
            type="button"
            data-nui-tooltip="\u0630\u062E\u06CC\u0631\u0647"
            class="text-muted-400 hover:text-primary-500 absolute end-0 top-0 z-[1] flex size-8 items-center justify-center transition-colors duration-300"
          >
            <Icon name="lucide:save" class="size-4" />
          </button>
        </template>
      </BaseInput>
    </div>

    <div class="flex-1">
      <BaseInput
        v-model="fields.second"
        size="md"
        rounded="md"
        label="\u0627\u0646\u062F\u0627\u0632\u0647: md"
        placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      >
        <template #action>
          <button
            type="button"
            data-nui-tooltip="\u0630\u062E\u06CC\u0631\u0647"
            class="text-muted-400 hover:text-primary-500 absolute end-0 top-0 z-[1] flex size-10 items-center justify-center transition-colors duration-300"
          >
            <Icon name="lucide:save" class="size-4" />
          </button>
        </template>
      </BaseInput>
    </div>

    <div class="flex-1">
      <BaseInput
        v-model="fields.third"
        size="lg"
        rounded="md"
        label="Size: lg"
        placeholder="\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      >
        <template #action>
          <button
            type="button"
            data-nui-tooltip="\u0630\u062E\u06CC\u0631\u0647"
            class="text-muted-400 hover:text-primary-500 absolute end-0 top-0 z-[1] flex size-12 items-center justify-center transition-colors duration-300"
          >
            <Icon name="lucide:save" class="size-5" />
          </button>
        </template>
      </BaseInput>
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
})
<\/script>
`;

export { action as default };
