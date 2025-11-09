const itemIcon = `<template>
  <div class="md:max-w-lg">
    <BaseTreeSelect :children="tree">
      <template #item-label="{ level, child, toggle }">
        <BaseTreeSelectItem
          :level="level"
          :toggle="toggle"
          :value="{
            name: child.item.name,
            text: child.item.text,
            icon: child.item.icon,
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
      name: 'General',
      text: undefined,
    },
    open: true,
    children: [
      {
        item: {
          icon: 'ph:cards-duotone',
          name: 'Company',
          text: 'Everything about the company',
        },
      },
      {
        item: {
          icon: 'ph:buildings-duotone',
          name: 'Company',
          text: 'Select filial',
        },
        children: [
          {
            item: {
              icon: 'ph:buildings-duotone',
              name: 'Sub-Company 1',
              text: 'Everything about the company',
            },
          },
          {
            item: {
              icon: 'ph:buildings-duotone',
              name: 'Sub-Company 2',
              text: 'Everything about the company',
            },
          },
          {
            item: {
              icon: 'ph:buildings-duotone',
              name: 'Sub-Company 3',
              text: 'Everything about the company',
            },
          },
        ],
      },
      {
        item: {
          icon: 'ph:suitcase-duotone',
          name: '\u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631',
          text: '\u0633\u0648\u0627\u0644\u0627\u062A \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631',
        },
        children: [],
      },
    ],
  },
  {
    item: {
      icon: 'ph:suitcase-duotone',
      name: '\u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631',
      text: '\u0633\u0648\u0627\u0644\u0627\u062A \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631',
    },
  },
  {
    item: {
      media: undefined,
      name: '\u0645\u0648\u0636\u0648\u0639\u0627\u062A',
      text: undefined,
    },
    children: [
      {
        item: {
          media: undefined,
          name: '\u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631',
          text: undefined,
        },
        children: [
          {
            item: {
              icon: 'ph:rocket-duotone',
              name: '\u0627\u0633\u062A\u0627\u0631\u062A\u0627\u067E\u200C\u0647\u0627',
              text: '\u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0633\u062A\u0627\u0631\u062A\u0627\u067E\u200C\u0647\u0627',
            },
          },
          {
            item: {
              icon: 'ph:robot-duotone',
              name: '\u0645\u062D\u0635\u0648\u0644\u0627\u062A',
              text: '\u0686\u0631\u062E\u0647\u200C\u0647\u0627\u06CC \u0639\u0645\u0631 \u0645\u062D\u0635\u0648\u0644',
            },
          },
        ],
      },
      {
        item: {
          media: undefined,
          name: 'Web Content',
          text: undefined,
        },
        children: [
          {
            item: {
              icon: 'ph:pencil-duotone',
              name: 'Blogging',
              text: 'Tips & tricks about blogging',
              children: [],
            },
          },
          {
            item: {
              icon: 'ph:circles-four-duotone',
              name: 'Social media',
              text: 'Managing social media content',
            },
          },
        ],
      },
    ],
  },
]
<\/script>
`;

export { itemIcon as default };
