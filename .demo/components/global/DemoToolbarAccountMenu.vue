<script setup lang="ts">
import { computed } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useRouter } from '#app'
import { useUserStore } from '~/store/user'

const router = useRouter()
const userStore = useUserStore()

const accountName = computed(() => {
  const user = userStore.user
  if (!user) return 'کاربر'
  if (user.name) return user.name
  const parts = [user.firstName, user.lastName].filter(Boolean).join(' ')
  return parts || user.username || 'کاربر'
})

const accountEmail = computed(() => userStore.user?.email ?? '')
const accountCredit = computed(() => Number(userStore.user?.credit ?? 0))

const handleProfile = (close: () => void) => {
  close()
  router.push('/layouts/profile-edit')
}

const handleLogout = async (close: () => void) => {
  userStore.logout()
  close()
  await router.push('/auth')
}
</script>

<template>
  <div class="group relative z-20 inline-flex items-center justify-center text-end">
    <Menu
      v-slot="{ close }"
      as="div"
      class="relative z-20 size-9 text-start"
    >
      <MenuButton as="template">
        <button
          type="button"
          class="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex size-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
        >
          <div class="relative inline-flex size-9 items-center justify-center rounded-full">
            <img
              src="/img/avatars/2.svg"
              class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
              alt="Avatar"
            >
          </div>
        </button>
      </MenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-64 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none"
        >
          <div class="p-6 text-center">
            <div
              class="bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-200 mx-auto mb-4 inline-flex items-center justify-center rounded-[20px] px-4 py-2 font-sans text-xs"
            >
              اعتبار: {{ accountCredit.toLocaleString('fa-IR') }} تومان
            </div>
            <div class="relative mx-auto flex size-20 items-center justify-center rounded-full">
              <img
                src="/img/avatars/2.svg"
                class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                alt="Avatar"
              >
            </div>
            <div class="mt-3">
              <h6 class="font-heading text-muted-800 text-sm font-medium dark:text-white">
                {{ accountName }}
              </h6>
              <p class="text-muted-400 mb-4 font-sans text-xs">
                {{ accountEmail }}
              </p>
              <BaseButton
                rounded="lg"
                class="w-full"
                @click="handleProfile(close)"
              >
                مدیریت حساب
              </BaseButton>
            </div>
          </div>

          <div class="p-4">
            <MenuItem as="div">
              <BaseButton
                variant="pastel"
                rounded="lg"
                class="w-full"
                @click="handleLogout(close)"
              >
                خروج از حساب
              </BaseButton>
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>


