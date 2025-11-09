const disabled = `<template>
  <div class="max-w-md">
    <AddonInputPhone
      v-model="phone"
      label="\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646"
      disabled
    />
  </div>
</template>

<script lang="ts" setup>
const phone = ref('+1 555 555 5555')
<\/script>
`;

export { disabled as default };
