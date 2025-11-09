const base = `<template>
  <div class="flex w-full items-end gap-6">
    <form class="mx-auto w-full">
      <fieldset class="w-full space-y-6">
        <div
          class="border-muted-200 dark:border-muted-700 flex items-center justify-between border-b py-4"
        >
          <legend class="text-muted-800 dark:text-muted-100 font-sans text-xl font-medium">
            \u062A\u063A\u06CC\u06CC\u0631 \u0637\u0631\u062D
          </legend>

          <NuxtLink
            to="#"
            class="text-primary-500 font-sans text-sm font-medium underline-offset-4 hover:underline"
          >
            \u0644\u063A\u0648 \u0637\u0631\u062D \u0634\u0645\u0627
          </NuxtLink>
        </div>

        <div class="grid gap-6 sm:grid-cols-4">
          <BaseRadioHeadless
            v-model="value"
            name="radio_custom"
            value="value_1"
          >
            <BaseCard
              rounded="lg"
              class="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                >
                  \u0634\u0631\u0648\u0639\u200C\u06A9\u0646\u0646\u062F\u0647
                </h4>

                <h3 class="text-muted-800 dark:text-muted-100 font-sans font-bold">
                  <span class="text-4xl">1</span>

                  <span class="text-2xl uppercase">GB</span>
                </h3>

                <div class="font-sans">
                  <span class="text-muted-800 dark:text-muted-100 text-xl font-bold">$5</span>

                  <span class="text-muted-500 dark:text-muted-400 text-sm font-medium">/ \u062F\u0631 \u0645\u0627\u0647</span>
                </div>
              </div>

              <div class="child absolute end-2 top-3 opacity-0">
                <Icon name="ph:check-circle-duotone" class="text-success-500 size-7" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>

          <BaseRadioHeadless
            v-model="value"
            name="radio_custom"
            value="value_2"
          >
            <BaseCard
              rounded="lg"
              class="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                >
                  \u0641\u0631\u06CC\u0644\u0646\u0633\u0631
                </h4>

                <h3 class="text-muted-800 dark:text-muted-100 font-sans font-bold">
                  <span class="text-4xl">5</span>

                  <span class="text-2xl uppercase">GB</span>
                </h3>

                <div class="font-sans">
                  <span class="text-muted-800 dark:text-muted-100 text-xl font-bold">$10</span>

                  <span class="text-muted-500 dark:text-muted-400 text-sm font-medium">/ \u062F\u0631 \u0645\u0627\u0647</span>
                </div>
              </div>

              <div class="child absolute end-2 top-3 opacity-0">
                <Icon name="ph:check-circle-duotone" class="text-success-500 size-7" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>

          <BaseRadioHeadless
            v-model="value"
            name="radio_custom"
            value="value_3"
          >
            <BaseCard
              rounded="lg"
              class="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                >
                  \u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631
                </h4>

                <h3 class="text-muted-800 dark:text-muted-100 font-sans font-bold">
                  <span class="text-4xl">10</span>

                  <span class="text-2xl uppercase">GB</span>
                </h3>

                <div class="font-sans">
                  <span class="text-muted-800 dark:text-muted-100 text-xl font-bold">$15</span>

                  <span class="text-muted-500 dark:text-muted-400 text-sm font-medium">/ \u062F\u0631 \u0645\u0627\u0647</span>
                </div>
              </div>

              <div class="child absolute end-2 top-3 opacity-0">
                <Icon name="ph:check-circle-duotone" class="text-success-500 size-7" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>

          <BaseRadioHeadless
            v-model="value"
            name="radio_custom"
            value="value_4"
          >
            <BaseCard
              rounded="lg"
              class="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                >
                  \u0634\u0631\u06A9\u062A
                </h4>

                <h3 class="text-muted-800 dark:text-muted-100 font-sans font-bold">
                  <span class="text-4xl">20</span>

                  <span class="text-2xl uppercase">GB</span>
                </h3>

                <div class="font-sans">
                  <span class="text-muted-800 dark:text-muted-100 text-xl font-bold">$20</span>

                  <span class="text-muted-500 dark:text-muted-400 text-sm font-medium">/ \u062F\u0631 \u0645\u0627\u0647</span>
                </div>
              </div>

              <div class="child absolute end-2 top-3 opacity-0">
                <Icon name="ph:check-circle-duotone" class="text-success-500 size-7" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
const value = ref('value_1')
<\/script>
`;

export { base as default };
