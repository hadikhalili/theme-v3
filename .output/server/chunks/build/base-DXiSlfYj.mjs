const base = `<template>
  <div class="grid items-center gap-8 md:grid-cols-2">
    <AddonMarkdownRemark :source="markdown" />

    <BaseTextarea
      v-model="markdown"
      autogrow
    />
  </div>
</template>

<script setup lang="ts">
const markdown = ref([
  '# Hello world',
  '',
  \`\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A.\`,
  '',
  '\`\`\`js',
  'const hello = "world"',
  '\`\`\`',
].join('\\n'))
<\/script>
`;

export { base as default };
