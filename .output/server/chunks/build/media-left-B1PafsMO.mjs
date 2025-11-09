const mediaLeft = `<template>
  <div class="flex flex-wrap items-end gap-6">
    <TairoPopover placement="bottom-start">
      <div class="flex items-center">
        <span
          class="border-muted-300 text-muted-800 dark:border-muted-600 rounded-full border px-3 py-1.5 font-sans text-sm font-medium dark:text-white"
        >
          \u062E\u0627\u0646\u0647 \u0632\u06CC\u0628\u0627
        </span>
      </div>

      <template #content>
        <TairoPopoverContentMedia
          :images="[
            'https://img.freepik.com/vector-gratis/mobiliario-sofa-ventana-mesa-plantas-interior-sala-estar_357257-356.jpg?w=300',
            'https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?w=150',
            'https://img.freepik.com/free-vector/home-interior-background-style_52683-44164.jpg?w=150',
          ]"
          title="\u062E\u0627\u0646\u0647"
          subtitle="\u06F5 \u0627\u062A\u0627\u0642"
          text="\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u0686\u0647 \u06A9\u0633\u06CC \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u0622\u0646 \u0631\u0627 \u0628\u0647 \u06CC\u06A9 \u062E\u0631\u062F\u0645\u0646\u062F \u062B\u0627\u0628\u062A \u06A9\u0646\u062F\u061F"
          footer-title="$150/night"
          footer-text="\u062E\u06CC\u0627\u0628\u0627\u0646 \u06A9\u0644\u0645\u0628\u06CC\u0627 \u06F1\u06F4\u060C \u0628\u0644\u0648\u06A9 C"
          link-label="\u0627\u06A9\u0646\u0648\u0646 \u0627\u062C\u0627\u0631\u0647 \u06A9\u0646\u06CC\u062F"
          to="#"
        />
      </template>
    </TairoPopover>
  </div>
</template>
`;

export { mediaLeft as default };
