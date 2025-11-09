const formGroup = `<template>
  <div class="max-w-md">
    <form
      action=""
      method="POST"
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
    </form>
  </div>
</template>

<script setup lang="ts">
const firstName = ref('')
const lastName = ref('')
const email = ref('')
<\/script>
`;

export { formGroup as default };
