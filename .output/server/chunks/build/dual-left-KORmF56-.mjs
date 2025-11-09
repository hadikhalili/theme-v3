const dualLeft = `<template>
  <div class="flex flex-wrap items-end gap-6">
    <TairoPopover placement="bottom-start">
      <div class="flex items-center">
        <BaseAvatar src="/img/avatars/3.svg" />

        <span class="font-heading text-muted-800 ms-3 text-sm font-medium dark:text-white">
          \u0645\u0627\u06CC\u06A9 \u0645\u06CC\u0644\u0631
        </span>
      </div>

      <template #content>
        <TairoPopoverContentDual
          :stats="[
            {
              title: '\u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A',
              subtitle: '65 \u067E\u0631\u0648\u0698\u0647',
              image: 'https://vuero.cssninja.io/images/icons/stacks/js.svg',
            },
            {
              title: '\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627',
              subtitle: '154 \u067E\u0631\u0648\u0698\u0647',
              icon: 'ph:briefcase-duotone',
            },
          ]"
          image="/img/avatars/3.svg"
          title="\u0645\u0627\u06CC\u06A9 \u0645\u06CC\u0644\u0631"
          subtitle="\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631"
          footer-title="4,800,000 \u062A\u0648\u0645\u0627\u0646 / \u0633\u0627\u0639\u062A\u06CC"
          footer-text="\u0628\u0631 \u0627\u0633\u0627\u0633 \u06F5 \u0634\u063A\u0644 \u0627\u062E\u06CC\u0631"
          link-label="\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u06A9\u0646\u06CC\u062F"
          link="/"
        />
      </template>
    </TairoPopover>
  </div>
</template>
`;

export { dualLeft as default };
