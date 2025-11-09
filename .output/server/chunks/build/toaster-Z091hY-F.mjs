const toaster = `<template>
  <div>
    <div class="max-w-md">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 sm:col-span-6">
          <BaseInput v-model="toast.title" label="\u0639\u0646\u0648\u0627\u0646" />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <BaseInput v-model="toast.message" label="\u067E\u06CC\u0627\u0645" />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <BaseSelect v-model="toast.color" label="\u0631\u0646\u06AF">
            <option value="primary">
              Primary
            </option>

            <option value="success">
              \u0645\u0648\u0641\u0642\u06CC\u062A
            </option>

            <option value="info">
              Info
            </option>

            <option value="warning">
              Warning
            </option>

            <option value="danger">
              Danger
            </option>

            <option value="muted">
              Muted
            </option>
          </BaseSelect>
        </div>

        <div class="col-span-12 sm:col-span-6">
          <BaseSelect v-model="toast.icon" label="\u0622\u06CC\u06A9\u0648\u0646">
            <option value="lucide:check">
              \u0622\u06CC\u06A9\u0648\u0646 \u0628\u0631\u0631\u0633\u06CC
            </option>

            <option value="lucide:x">
              \u0622\u06CC\u06A9\u0648\u0646 \u0628\u0633\u062A\u0646
            </option>

            <option value="lucide:alert-triangle">
              \u0622\u06CC\u06A9\u0648\u0646 \u0647\u0634\u062F\u0627\u0631
            </option>

            <option value="lucide:alert-octagon">
              \u0622\u06CC\u06A9\u0648\u0646 \u062E\u0637\u0631
            </option>

            <option value="lucide:info">
              \u0622\u06CC\u06A9\u0648\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062A
            </option>
          </BaseSelect>
        </div>

        <div class="col-span-12 sm:col-span-6">
          <BaseSelect v-model="position" label="Position">
            <option value="top-start">
              top-start
            </option>

            <option value="top-center">
              top-center
            </option>

            <option value="top-end">
              top-end
            </option>

            <option value="bottom-start">
              bottom-start
            </option>

            <option value="bottom-center">
              bottom-center
            </option>

            <option value="bottom-end">
              bottom-end
            </option>
          </BaseSelect>
        </div>

        <div class="col-span-12">
          <BaseCheckbox
            v-model="toast.closable"
            label="\u062A\u0648\u0633\u062A \u0642\u0627\u0628\u0644 \u0628\u0633\u062A\u0646\u061F"
            color="primary"
          />
        </div>

        <div class="col-span-12">
          <BaseButton
            class="w-full"
            color="primary"
            @click="showToast"
          >
            \u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0633\u062A\u0631
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const toast = reactive({
  title: '\u0645\u0648\u0641\u0642\u06CC\u062A',
  message: \`\u067E\u06CC\u0627\u0645 \u0627\u0631\u0633\u0627\u0644 \u06AF\u0631\u062F\u06CC\u062F!\`,
  color: 'success' as 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'muted',
  icon: 'lucide:check',
  closable: true,
})
const position = ref<keyof typeof themes>('bottom-center')

const themes = {
  'top-start': {
    maxToasts: 1,
    containerId: 'top-start',
    containerClass: [
      'fixed',
      'inset-0',
      'pointer-events-none',
      'p-4',
      'flex',
      'flex-col', // top
      'overflow-hidden',
      'z-[200]',
      'items-start', // start
      'gap-2',
      'space-y-3',
    ],
    wrapperClass: [
      'pointer-events-auto',
      'focus:outline-none',
      'rounded',
      'outline-slate-300',
      'outline-offset-2',
      'focus:outline',
      'focus:outline-2',
      'focus-within:outline',
      'focus-within:outline-2',
    ],
    transition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'transform -translate-x-full opacity-0',
      enterToClass: 'transform translate-x-0 opacity-100',
      leaveActiveClass: 'transition duration-200 ease-in',
      leaveFromClass: 'transform translate-x-0 opacity-100',
      leaveToClass: 'transform -translate-x-full opacity-0',
    },
  },
  'top-center': {
    maxToasts: 1,
    containerId: 'top-center',
    containerClass: [
      'fixed',
      'inset-0',
      'pointer-events-none',
      'p-4',
      'flex',
      'flex-col', // top
      'overflow-hidden',
      'z-[200]',
      'items-center', // center
      'gap-2',
      'space-y-3',
    ],
    wrapperClass: [
      'pointer-events-auto',
      'focus:outline-none',
      'rounded',
      'outline-slate-300',
      'outline-offset-2',
      'focus:outline',
      'focus:outline-2',
      'focus-within:outline',
      'focus-within:outline-2',
    ],
    transition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'transform -translate-y-full opacity-0',
      enterToClass: 'transform translate-y-0 opacity-100',
      leaveActiveClass: 'transition duration-200 ease-in',
      leaveFromClass: 'transform translate-y-0 opacity-100',
      leaveToClass: 'transform -translate-y-full opacity-0',
    },
  },
  'top-end': {
    maxToasts: 1,
    containerId: 'top-end',
    containerClass: [
      'fixed',
      'inset-0',
      'pointer-events-none',
      'p-4',
      'flex',
      'flex-col', // top
      'overflow-hidden',
      'z-[200]',
      'items-end', // end
      'gap-2',
      'space-y-3',
    ],
    wrapperClass: [
      'pointer-events-auto',
      'focus:outline-none',
      'rounded',
      'outline-slate-300',
      'outline-offset-2',
      'focus:outline',
      'focus:outline-2',
      'focus-within:outline',
      'focus-within:outline-2',
    ],
    transition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'transform translate-x-full opacity-0',
      enterToClass: 'transform translate-x-0 opacity-100',
      leaveActiveClass: 'transition duration-200 ease-in',
      leaveFromClass: 'transform translate-x-0 opacity-100',
      leaveToClass: 'transform translate-x-full opacity-0',
    },
  },
  'bottom-start': {
    maxToasts: 1,
    containerId: 'bottom-start',
    containerClass: [
      'fixed',
      'inset-0',
      'pointer-events-none',
      'p-4',
      'flex',
      'flex-col-reverse', // bottom
      'overflow-hidden',
      'z-[200]',
      'items-start', // start
      'gap-2',
      'space-y-3',
    ],
    wrapperClass: [
      'pointer-events-auto',
      'focus:outline-none',
      'rounded',
      'outline-slate-300',
      'outline-offset-2',
      'focus:outline',
      'focus:outline-2',
      'focus-within:outline',
      'focus-within:outline-2',
    ],
    transition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'transform -translate-x-full opacity-0',
      enterToClass: 'transform translate-x-0 opacity-100',
      leaveActiveClass: 'transition duration-200 ease-in',
      leaveFromClass: 'transform translate-x-0 opacity-100',
      leaveToClass: 'transform -translate-x-full opacity-0',
    },
  },
  'bottom-center': {
    maxToasts: 1,
    containerId: 'bottom-center',
    containerClass: [
      'fixed',
      'inset-0',
      'pointer-events-none',
      'p-4',
      'flex',
      'flex-col-reverse', // bottom
      'overflow-hidden',
      'z-[200]',
      'items-center', // center
      'gap-2',
      'space-y-3',
    ],
    wrapperClass: [
      'pointer-events-auto',
      'focus:outline-none',
      'rounded',
      'outline-slate-300',
      'outline-offset-2',
      'focus:outline',
      'focus:outline-2',
      'focus-within:outline',
      'focus-within:outline-2',
    ],
    transition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'transform translate-y-full opacity-0',
      enterToClass: 'transform translate-y-0 opacity-100',
      leaveActiveClass: 'transition duration-200 ease-in',
      leaveFromClass: 'transform translate-y-0 opacity-100',
      leaveToClass: 'transform translate-y-full opacity-0',
    },
  },
  'bottom-end': {
    maxToasts: 1,
    containerId: 'bottom-end',
    containerClass: [
      'fixed',
      'inset-0',
      'pointer-events-none',
      'p-4',
      'flex',
      'flex-col-reverse', // bottom
      'overflow-hidden',
      'z-[200]',
      'items-end', // end
      'gap-2',
      'space-y-3',
    ],
    wrapperClass: [
      'pointer-events-auto',
      'focus:outline-none',
      'rounded',
      'outline-slate-300',
      'outline-offset-2',
      'focus:outline',
      'focus:outline-2',
      'focus-within:outline',
      'focus-within:outline-2',
    ],
    transition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'transform translate-x-full opacity-0',
      enterToClass: 'transform translate-x-0 opacity-100',
      leaveActiveClass: 'transition duration-200 ease-in',
      leaveFromClass: 'transform translate-x-0 opacity-100',
      leaveToClass: 'transform translate-x-full opacity-0',
    },
  },
}

let toaster: any

const showToast = () => {
  toaster?.clearAll()

  toaster = createNinjaToaster({
    theme: themes[position.value],
  })
  toaster.showComponent('TairoToaster', {
    props: {
      title: toast.title,
      message: toast.message,
      color: toast.color,
      icon: toast.icon,
      closable: toast.closable,
    },
  })
}
<\/script>
`;

export { toaster as default };
