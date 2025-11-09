const checkboxItem = `<template>
  <div class="flex items-end">
    <BaseDropdown
      variant="button"
      label="\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC"
      placement="bottom-start"
    >
      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseCheckboxHeadless v-model="model" value="value_1">
          <BaseDropdownItem
            to="#"
            title="\u0634\u062E\u0635\u06CC"
            text="\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0641\u06CC\u062F"
            rounded="sm"
            class="pointer-events-none"
          >
            <template #start>
              <BaseCheckbox
                v-model="model"
                value="value_1"
                rounded="md"
                color="primary"
              />
            </template>
          </BaseDropdownItem>
        </BaseCheckboxHeadless>
      </div>

      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseCheckboxHeadless v-model="model" value="value_2">
          <BaseDropdownItem
            to="#"
            title="\u0634\u0631\u06A9\u062A"
            text="\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0641\u06CC\u062F"
            rounded="sm"
            class="pointer-events-none"
          >
            <template #start>
              <BaseCheckbox
                v-model="model"
                value="value_2"
                rounded="md"
                color="primary"
              />
            </template>
          </BaseDropdownItem>
        </BaseCheckboxHeadless>
      </div>

      <div
        class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"
      >
        <BaseCheckboxHeadless v-model="model" value="value_3">
          <BaseDropdownItem
            to="#"
            title="\u063A\u06CC\u0631\u0627\u0646\u062A\u0641\u0627\u0639\u06CC"
            text="\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0641\u06CC\u062F"
            rounded="sm"
            class="pointer-events-none"
          >
            <template #start>
              <BaseCheckbox
                v-model="model"
                value="value_3"
                rounded="md"
                color="primary"
              />
            </template>
          </BaseDropdownItem>
        </BaseCheckboxHeadless>
      </div>
    </BaseDropdown>
  </div>
</template>

<script setup lang="ts">
const model = ref(['value_1'])
<\/script>
`;

export { checkboxItem as default };
