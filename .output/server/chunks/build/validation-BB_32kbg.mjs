const validation = `<template>
  <form class="max-w-md" @submit.prevent="onSubmit">
    <AddonInputPhone
      ref="inputRef"
      v-model="phone"
      placeholder="\u0628\u0631\u0627\u06CC \u062A\u0633\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u062A\u0627\u06CC\u067E \u06A9\u0646\u06CC\u062F"
      :error="error"
      @validation="onValidate"
    />
  </form>
</template>

<script lang="ts" setup>
import { AddonInputPhone } from '#components'

const phone = ref('012345')
const error = ref('')

const inputRef = ref<InstanceType<typeof AddonInputPhone>>()

function onSubmit() {
  if (!inputRef.value?.validation?.valid) {
    error.value = '\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0645\u0639\u062A\u0628\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F'
    return
  }

  alert(\`Selected: \${inputRef.value?.currentCountry?.label}\`)
}

function onValidate(state: { valid: boolean, touched: boolean, error: string }) {
  if (!state.error) {
    error.value = ''
    return
  }
  switch (state.error) {
    case 'INVALID_COUNTRY':
      error.value = '\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u06A9\u0634\u0648\u0631 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F'
      break
    case 'NO_POSSIBLE_COUNTRIES':
      error.value = '\u06A9\u0634\u0648\u0631\u0647\u0627\u06CC \u0645\u0645\u06A9\u0646 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0645\u0648\u062C\u0648\u062F \u0646\u06CC\u0633\u062A\u0646\u062F'
      break
    case 'PHONE_NUMBER_NOT_POSSIBLE':
      error.value = '\u0627\u06CC\u0646 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0628\u0631\u0627\u06CC \u06A9\u0634\u0648\u0631 \u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647 \u0645\u0639\u062A\u0628\u0631 \u0646\u06CC\u0633\u062A'
      break
    case 'NOT_A_NUMBER':
    case 'TOO_SHORT':
    case 'TOO_LONG':
    default:
      error.value = '\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0645\u0639\u062A\u0628\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F'
      break
  }
}
<\/script>
`;

export { validation as default };
