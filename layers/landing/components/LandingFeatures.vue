<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-12 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
        >
          بیشتر از این است
        </BaseText>
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          دوستدار توسعه‌دهنده
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          تایرو یک سیستم داشبورد پیشرفته است که از جدیدترین تکنولوژی‌ها و جاوااسکریپت استفاده می‌کند و به بهترین شیوه‌های برنامه‌نویسی پایبند است، که آن را به یک انتخاب ایده‌آل برای اپلیکیشن‌های بدون سرور بعدی شما تبدیل می‌کند.
        </BaseParagraph>
      </div>
      <div class="ltablet:grid-cols-3 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <LandingFeaturesTile title="ناکست" icon="simple-icons:nuxtdotjs">
          ناکست جدیدترین نسخه از چارچوب ناکست.js است، یک چارچوب قدرتمند Vue برای رندر سمت سرور (SSR).
        </LandingFeaturesTile>
        <LandingFeaturesTile
          title="تیلویند سی‌اس‌اس"
          icon="simple-icons:tailwindcss"
        >
          تیلویند سی‌اس‌اس یک فریمورک CSS بر پایه ابزارها است که برای ساخت سریع رابط‌های کاربری سفارشی به کار می‌رود.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="تایپ‌اسکریپت" icon="file-icons:typescript">
          تایپ‌اسکریپت یک نسخه گسترش‌یافته از جاوااسکریپت است که به کد ساده JS کامپایل می‌شود.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="وایت" icon="simple-icons:vite">
          وایت ابزار نسل جدید فرانت‌اند است که توسعه فرانت‌اند را به طور قابل‌توجهی بهبود می‌بخشد.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="نسخه LTS نود" icon="teenyicons:nodejs-solid">
          نسخه ۱۸ نود یکی از آخرین نسخه‌های Node.js است، یک موتور سرور جاوااسکریپت قدرتمند.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Pnpm" icon="file-icons:pnpm">
          Pnpm یک مدیر بسته سریع و کارآمد از نظر فضای دیسک برای مخازن npm و Yarn است.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Eslint" icon="file-icons:eslint">
          Eslint ابزاری برای شناسایی و گزارش الگوهای موجود در کد جاوااسکریپت است.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="پریتر" icon="simple-icons:prettier">
          پریتر یک قالب‌دهنده کد با سبک خاص است. این ابزار یک سبک کدگذاری منسجم را اعمال می‌کند.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Icones.js" icon="ph:lightning-duotone">
          Icones.js یک کتابخانه است که به شما اجازه می‌دهد از هر آیکونی از هر کتابخانه آیکون استفاده کنید.
        </LandingFeaturesTile>
      </div>

      <div class="mt-16 flex items-center justify-center">
        <BaseButton
          to="https://go.eltheme.ir/get-tairo"
          rounded="lg"
          color="primary"
        >
          دریافت سیستم داشبورد تایرو
        </BaseButton>
      </div>
    </div>
  </div>
</template>
