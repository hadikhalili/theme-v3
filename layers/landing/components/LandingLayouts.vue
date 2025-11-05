<script setup lang="ts">
const layouts = [
  {
    name: 'sidebar',
    title: 'چیدمان سایدبار',
    description: 'چیدمان پیش‌فرض تایرو',
    text: 'چیدمان سایدبار یک چیدمان ناوبری دوطرفه است. دارای یک سایدبار با لیستی از آیکون‌های منو و یک زیرسایدبار با لیست منو و زیرمنوها است.',
    img: '/img/illustrations/ui/sidebar-layout-master-fa.png',
    imgDark: '/img/illustrations/ui/sidebar-layout-master-dark-fa.png',
    icon: 'ph:sidebar-duotone',
  },
  {
    name: 'collapse',
    title: 'چیدمان جمع‌شونده',
    description: 'چیدمان سایدبار جمع‌شونده',
    text: 'چیدمان جمع‌شونده بر روی یک نوار کناری تک با لیستی از لینک‌های منو و زیرمنو تمرکز دارد که برای اپلیکیشن‌های کوچکتر، زمانی که محتوای زیادی ندارید، ایده‌آل است.',
    img: '/img/illustrations/ui/collapse-layout-master-fa.png',
    imgDark: '/img/illustrations/ui/collapse-layout-master-dark-fa.png',
    icon: 'ph:sidebar-simple-duotone',
  },
  {
    name: 'topnav',
    title: 'چیدمان نوار ابزار بالا',
    description: 'چیدمان ناوبری بالا',
    text: 'چیدمان ناوبری بالا بر روی یک نوار ابزار واحد تمرکز دارد که یک روش هوشمندانه برای پیمایش در صفحات شما ارائه می‌دهد. احتمالاً برای اپلیکیشن‌های کوچکتر مناسب‌تر است.',
    img: '/img/illustrations/ui/topnav-layout-master-fa.png',
    imgDark: '/img/illustrations/ui/topnav-layout-master-dark-fa.png',
    icon: 'ph:app-window-duotone',
  },
  {
    name: 'iconnav',
    title: 'چیدمان ناوبری آیکون',
    description: 'چیدمان ناوبری آیکون',
    text: 'چیدمان ناوبری آیکون بر روی یک نوار ابزار دوگانه تمرکز دارد که یک روش هوشمندانه برای پیمایش در صفحات شما ارائه می‌دهد. احتمالاً برای اپلیکیشن‌های بزرگتر مناسب‌تر است.',
    img: '/img/illustrations/ui/iconnav-layout-master-fa.png',
    imgDark: '/img/illustrations/ui/iconnav-layout-master-dark-fa.png',
    icon: 'ph:app-window-duotone',
  },
]

const activeLayout = ref('sidebar')
</script>

<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
        >
          چندین چیدمان
        </BaseText>
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          گزینه‌های اصلی چیدمان
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          با استفاده از مفهوم لایه‌های ناکست، توانسته‌ایم سه چیدمان مختلف ایجاد کنیم که می‌توانید در پروژه خود از آن‌ها استفاده کنید. هر کدام دارای یک لایه و مجموعه‌ای از اجزا و ترکیبات هستند.
        </BaseParagraph>
      </div>
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 flex h-full md:col-span-5">
          <div class="w-full space-y-2 sm:max-w-xs">
            <button
              v-for="(layout, index) in layouts"
              :key="index"
              type="button"
              class="flex w-full items-center gap-3 rounded-xl p-4 text-start"
              :class="
                activeLayout === layout.name
                  ? 'bg-muted-50 dark:bg-muted-950/50'
                  : ''
              "
              @click="activeLayout = layout.name"
            >
              <Icon
                :name="layout.icon"
                class="size-6"
                :class="
                  activeLayout === layout.name
                    ? 'text-primary-500'
                    : 'text-muted-400'
                "
              />
              <span class="block">
                <BaseParagraph size="md" lead="tight">{{ layout.title }}</BaseParagraph>
                <BaseParagraph
                  size="xs"
                  class="text-muted-500 dark:text-muted-400"
                >{{ layout.description }}</BaseParagraph>
              </span>
            </button>
          </div>
        </div>
        <div class="col-span-12 md:col-span-7">
          <BaseCard
            v-for="(layout, index) in layouts"
            v-show="activeLayout === layout.name"
            :key="index"
            color="default-contrast"
            rounded="lg"
            class="relative flex flex-col overflow-hidden rounded-xl text-start"
          >
            <div class="bg-muted-100 dark:bg-muted-900/40 relative">
              <img
                :src="layout.img"
                class="block w-full dark:hidden"
                :alt="layout.title"
                width="717"
                height="384"
                loading="lazy"
                decoding="async"
              >
              <img
                :src="layout.imgDark"
                class="hidden w-full dark:block"
                :alt="layout.title"
                width="717"
                height="384"
                loading="lazy"
                decoding="async"
              >
              <NuxtLink
                to="https://tairo.cssninja.io/documentation/setup/add-a-layout"
                class="border-muted-200 text-muted-600 dark:text-muted-400 hover:text-primary-500 dark:hover:text-primary-500 hover:border-primary-500 dark:bg-muted-950 dark:border-muted-800 dark:hover:border-primary-500 absolute start-6 top-6 inline-flex items-center gap-1 rounded-full border bg-white px-5 py-2 transition-colors duration-300"
              >
                <span class="font-sans text-sm">نحوه استفاده</span>
                <Icon name="lucide:arrow-right" class="size-3 rtl:rotate-180" />
              </NuxtLink>
            </div>
            <div class="relative flex grow flex-col px-8 pb-8 pt-4">
              <div class="mt-auto space-y-2">
                <BaseHeading weight="light">
                  {{ layout.title }}
                </BaseHeading>
                <BaseParagraph
                  size="sm"
                  class="text-muted-500 dark:text-muted-400"
                >
                  {{ layout.text }}
                </BaseParagraph>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
