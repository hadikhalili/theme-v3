const exposed = `<template>
  <div class="md:max-w-lg">
    <BaseTreeSelect
      ref="treeSelectRef"
      v-model="value"
      :children="tree"
      treeline
    />

    <div class="flex gap-2">
      <BaseButton @click="toggleAll">
        \u062A\u063A\u06CC\u06CC\u0631 \u0627\u0646\u062A\u062E\u0627\u0628
      </BaseButton>

      <BaseButton @click="selectAll">
        \u0627\u0646\u062A\u062E\u0627\u0628 \u062A\u0645\u0627\u0645 \u0627\u0646\u062A\u062E\u0627\u0628\u200C\u0647\u0627
      </BaseButton>

      <BaseButton @click="unselectAll">
        \u0644\u063A\u0648 \u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref<any[]>([])
const treeSelectRef = ref<any>(null)

function toggleAll() {
  treeSelectRef.value?.toggleChildrenSelection()
}
function unselectAll() {
  treeSelectRef.value?.unselectAllChildren()
}
function selectAll() {
  treeSelectRef.value?.selectAllChildren()
}

const tree = ref([
  {
    item: 'Item 1',
    children: [
      {
        item: 'Item 1.1',
      },
      {
        item: 'Item 1.2',
      },
    ],
  },
  {
    item: 'Item 2',
  },
  {
    item: 'Item 3',
    open: true,
    children: [
      {
        item: 'Item 3.0',
      },
      {
        item: 'Item 3.1',
        open: true,
        children: [
          {
            item: 'Item 3.1.1',
          },
          {
            item: 'Item 3.1.2',
            open: true,
            children: [],
          },
          {
            item: 'Item 3.1.3',
          },
        ],
      },
      {
        item: 'Item 3.2',
      },
      {
        item: 'Item 3.3',
        children: [],
      },
    ],
  },
  {
    item: 'Item 4',
  },
])
<\/script>
`;

export { exposed as default };
