const bar = `<template>
  <div class="max-w-xs space-y-4">
    <BaseProgress
      title="\u0646\u0648\u0627\u0631 \u067E\u06CC\u0634\u0631\u0641\u062A \u067E\u06CC\u0634\u200C\u0641\u0631\u0636"
      size="sm"
      :value="progress"
      color="primary"
    />

    <div class="flex justify-between gap-2">
      <BaseButtonAction
        :class="progress === 25 && '!border-primary-500 !text-primary-500'"
        @click="progress = 25"
      >
        25%
      </BaseButtonAction>

      <BaseButtonAction
        :class="progress === 50 && '!border-primary-500 !text-primary-500'"
        @click="progress = 50"
      >
        50%
      </BaseButtonAction>

      <BaseButtonAction
        :class="progress === 75 && '!border-primary-500 !text-primary-500'"
        @click="progress = 75"
      >
        75%
      </BaseButtonAction>

      <BaseButtonAction
        :class="progress === 100 && '!border-primary-500 !text-primary-500'"
        @click="progress = 100"
      >
        100%
      </BaseButtonAction>
    </div>
  </div>
</template>

<script setup lang="ts">
const progress = ref(25)
<\/script>
`;

export { bar as default };
