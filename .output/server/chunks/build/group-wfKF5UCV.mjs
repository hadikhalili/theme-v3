const group = `<template>
  <BaseButtonGroup>
    <BaseButton color="muted">
      <span>USD</span>
    </BaseButton>

    <BaseInput
      v-model.number="amount"
      :classes="{
        wrapper: 'w-28',
      }"
      type="number"
      placeholder="0.00"
    />

    <BaseSelect
      v-model="taxes"
      :classes="{
        wrapper: 'w-36',
      }"
    >
      <option value="\u0628\u0627 \u0645\u0627\u0644\u06CC\u0627\u062A">
        \u0628\u0627 \u0645\u0627\u0644\u06CC\u0627\u062A
      </option>

      <option value="\u0628\u062F\u0648\u0646 \u0645\u0627\u0644\u06CC\u0627\u062A">
        \u0628\u062F\u0648\u0646 \u0645\u0627\u0644\u06CC\u0627\u062A
      </option>
    </BaseSelect>
  </BaseButtonGroup>
</template>

<script setup lang="ts">
const amount = ref<number | undefined>(undefined)
const taxes = ref('\u0628\u0627 \u0645\u0627\u0644\u06CC\u0627\u062A')
<\/script>
`;

export { group as default };
