<template>
  <BaseCheckbox
    v-model="value"
    disabled
    label="من غیرفعالم"
  />
</template>

<script setup lang="ts">
const value = ref(true)
</script>
