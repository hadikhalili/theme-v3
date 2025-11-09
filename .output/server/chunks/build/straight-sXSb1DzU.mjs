const straight = `<template>
  <TairoFlexTable>
    <template #header>
      <TairoFlexTableHeading type="shrink">
        <div class="flex items-center">
          <BaseCheckbox
            v-model="selectAll"
            rounded="none"
            color="primary"
          />
        </div>
      </TairoFlexTableHeading>

      <TairoFlexTableHeading type="grow">
        Member
      </TairoFlexTableHeading>

      <TairoFlexTableHeading type="stable">
        \u062A\u062E\u0635\u0635
      </TairoFlexTableHeading>

      <TairoFlexTableHeading type="stable">
        \u0627\u0645\u062A\u06CC\u0627\u0632
      </TairoFlexTableHeading>

      <TairoFlexTableHeading type="stable">
        \u0648\u0636\u0639\u06CC\u062A
      </TairoFlexTableHeading>

      <TairoFlexTableHeading type="stable">
        Actions
      </TairoFlexTableHeading>
    </template>

    <TairoFlexTableRow
      v-for="member in team"
      :key="member.id"
      rounded="none"
    >
      <TairoFlexTableCell type="shrink" data-content="Selection">
        <div class="flex items-center">
          <BaseCheckbox
            v-model="selected"
            :value="\`checkbox-\${member.id}\`"
            rounded="none"
            color="primary"
          />
        </div>
      </TairoFlexTableCell>

      <TairoFlexTableCell type="grow" data-content="Member">
        <div class="flex items-center">
          <BaseAvatar :src="member.src" size="sm" />

          <div class="ms-3 leading-none">
            <h4 class="font-sans text-sm font-medium">
              {{ member.name }}
            </h4>

            <p class="text-muted-400 font-sans text-xs font-normal">
              {{ member.role }}
            </p>
          </div>
        </div>
      </TairoFlexTableCell>

      <TairoFlexTableCell
        type="stable"
        data-content="\u062A\u062E\u0635\u0635"
        light
      >
        {{ member.expertise }}
      </TairoFlexTableCell>

      <TairoFlexTableCell type="stable" data-content="\u0627\u0645\u062A\u06CC\u0627\u0632">
        <span class="font-medium">{{ member.rate }} \u062A\u0648\u0645\u0627\u0646 / \u0633\u0627\u0639\u062A\u06CC</span>
      </TairoFlexTableCell>

      <TairoFlexTableCell type="stable" data-content="\u0648\u0636\u0639\u06CC\u062A">
        <BaseTag
          v-if="member.status === 'Available'"
          color="success"
          variant="pastel"
          rounded="full"
          class="font-medium"
        >
          {{ member.status }}
        </BaseTag>

        <BaseTag
          v-else-if="member.status === 'New'"
          color="info"
          variant="pastel"
          rounded="full"
          class="font-medium"
        >
          {{ member.status }}
        </BaseTag>

        <BaseTag
          v-else-if="member.status === '\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0634\u062F\u0647'"
          color="warning"
          variant="pastel"
          rounded="full"
          class="font-medium"
        >
          {{ member.status }}
        </BaseTag>
      </TairoFlexTableCell>

      <TairoFlexTableCell type="stable" data-content="Actions">
        <BaseButton
          color="primary"
          variant="outline"
          rounded="none"
          class="scale-90"
        >
          \u0646\u0645\u0627\u06CC\u0634
        </BaseButton>
      </TairoFlexTableCell>
    </TairoFlexTableRow>
  </TairoFlexTable>
</template>

<script setup lang="ts">
const selected = ref([])
const selectAll = ref(false)

const team = [
  {
    id: 0,
    src: '/img/avatars/22.svg',
    name: '\u0622\u0646\u0627 \u0648\u0631\u06CC\u0646\u06A9\u0648\u0641',
    role: '\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC',
    expertise: '\u0637\u0631\u0627\u062D\u06CC \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC',
    rate: 49,
    status: 'Available',
  },
  {
    id: 1,
    src: '/img/avatars/3.svg',
    name: '\u062C\u0627\u0646 \u06A9\u0645\u0628\u0644',
    role: '\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634',
    expertise: '\u0645\u062F\u06CC\u0631\u06CC\u062A',
    rate: 74,
    status: '\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0634\u062F\u0647',
  },
  {
    id: 2,
    src: '/img/avatars/9.svg',
    name: '\u0628\u062B \u062F\u0644\u0627\u0646\u0648',
    role: '\u0637\u0631\u0627\u062D \u0645\u062D\u0635\u0648\u0644',
    expertise: '\u0645\u062D\u0635\u0648\u0644',
    rate: 43,
    status: 'Available',
  },
  {
    id: 3,
    src: '/img/avatars/14.svg',
    name: '\u0627\u0646\u062F\u0631\u0648 \u0647\u06CC\u06AF\u0632',
    role: '\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647',
    expertise: '\u067E\u0631\u0648\u0698\u0647',
    rate: 69,
    status: 'New',
  },
]
<\/script>
`;

export { straight as default };
