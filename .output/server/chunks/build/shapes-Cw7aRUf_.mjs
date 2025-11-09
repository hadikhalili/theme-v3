const shapes = `<template>
  <BaseFocusLoop class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseSelect
      v-model="options.first"
      rounded="none"
      label="Rounded: none"
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

    <BaseSelect
      v-model="options.second"
      rounded="sm"
      label="Rounded: sm"
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

    <BaseSelect
      v-model="options.third"
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

    <BaseSelect
      v-model="options.fourth"
      rounded="lg"
      label="Rounded: lg"
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

    <BaseSelect
      v-model="options.fifth"
      rounded="full"
      label="Rounded: full"
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
  </BaseFocusLoop>
</template>

<script setup lang="ts">
const options = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
})
<\/script>
`;

export { shapes as default };
