const chevron = `<template>
  <div class="flex flex-col gap-4">
    <BaseBreadcrumb :items="demoBreadcrumbOne">
      <Icon name="lucide:chevron-right" class="rtl:rotate-180 block size-3" />
    </BaseBreadcrumb>

    <BaseBreadcrumb :items="demoBreadcrumbTwo">
      <Icon name="lucide:chevron-right" class="rtl:rotate-180 block size-3" />
    </BaseBreadcrumb>
  </div>
</template>

<script setup lang="ts">
const demoBreadcrumbOne = [
  {
    label: '\u062E\u0627\u0646\u0647',
    hideLabel: false,
    icon: 'lucide:home',
    to: '#',
  },
  {
    label: '\u0645\u062D\u0635\u0648\u0644\u0627\u062A',
    hideLabel: false,
    to: '#',
  },
  {
    label: '\u0644\u067E\u200C\u062A\u0627\u067E\u200C\u0647\u0627',
    hideLabel: false,
    to: '#',
  },
]

const demoBreadcrumbTwo = [
  {
    label: '\u062E\u0627\u0646\u0647',
    hideLabel: false,
    icon: 'lucide:home',
    to: '#',
  },
  {
    label: '\u0645\u062D\u0635\u0648\u0644\u0627\u062A',
    hideLabel: false,
    icon: 'lucide:layout-grid',
    to: '#',
  },
  {
    label: '\u0644\u067E\u200C\u062A\u0627\u067E\u200C\u0647\u0627',
    hideLabel: false,
    icon: 'lucide:laptop',
    to: '#',
  },
]
<\/script>
`;

export { chevron as default };
