const dualRight = `<template>
  <div class="flex flex-wrap items-end justify-end gap-6">
    <TairoPopover placement="bottom-end">
      <div class="flex items-center">
        <BaseAvatar src="/img/avatars/2.svg" />

        <span class="text-muted-800 ms-3 font-sans text-sm font-medium dark:text-white">
          \u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC
        </span>
      </div>

      <template #content>
        <TairoPopoverContentDual
          :stats="[
            {
              title: '\u0627\u0646\u06AF\u0648\u0644\u0627\u0631',
              subtitle: '16 \u067E\u0631\u0648\u0698\u0647',
              image: 'https://vuero.cssninja.io/images/icons/stacks/angular.svg',
            },
            {
              title: '\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627',
              subtitle: '56 \u067E\u0631\u0648\u0698\u0647',
              icon: 'ph:briefcase-duotone',
            },
          ]"
          image="/img/avatars/2.svg"
          title="\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC"
          subtitle="\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631"
          footer-title="55 \u062A\u0648\u0645\u0627\u0646 / \u0633\u0627\u0639\u062A\u06CC"
          footer-text="\u0628\u0631 \u0627\u0633\u0627\u0633 \u06F5 \u0634\u063A\u0644 \u0627\u062E\u06CC\u0631"
          link-label="\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u06A9\u0646\u06CC\u062F"
          link="/"
        />
      </template>
    </TairoPopover>
  </div>
</template>
`;

export { dualRight as default };
