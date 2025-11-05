<script setup lang="ts">
const selectedStyle = ref('classic')
const toggled = ref(false)

watch(selectedStyle, (value) => {
  if (value) {
    toggled.value = true
    const timeout = setTimeout(() => {
      toggled.value = false
      clearTimeout(timeout)
    }, 1750)
  }
})
</script>

<template>
  <div class="dark:bg-muted-900 overflow-hidden bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
        >
          کتابخانه رابط کاربری
        </BaseText>
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          رابط کاربری شوریکن
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          رابط کاربری شوریکن یک مجموعه کامل از کامپوننت‌ها و ابزارهای ناکست مانند دکمه‌ها، عناصر فرم، نشان‌ها، تب‌ها و گروه‌های تایپوگرافی را فراهم می‌کند. هر کامپوننت چندین props ارائه می‌دهد که می‌توانید از آن‌ها برای سفارشی‌سازی ظاهر و احساس آن استفاده کنید.
        </BaseParagraph>
      </div>
      <div
        class="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row"
        aria-hidden="true"
      >
        <!-- Left -->
        <div class="relative w-full sm:w-1/2">
          <div class="absolute inset-x-0 z-0 -mt-2 py-24">
            <div
              class="mt-12 grid grid-cols-2 -space-x-52 opacity-60 2xl:mx-auto 2xl:max-w-3xl dark:opacity-50"
            >
              <div
                class="from-primary-200 to-primary-400 h-40 bg-gradient-to-br blur-3xl dark:from-blue-700"
              />
              <div
                class="dark:to-primary-600 h-24 bg-gradient-to-r from-indigo-400 to-indigo-700 blur-3xl"
              />
            </div>
          </div>
          <div
            class="gridlines relative z-10 flex min-h-[480px] w-full items-center justify-center"
          >
            <div
              v-if="toggled"
              class="absolute start-0 top-1/4 z-10 size-full overflow-hidden motion-reduce:hidden"
            >
              <div class="shuriken-1 absolute block">
                <img
                  class="animate-spin-fast size-10"
                  src="/img/logos/eltheme-logo-icon.svg"
                  alt=""
                >
              </div>
              <div class="shuriken-2 absolute block">
                <img
                  class="animate-spin-fast size-12"
                  src="/img/logos/eltheme-logo-icon.svg"
                  alt=""
                >
              </div>
              <div class="shuriken-3 absolute block">
                <img
                  class="animate-spin-fast size-11"
                  src="/img/logos/eltheme-logo-icon.svg"
                  alt=""
                >
              </div>
            </div>
            <BaseCard
              v-if="selectedStyle === 'smart'"
              rounded="lg"
              class="!border-primary-600 relative z-20 mx-auto max-w-[340px] p-6"
            >
              <div class="mb-6 flex items-center justify-between">
                <BaseTag
                  rounded="lg"
                  color="primary"
                  shadow="flat"
                >
                  عضو
                </BaseTag>
                <BaseButtonClose rounded="full" color="muted" />
              </div>
              <BaseAvatar
                size="xl"
                src="/img/avatars/24.svg"
                badge-src="/img/stacks/html5.svg"
                class="mx-auto !flex !transition-all !duration-200"
                rounded="full"
              />
              <div class="mt-3 text-center">
                <BaseHeading
                  as="h3"
                  size="xl"
                  weight="medium"
                >
                  بلن لوپز
                </BaseHeading>
                <BaseText
                  size="sm"
                  class="text-muted-500 dark:text-muted-400"
                >
                  توسعه‌دهنده فول‌استک
                </BaseText>
              </div>
              <div class="my-6 flex items-center justify-center gap-4">
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/js.svg"
                  rounded="full"
                />
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/python.svg"
                  rounded="full"
                />
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/reactjs.svg"
                  rounded="full"
                />
              </div>
              <div>
                <BaseButton
                  class="!h-12 w-full"
                  rounded="lg"
                  color="primary"
                  variant="pastel"
                >
                  <Icon name="lucide:bell" class="size-4" />
                  <span>دنبال کردن بلن</span>
                </BaseButton>
                <NuxtLink
                  to="#"
                  class="text-primary-500 block pt-4 text-center font-sans text-sm underline-offset-4 hover:underline"
                >
                  مشاهده پروفایل
                </NuxtLink>
              </div>
            </BaseCard>
            <BaseCard
              v-if="selectedStyle === 'creative'"
              rounded="lg"
              class="!border-primary-600 relative z-20 mx-auto max-w-[340px] overflow-hidden p-6"
            >
              <div
                class="bg-primary-500 dark:bg-primary-500/20 absolute -end-16 -top-32 size-72 rounded-full transition-transform delay-150 duration-500"
                :class="selectedStyle === 'creative' ? 'scale-100' : 'scale-0'"
              />
              <div class="mb-6 flex items-center justify-between">
                <BaseTag
                  rounded="full"
                  color="primary"
                  shadow="flat"
                  class="relative z-10"
                >
                  عضو
                </BaseTag>
                <div
                  class="dark:bg-muted-800 flex size-7 items-center justify-center rounded-full bg-white"
                >
                  <BaseAvatar
                    size="xxs"
                    src="/img/icons/flags/united-states-of-america.svg"
                    rounded="full"
                  />
                </div>
              </div>
              <BaseAvatar
                size="xl"
                src="/img/avatars/10.svg"
                class="nui-mask nui-mask-hexed mx-auto !flex !transition-all !duration-200"
                rounded="none"
              />
              <div class="mt-3 text-center">
                <BaseHeading
                  as="h3"
                  size="xl"
                  weight="medium"
                >
                  کندرا ویلسون
                </BaseHeading>
                <BaseText
                  size="sm"
                  class="text-muted-500 dark:text-muted-400"
                >
                  مدیر فروش
                </BaseText>
              </div>
              <div class="my-6 flex items-center justify-center gap-4">
                <BaseAvatar
                  size="xs"
                  src="/img/icons/logos/nitro.svg"
                  rounded="full"
                />
                <BaseAvatar
                  size="xs"
                  src="/img/icons/logos/okano.svg"
                  rounded="full"
                />
                <BaseAvatar
                  size="xs"
                  src="/img/icons/logos/slicer.svg"
                  rounded="full"
                />
              </div>
              <div class="flex gap-2">
                <BaseButton class="!h-11 w-full" rounded="full">
                  <Icon name="lucide:bookmark" class="size-4" />
                  <span>ذخیره</span>
                </BaseButton>

                <BaseButton
                  class="!h-11 w-full"
                  rounded="full"
                  color="primary"
                >
                  <Icon name="lucide:bell" class="size-4" />
                  <span>دنبال کنید</span>
                </BaseButton>
              </div>
              <NuxtLink
                to="#"
                class="text-primary-500 block pt-4 text-center font-sans text-sm underline-offset-4 hover:underline"
              >
                مشاهده پروژه‌ها
              </NuxtLink>
            </BaseCard>
            <BaseCard
              v-if="selectedStyle === 'corporate'"
              rounded="sm"
              class="!border-primary-600 relative z-20 mx-auto max-w-[340px] p-6"
            >
              <div class="mb-6 flex items-center justify-between">
                <BaseTag
                  rounded="sm"
                  color="primary"
                  shadow="flat"
                >
                  عضو
                </BaseTag>
                <BaseButtonClose rounded="lg" color="primary" />
              </div>
              <BaseAvatar
                size="xl"
                src="/img/avatars/25.svg"
                badge-src="/img/stacks/illustrator.svg"
                class="mx-auto !flex !transition-all !duration-200"
                rounded="lg"
              />
              <div class="mt-3 text-center">
                <BaseHeading
                  as="h3"
                  size="xl"
                  weight="medium"
                >
                  جنا دیویس
                </BaseHeading>
                <BaseText
                  size="sm"
                  class="text-muted-500 dark:text-muted-400"
                >
                  طراح UI/UX
                </BaseText>
              </div>
              <BaseParagraph size="sm" class="text-muted-400 my-2 text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </BaseParagraph>
              <div class="my-6 flex items-center justify-center gap-4">
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/xd.svg"
                  rounded="full"
                />
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/photoshop.svg"
                  rounded="full"
                />
                <BaseAvatar
                  size="xs"
                  src="/img/stacks/html5.svg"
                  rounded="full"
                />
              </div>
              <div>
                <BaseButton
                  class="!h-11 w-full"
                  rounded="sm"
                  color="primary"
                >
                  <Icon name="lucide:check" class="size-4" />
                  <span>استخدام کنید</span>
                </BaseButton>
              </div>
            </BaseCard>
            <BaseCard
              v-if="selectedStyle === 'classic'"
              rounded="none"
              class="!border-primary-600 relative z-20 mx-auto max-w-[340px] p-6"
            >
              <div class="mb-6 flex items-center justify-between">
                <BaseTag
                  rounded="none"
                  color="primary"
                  shadow="flat"
                >
                  عضو
                </BaseTag>
                <BaseButtonClose rounded="none" />
              </div>
              <BaseAvatar
                size="xl"
                src="/img/avatars/8.svg"
                class="mx-auto !flex !transition-all !duration-200"
                rounded="none"
              />
              <div class="mt-3 text-center">
                <BaseHeading
                  as="h3"
                  size="xl"
                  weight="medium"
                >
                  جان بکستر
                </BaseHeading>
                <BaseText
                  size="sm"
                  class="text-muted-500 dark:text-muted-400"
                >
                  رهبر فنی
                </BaseText>
              </div>
              <BaseParagraph size="sm" class="text-muted-400 my-2 text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </BaseParagraph>
              <div class="my-6 flex items-center justify-center gap-4">
                <NuxtLink
                  to="#"
                  class="text-muted-400 hover:text-primary-500 flex size-6 items-center justify-center transition-colors duration-200"
                >
                  <Icon name="fa6-brands:facebook-f" class="size-4" />
                </NuxtLink>
                <NuxtLink
                  to="#"
                  class="text-muted-400 hover:text-primary-500 flex size-6 items-center justify-center transition-colors duration-200"
                >
                  <Icon name="fa6-brands:twitter" class="size-4" />
                </NuxtLink>
                <NuxtLink
                  to="#"
                  class="text-muted-400 hover:text-primary-500 flex size-6 items-center justify-center transition-colors duration-200"
                >
                  <Icon name="fa6-brands:linkedin-in" class="size-4" />
                </NuxtLink>
              </div>
              <div>
                <BaseButton
                  class="!h-11 w-full"
                  rounded="none"
                  color="primary"
                  variant="outline"
                >
                  <span>ارسال دعوت‌نامه</span>
                </BaseButton>
              </div>
            </BaseCard>
          </div>
        </div>
        <!-- Right -->
        <div class="relative w-full sm:w-1/2">
          <!-- buttons -->
          <div class="mx-auto">
            <div
              class="relative mx-auto mt-48 flex w-full max-w-xs flex-wrap sm:mt-0"
            >
              <img
                class="absolute -top-48 end-8 w-64"
                src="/img/illustrations/text-hand-fa.svg"
                alt=""
                loading="lazy"
                decoding="async"
              >
              <button
                type="button"
                class="mx-auto flex h-32 w-40 flex-col items-center justify-center transition-colors duration-200"
                :class="
                  selectedStyle === 'classic'
                    ? 'text-primary-500'
                    : 'text-muted-400 dark:text-muted-500 hover:text-muted-600 dark:hover:text-muted-200'
                "
                @click="selectedStyle = 'classic'"
              >
                <Icon
                  name="system-uicons:document-words"
                  class="mb-2 size-10"
                />
                <span class="font-sans text-sm">کلاسیک</span>
              </button>
              <button
                type="button"
                class="mx-auto flex h-32 w-40 flex-col items-center justify-center transition-colors duration-200"
                :class="
                  selectedStyle === 'corporate'
                    ? 'text-primary-500'
                    : 'text-muted-400 dark:text-muted-500 hover:text-muted-600 dark:hover:text-muted-200'
                "
                @click="selectedStyle = 'corporate'"
              >
                <Icon name="system-uicons:diamond" class="mb-2 size-10" />
                <span class="font-sans text-sm">شرکتی</span>
              </button>
              <button
                type="button"
                class="mx-auto flex h-32 w-40 flex-col items-center justify-center transition-colors duration-200"
                :class="
                  selectedStyle === 'smart'
                    ? 'text-primary-500'
                    : 'text-muted-400 dark:text-muted-500 hover:text-muted-600 dark:hover:text-muted-200'
                "
                @click="selectedStyle = 'smart'"
              >
                <Icon name="system-uicons:maximise" class="mb-2 size-10" />
                <span class="font-sans text-sm">هوشمند</span>
              </button>
              <button
                type="button"
                class="mx-auto flex h-32 w-40 flex-col items-center justify-center transition-colors duration-200"
                :class="
                  selectedStyle === 'creative'
                    ? 'text-primary-500'
                    : 'text-muted-400 dark:text-muted-500 hover:text-muted-600 dark:hover:text-muted-200'
                "
                @click="selectedStyle = 'creative'"
              >
                <Icon
                  name="system-uicons:lightbulb-on"
                  class="mb-2 size-10"
                />
                <span class="font-sans text-sm">خلاقانه</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gridlines {
  background-image: url(/img/illustrations/gridlines.svg);
}

.dark .gridlines {
  background-image: url(/img/illustrations/gridlines-predark.svg);
}

.shuriken-1 {
  animation: shurikenFirst 0.75s 0s forwards;
}

.shuriken-2 {
  top: 190px;
  transform: translateX(-20px);
  animation: shurikenSecond 0.5s 0s forwards;
}
.shuriken-3 {
  top: 110px;
  transform: translateX(-20px) rotate(20deg);
  animation: shurikenThird 1.75s 0s forwards;
}
@keyframes shurikenFirst {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(600px);
    opacity: 0;
  }
}

@keyframes shurikenSecond {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(500px);
    opacity: 0;
  }
}

@keyframes shurikenThird {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(400px);
    opacity: 0;
  }
}
</style>
