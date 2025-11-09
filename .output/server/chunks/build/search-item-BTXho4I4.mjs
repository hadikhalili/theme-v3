const searchItem = `<template>
  <div class="flex items-end">
    <BaseDropdown
      variant="button"
      label="\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC"
      placement="bottom-start"
      size="lg"
    >
      <div class="relative p-2">
        <BaseInput
          icon="lucide:search"
          rounded="sm"
          placeholder="\u062C\u0633\u062A\u062C\u0648\u06CC \u06A9\u0627\u0631\u0628\u0631\u0627\u0646..."
        />
      </div>

      <div class="nui-slimscroll me-2 max-h-[240px] overflow-y-auto pe-2">
        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_1">
            <BaseDropdownItem
              to="#"
              title="\u062C\u0627\u0646 \u0631\u0648\u0644\u0646\u062F"
              text="\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631"
              rounded="sm"
              color="primary"
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
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_2">
            <BaseDropdownItem
              to="#"
              title="\u067E\u0627\u0626\u0648\u0644\u0627 \u0647\u0627\u0631\u062A\u0644\u06CC"
              text="\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634"
              rounded="sm"
              color="primary"
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
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_3">
            <BaseDropdownItem
              to="#"
              title="\u062C\u0627\u0646 \u0644\u0627\u06A9"
              text="\u0645\u0627\u062C\u0631\u0627\u062C\u0648"
              rounded="sm"
              color="primary"
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

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_4">
            <BaseDropdownItem
              to="#"
              title="\u0622\u062F\u0631\u06CC\u0627\u0646 \u0627\u0633\u0645\u06CC\u062A"
              text="\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_4"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_5">
            <BaseDropdownItem
              to="#"
              title="\u06A9\u0644\u0627\u0631\u0646\u0633 \u0646\u0644\u0633\u0648\u0646"
              text="\u0645\u0639\u0645\u0627\u0631 \u0631\u0627\u0647\u200C\u062D\u0644"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_5"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_6">
            <BaseDropdownItem
              to="#"
              title="\u062C\u0627\u0646 \u0628\u06A9\u0633\u062A\u0631"
              text="\u062D\u0633\u0627\u0628\u062F\u0627\u0631 \u0627\u0631\u0634\u062F"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_6"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>

        <div
          class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"
        >
          <BaseCheckboxHeadless v-model="model" value="value_7">
            <BaseDropdownItem
              to="#"
              title="\u0645\u0627\u06CC\u06A9 \u067E\u0646\u062F\u0644\u062A\u0648\u0646"
              text="\u0627\u0641\u0633\u0631 \u0639\u0645\u0644\u06CC\u0627\u062A"
              rounded="sm"
              color="primary"
              class="pointer-events-none"
            >
              <template #start>
                <BaseCheckbox
                  v-model="model"
                  value="value_7"
                  rounded="md"
                  color="primary"
                />
              </template>
            </BaseDropdownItem>
          </BaseCheckboxHeadless>
        </div>
      </div>

      <div class="relative p-2">
        <BaseButton
          size="sm"
          variant="pastel"
          color="danger"
          class="w-full"
        >
          <Icon name="lucide:user-minus" class="size-4" />

          <span>\u062D\u0630\u0641 \u06A9\u0627\u0631\u0628\u0631</span>
        </BaseButton>
      </div>
    </BaseDropdown>
  </div>
</template>

<script setup lang="ts">
const model = ref(['value_1'])
<\/script>
`;

export { searchItem as default };
