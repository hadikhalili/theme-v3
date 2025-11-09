const validation = `<template>
  <form
    class="max-w-md"
    autocomplete="off"
    @submit.prevent="onSubmit"
  >
    <AddonInputPassword
      ref="inputRef"
      v-model="password"
      placeholder="\u0628\u0631\u0627\u06CC \u062A\u0633\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u062A\u0627\u06CC\u067E \u06A9\u0646\u06CC\u062F"
      :error="error"
      @validation="onValidate"
    />
  </form>
</template>

<script lang="ts" setup>
import type { ZxcvbnResult } from '@zxcvbn-ts/core'
import { AddonInputPassword } from '#components'

const password = ref('qwerty')
const error = ref('')

const inputRef = ref<InstanceType<typeof AddonInputPassword>>()

function onSubmit() {
  const score = inputRef.value?.validation?.score ?? 0
  if (score < 5) {
    alert(\`Please enter a stronger password, current score: \${score}/5\`)
    return
  }

  alert(\`Selected: \${inputRef.value?.validation?.password} with score \${score}\`)
}

function onValidate(state: { validation: ZxcvbnResult | null, touched: boolean }) {
  error.value = state.validation?.feedback.warning ?? ''
  if (state.validation && state.validation.score < 5) {
    error.value = 'Please enter a stronger password'
  }
}
<\/script>
`;

export { validation as default };
