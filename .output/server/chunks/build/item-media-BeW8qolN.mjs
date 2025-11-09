const itemMedia = `<template>
  <div class="md:max-w-lg">
    <BaseTreeSelect :children="tree" treeline>
      <template #item-label="{ level, child, toggle }">
        <BaseTreeSelectItem
          :level="level"
          :toggle="toggle"
          :value="{
            name: child.item.name,
            text: child.item.text,
            media: child.item.media,
          }"
        />
      </template>
    </BaseTreeSelect>
  </div>
</template>

<script setup lang="ts">
const tree = [
  {
    item: {
      media: undefined,
      name: '\u0645\u062F\u06CC\u0631\u06CC\u062A \u0639\u0627\u0644\u06CC',
      text: undefined,
    },
    children: [
      {
        item: {
          media: 'https://media.cssninja.io/shuriken/avatars/8.svg',
          name: '\u0647\u0627\u0631\u0648\u0644\u062F \u0641\u0631\u06CC\u0632\u0631',
          text: '\u0628\u0646\u06CC\u0627\u0646\u200C\u06AF\u0630\u0627\u0631 \u06AF\u0631\u0648\u0647',
        },
        children: [],
      },
      {
        item: {
          media: 'https://media.cssninja.io/shuriken/avatars/5.svg',
          name: '\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631',
          text: '\u0645\u062F\u06CC\u0631 \u0627\u062C\u0631\u0627\u06CC\u06CC',
        },
      },
    ],
  },
  {
    item: {
      media: undefined,
      name: 'Teams',
      text: undefined,
    },
    open: true,
    children: [
      {
        item: {
          media: undefined,
          name: '\u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC',
          text: undefined,
        },
        open: true,
        children: [
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/3.svg',
              name: '\u06A9\u0644\u0627\u0631\u06A9 \u0627\u0633\u0645\u06CC\u062A',
              text: '\u0647\u0645\u06A9\u0627\u0631 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC',
            },
          },
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/2.svg',
              name: '\u062E\u0627\u0646\u0648\u0627\u062F\u0647 \u0627\u0648\u0644\u06AF\u0627',
              text: '\u0647\u0645\u06A9\u0627\u0631 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC',
            },
            children: [
              {
                item: {
                  media: 'https://media.cssninja.io/shuriken/avatars/2.svg',
                  name: '\u06A9\u0644\u0627\u0631\u06A9 \u0627\u0633\u0645\u06CC\u062A',
                  text: '\u0647\u0645\u06A9\u0627\u0631 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC',
                },
                children: [],
              },
              {
                item: {
                  media: 'https://media.cssninja.io/shuriken/avatars/2.svg',
                  name: '\u062E\u0627\u0646\u0648\u0627\u062F\u0647 \u0627\u0648\u0644\u06AF\u0627',
                  text: '\u0647\u0645\u06A9\u0627\u0631 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC',
                },
              },
            ],
          },
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/16.svg',
              name: '\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631',
              text: '\u0645\u0633\u0626\u0648\u0644 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC',
            },
          },
        ],
      },
      {
        item: {
          media: undefined,
          name: '\u0641\u0631\u0648\u0634',
          text: undefined,
        },
        children: [
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/9.svg',
              name: '\u0622\u0646\u0627 \u0644\u0648\u067E\u0632',
              text: '\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634',
            },
            children: [],
          },
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/25.svg',
              name: '\u0645\u0644\u0627\u0646\u06CC \u0644\u0627\u0641\u06CC\u0644\u062F',
              text: '\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634',
            },
          },
        ],
      },
    ],
  },
  {
    item: {
      media: 'https://media.cssninja.io/shuriken/avatars/14.svg',
      name: '\u0698\u0627\u0646 \u0644\u0648\u0628\u0648\u0633',
      text: '\u0647\u0645\u06A9\u0627\u0631 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC',
    },
  },
]
<\/script>
`;

export { itemMedia as default };
