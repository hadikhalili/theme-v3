const userInput = `<template>
  <div class="grid grid-cols-2 gap-4 md:max-w-lg">
    <BaseInput
      v-model="username"
      label="Username"
      icon="lucide:user"
    />

    <BaseInput
      v-model="email"
      label="\u0627\u06CC\u0645\u06CC\u0644"
      icon="lucide:mail"
    />

    <div class="col-span-2">
      <AddonInputPassword
        ref="passwordRef"
        v-model="password"
        :error="hasError"
        icon="lucide:lock"
        label="Password"
        :user-inputs="userInputs"
        show
        touched
      />
    </div>

    <div class="mt-2">
      <BaseSwitchThin
        v-model="useUserInputs"
        label="\u0628\u0631\u0631\u0633\u06CC \u0648\u0631\u0648\u062F\u06CC\u200C\u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AddonInputPassword } from '#components'

const passwordRef = ref<InstanceType<typeof AddonInputPassword>>()
const hasError = computed(() => !!passwordRef.value?.validation?.feedback?.warning || !!passwordRef.value?.validation?.feedback?.suggestions?.length)

const username = ref('superuser')
const email = ref('contact@eltheme.ir')
const password = ref('contact@eltheme.ir')
const useUserInputs = ref(true)

const userInputs = computed(() => useUserInputs.value ? [username.value, email.value] : [])
<\/script>
`;

export { userInput as default };
