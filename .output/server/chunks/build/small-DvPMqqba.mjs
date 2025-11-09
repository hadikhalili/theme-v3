const small = `<template>
  <BaseAvatarGroup size="sm" :avatars="people" />
</template>

<script setup lang="ts">
const people = [
  {
    'data-nui-tooltip': '\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u067E\u0631\u0632',
    'src': '/img/avatars/19.svg',
  },
  {
    'data-nui-tooltip': '\u0622\u0631\u0648\u0646 \u0627\u0633\u067E\u0644\u0627\u062A\u0631',
    'src': '/img/avatars/16.svg',
  },
  {
    'data-nui-tooltip': '\u0645\u0627\u06CC\u06A9 \u0645\u06CC\u0644\u0631',
    'src': '/img/avatars/3.svg',
  },
  {
    'data-nui-tooltip': '\u0628\u0646\u062F\u06CC\u06A9\u062A \u06A9\u0633\u0644\u0631',
    'src': '/img/avatars/22.svg',
  },
  {
    'data-nui-tooltip': '\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC',
    'src': '/img/avatars/2.svg',
  },
]
<\/script>
`;

export { small as default };
