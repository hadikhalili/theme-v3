const contrastMutedContrast = `<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseSelect
        v-model="first"
        contrast="muted-contrast"
        size="sm"
        rounded="md"
        label="Rounded: md"
      >
        <option value="">
          \u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0642\u0647\u0631\u0645\u0627\u0646
        </option>

        <option value="\u0633\u0648\u067E\u0631\u0645\u0646">
          \u0633\u0648\u067E\u0631\u0645\u0646
        </option>

        <option value="\u0628\u062A\u0645\u0646">
          \u0628\u062A\u0645\u0646
        </option>

        <option value="\u0645\u0631\u062F \u0622\u0647\u0646\u06CC">
          \u0645\u0631\u062F \u0622\u0647\u0646\u06CC
        </option>

        <option value="\u0645\u06AF\u0646\u06CC\u062A\u0648">
          \u0645\u06AF\u0646\u06CC\u062A\u0648
        </option>

        <option value="\u0633\u0627\u06CC\u06A9\u0644\u0648\u067E\u0633">
          \u0633\u0627\u06CC\u06A9\u0644\u0648\u067E\u0633
        </option>
      </BaseSelect>
    </div>

    <div class="flex-1">
      <BaseSelect
        v-model="second"
        contrast="muted-contrast"
        size="md"
        rounded="md"
        label="Rounded: md"
      >
        <option value="">
          \u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0642\u0647\u0631\u0645\u0627\u0646
        </option>

        <option value="\u0633\u0648\u067E\u0631\u0645\u0646">
          \u0633\u0648\u067E\u0631\u0645\u0646
        </option>

        <option value="\u0628\u062A\u0645\u0646">
          \u0628\u062A\u0645\u0646
        </option>

        <option value="\u0645\u0631\u062F \u0622\u0647\u0646\u06CC">
          \u0645\u0631\u062F \u0622\u0647\u0646\u06CC
        </option>

        <option value="\u0645\u06AF\u0646\u06CC\u062A\u0648">
          \u0645\u06AF\u0646\u06CC\u062A\u0648
        </option>

        <option value="\u0633\u0627\u06CC\u06A9\u0644\u0648\u067E\u0633">
          \u0633\u0627\u06CC\u06A9\u0644\u0648\u067E\u0633
        </option>
      </BaseSelect>
    </div>

    <div class="flex-1">
      <BaseSelect
        v-model="third"
        contrast="muted-contrast"
        size="lg"
        rounded="md"
        label="Rounded: md"
      >
        <option value="">
          \u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0642\u0647\u0631\u0645\u0627\u0646
        </option>

        <option value="\u0633\u0648\u067E\u0631\u0645\u0646">
          \u0633\u0648\u067E\u0631\u0645\u0646
        </option>

        <option value="\u0628\u062A\u0645\u0646">
          \u0628\u062A\u0645\u0646
        </option>

        <option value="\u0645\u0631\u062F \u0622\u0647\u0646\u06CC">
          \u0645\u0631\u062F \u0622\u0647\u0646\u06CC
        </option>

        <option value="\u0645\u06AF\u0646\u06CC\u062A\u0648">
          \u0645\u06AF\u0646\u06CC\u062A\u0648
        </option>

        <option value="\u0633\u0627\u06CC\u06A9\u0644\u0648\u067E\u0633">
          \u0633\u0627\u06CC\u06A9\u0644\u0648\u067E\u0633
        </option>
      </BaseSelect>
    </div>
  </div>
</template>

<script setup lang="ts">
const first = ref('')
const second = ref('')
const third = ref('')
<\/script>
`;

export { contrastMutedContrast as default };
