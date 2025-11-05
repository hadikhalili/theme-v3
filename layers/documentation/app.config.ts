export default {
  tairo: {
    sidebar: {
      navigation: {
        items: [
          {
            title: 'مستندات',
            icon: { name: 'ph:grid-four-duotone', class: 'w-5 h-5' },
            subsidebar: { component: 'DocSubsidebarDocumentation' },
            // activePath: '/documentation',
            to: 'https://tairo.cssninja.io/documentation',
          },
        ],
      },
    },
  },
}
