<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
        >
          ما پشت شما هستیم
        </BaseText>
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          رضایت مشتری
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          ما اینجا هستیم تا به شما کمک کنیم. ما تیم پشتیبانی اختصاصی و یک جامعه توسعه‌دهندگان داریم که برای هر مشکلی که ممکن است داشته باشید به شما کمک می‌کنند. از دسترسی خودکار گیت‌هاب از حساب cssninja خود مطلع شوید.
        </BaseParagraph>
      </div>
      <div class="ptablet:grid-cols-2 grid gap-6 sm:grid-cols-3">
        <LandingLayersBox
          title="پورتال پشتیبانی"
          icon="ph:lifebuoy-duotone"
          to="https://eltheme.ir/faq/support"
          color="indigo"
        >
          مشکلی پیش آمده؟ ما یک پورتال پشتیبانی اختصاصی داریم که می‌توانید تیکت باز کنید و از تیم پشتیبانی ما کمک بگیرید.
        </LandingLayersBox>
        <LandingLayersBox
          title="دسترسی به گیت‌هاب"
          icon="fa6-brands:github"
          to="https://eltheme.ir/faq/github-access"
          color="purple"
        >
          ما اتوماسیون گیت‌هاب را ساخته‌ایم که به شما امکان دسترسی به مخازن خصوصی ما را برای محصولاتی که از ما خریداری کرده‌اید، می‌دهد.
        </LandingLayersBox>
        <LandingLayersBox
          title="جامعه"
          icon="fa6-brands:discord"
          to="https://go.eltheme.ir/discord"
        >
          ما یک جامعه هیجان‌انگیز در دیسکورد داریم که می‌توانید در آن کار خود را بحث کنید و از جامعه مشتریان و توسعه‌دهندگان ما کمک بگیرید.
        </LandingLayersBox>
      </div>
    </div>
  </div>
</template>
