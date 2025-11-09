const user = `<template>
  <AddonCarouselTeam :slides="team" />
</template>

<script setup lang="ts">
const team = [
  {
    id: 0,
    avatar: '/img/avatars/3.svg',
    badge: '/img/icons/flags/united-states-of-america.svg',
    name: '\u062F\u0646\u06CC\u0644 \u06A9\u0644\u0627\u0631\u06A9',
    role: '\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F',
    text: '\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A.',
    skills: [
      {
        name: 'Vue.js',
        logo: '/img/logos/stacks/vue.svg',
      },
      {
        name: 'React.js',
        logo: '/img/logos/stacks/react.svg',
      },
      {
        name: 'Sass',
        logo: '/img/logos/stacks/sass.svg',
      },
    ],
    to: '#',
  },
  {
    id: 1,
    avatar: '/img/avatars/2.svg',
    badge: '/img/icons/flags/italy.svg',
    name: '\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC',
    role: '\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644',
    text: '\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A.',
    skills: [
      {
        name: '\u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631',
        logo: '/img/logos/stacks/illustrator.svg',
      },
      {
        name: '\u0627\u0633\u06A9\u0686',
        logo: '/img/logos/stacks/sketch.svg',
      },
      {
        name: '\u0641\u062A\u0648\u0634\u0627\u067E',
        logo: '/img/logos/stacks/photoshop.svg',
      },
    ],
    to: '#',
  },
  {
    id: 2,
    avatar: '/img/avatars/4.svg',
    badge: '/img/icons/flags/finland.svg',
    name: '\u0644\u0627\u0646\u0627 \u0647\u0646\u0631\u06CC\u06A9\u0633',
    role: '\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628',
    text: '\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A.',
    skills: [
      {
        name: 'HTML5',
        logo: '/img/logos/stacks/html5.svg',
      },
      {
        name: 'CSS3',
        logo: '/img/logos/stacks/css3.svg',
      },
      {
        name: 'Javascript',
        logo: '/img/logos/stacks/javascript.svg',
      },
    ],
    to: '#',
  },
  {
    id: 3,
    avatar: '/img/avatars/9.svg',
    badge: '/img/icons/flags/canada.svg',
    name: '\u0622\u0644\u06CC\u0646\u0627 \u06AF\u0644\u0631',
    role: '\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644',
    text: '\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A.',
    skills: [
      {
        name: '\u0627\u0646\u062F\u0631\u0648\u06CC\u062F',
        logo: '/img/logos/stacks/android.svg',
      },
      {
        name: '\u0633\u0648\u0626\u06CC\u0641\u062A',
        logo: '/img/logos/stacks/swift.svg',
      },
      {
        name: '\u0641\u0644\u0627\u062A\u0631',
        logo: '/img/logos/stacks/flutter.svg',
      },
    ],
    to: '#',
  },
  {
    id: 4,
    avatar: '/img/avatars/12.svg',
    badge: '/img/icons/flags/france.svg',
    name: '\u06A9\u0627\u0631\u06CC\u0646 \u0645\u0627\u0631\u0686\u0646\u062F',
    role: '\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F',
    text: '\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A.',
    skills: [
      {
        name: 'Bulma',
        logo: '/img/logos/stacks/bulma.svg',
      },
      {
        name: 'Tailwind CSS',
        logo: '/img/logos/stacks/tailwind.svg',
      },
      {
        name: 'React.js',
        logo: '/img/logos/stacks/react.svg',
      },
    ],
    to: '#',
  },
  {
    id: 5,
    avatar: '/img/avatars/14.svg',
    badge: '/img/icons/flags/spain.svg',
    name: '\u0631\u0627\u06CC\u0645\u0648\u0646\u062F\u0648 \u067E\u0631\u0632',
    role: '\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F',
    text: '\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A.',
    skills: [
      {
        name: 'Vue.js',
        logo: '/img/logos/stacks/vue.svg',
      },
      {
        name: 'React.js',
        logo: '/img/logos/stacks/react.svg',
      },
      {
        name: "\u062A\u0627\u06CC\u067E\u200C\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A",
        logo: '/img/logos/stacks/typescript.svg',
      },
    ],
    to: '#',
  },
]
<\/script>
`;

export { user as default };
