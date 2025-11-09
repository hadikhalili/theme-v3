const formSave = `<template>
  <div class="max-w-md">
    <form
      action=""
      method="POST"
      class="space-y-10"
      @submit.prevent
    >
      <TairoFormGroup label="\u0634\u0645\u0627 \u06A9\u06CC \u0647\u0633\u062A\u06CC\u062F\u061F" sublabel="\u0646\u0627\u0645 \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u0645\u0627 \u0627\u0637\u0644\u0627\u0639 \u062F\u0647\u06CC\u062F">
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-12 sm:col-span-6">
            <BaseInput
              v-model="firstName"
              label="\u0646\u0627\u0645"
              placeholder="\u0645\u062B\u0627\u0644: \u0627\u0645\u06CC\u0644\u06CC"
            />
          </div>

          <div class="col-span-12 sm:col-span-6">
            <BaseInput
              v-model="lastName"
              label="\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC"
              placeholder="\u0645\u062B\u0627\u0644: \u0648\u0627\u0644\u062A\u0631\u0632"
            />
          </div>

          <div class="col-span-12">
            <BaseInput
              v-model="email"
              label="\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644"
              placeholder="\u0645\u062B\u0627\u0644: emilywalters@eltheme.ir"
            />
          </div>
        </div>
      </TairoFormGroup>

      <TairoFormGroup label="\u06A9\u062C\u0627 \u0632\u0646\u062F\u06AF\u06CC \u0645\u06CC\u200C\u06A9\u0646\u06CC\u062F\u061F" sublabel="\u0645\u06A9\u0627\u0646 \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u0645\u0627 \u0627\u0637\u0644\u0627\u0639 \u062F\u0647\u06CC\u062F">
        <div class="grid grid-cols-12 gap-3">
          <div class="col-span-12 sm:col-span-6">
            <BaseSelect v-model="country" label="\u06A9\u0634\u0648\u0631">
              <option value="">
                \u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u06A9\u0634\u0648\u0631
              </option>

              <option value="italy">
                \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647
              </option>

              <option value="italy">
                \u0627\u06CC\u062A\u0627\u0644\u06CC\u0627
              </option>

              <option value="france">
                \u0641\u0631\u0627\u0646\u0633\u0647
              </option>

              <option value="spain">
                \u0627\u0633\u067E\u0627\u0646\u06CC\u0627
              </option>

              <option value="germany">
                \u0622\u0644\u0645\u0627\u0646
              </option>

              <option value="portugal">
                \u0686\u06CC\u0646
              </option>
            </BaseSelect>
          </div>

          <div class="col-span-12 sm:col-span-6">
            <BaseInput
              v-model="lastName"
              label="\u0634\u0647\u0631"
              placeholder="\u0645\u062B\u0627\u0644: \u0645\u06CC\u0644\u0627\u0646"
            />
          </div>

          <div class="col-span-12">
            <BaseInput
              v-model="address"
              label="\u0622\u062F\u0631\u0633"
              placeholder="\u0645\u062B\u0627\u0644: \u06F2\u06F3\u0627\u0645 \u0634\u0631\u0642\u06CC\u060C \u062C\u0627\u062F\u0647 \u067E\u0644\u0627\u0632\u0627\u06CC \u062C\u0645\u0647\u0648\u0631\u06CC\u060C \u06F2\u06F8\u06F0\u06F0\u06F1"
            />
          </div>
        </div>
      </TairoFormGroup>

      <TairoFormSave />
    </form>
  </div>
</template>

<script setup lang="ts">
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const country = ref('')
const address = ref('')
<\/script>
`;

export { formSave as default };
