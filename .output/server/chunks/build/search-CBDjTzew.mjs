const search = `<template>
  <div>
    <BaseButton @click="open('search')">
      \u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u067E\u0646\u0644
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const { open } = usePanels()
<\/script>
`;

export { search as default };
