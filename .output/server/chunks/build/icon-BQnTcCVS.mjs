const icon = `<template>
  <AddonCarouselIcons :slides="topics" />
</template>

<script setup lang="ts">
const topics = [
  {
    icon: 'ph:megaphone-simple-duotone',
    title: '\u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC',
    link: '/',
  },
  {
    icon: 'ph:chart-bar-duotone',
    title: '\u062A\u062D\u0644\u06CC\u0644\u200C\u0647\u0627',
    link: '/',
  },
  {
    icon: 'ph:storefront-duotone',
    title: '\u062A\u062C\u0627\u0631\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9',
    link: '/',
  },
  {
    icon: 'ph:rocket-duotone',
    title: '\u0627\u0633\u062A\u0627\u0631\u062A\u0627\u067E\u200C\u0647\u0627',
    link: '/',
  },
  {
    icon: 'ph:bank-duotone',
    title: '\u062A\u0623\u0645\u06CC\u0646 \u0645\u0627\u0644\u06CC',
    link: '/',
  },
  {
    icon: 'ph:app-window-duotone',
    title: 'SEO',
    link: '/',
  },
  {
    icon: 'ph:sketch-logo-duotone',
    title: '\u0645\u062D\u0635\u0648\u0644',
    link: '/',
  },
  {
    icon: 'ph:heartbeat-duotone',
    title: '\u0633\u0644\u0627\u0645\u062A',
    link: '/',
  },
  {
    icon: 'ph:pen-nib-duotone',
    title: '\u0645\u062D\u062A\u0648\u0627',
    link: '/',
  },
  {
    icon: 'ph:briefcase-duotone',
    title: '\u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631',
    link: '/',
  },
  {
    icon: 'ph:leaf-duotone',
    title: '\u0627\u06A9\u0648\u0644\u0648\u0698\u06CC',
    link: '/',
  },
  {
    icon: 'ph:flask-duotone',
    title: '\u0622\u0632\u0645\u0627\u06CC\u0634\u200C\u0647\u0627',
    link: '/',
  },
  {
    icon: 'ph:users-three-duotone',
    title: '\u0634\u063A\u0644\u200C\u0647\u0627',
    link: '/',
  },
  {
    icon: 'ph:buildings-duotone',
    title: '\u0634\u0631\u06A9\u062A',
    link: '/',
  },
]
<\/script>
`;

export { icon as default };
