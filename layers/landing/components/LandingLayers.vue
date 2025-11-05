<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
        >
          ساخته شده برای توسعه‌دهندگان
        </BaseText>
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          تجربه چند لایه
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          تایرو بر اساس مفهوم لایه‌های ناکست ساخته شده است. لایه‌ها می‌توانند به عنوان گروه‌هایی از اجزا و ترکیبات مرتبط با یکدیگر در نظر گرفته شوند. آن‌ها به ایجاد یک تجربه یکپارچه و یک پایگاه کد قابل نگهداری کمک می‌کنند.
        </BaseParagraph>
      </div>
      <div class="ptablet:grid-cols-2 grid gap-6 sm:grid-cols-3">
        <LandingLayersBox
          title="اپلیکیشن شروع‌کننده"
          icon="ph:rocket-duotone"
          to="/documentation/setup"
          color="indigo"
        >
          تایرو با یک پروژه شروع‌کننده تمیز ارائه می‌شود که در آن می‌توانید کد و محتوای خود را بنویسید، همچنین با ارائه فایل‌های پیکربندی اپلیکیشن کار را آسان‌تر می‌کند.
        </LandingLayersBox>
        <LandingLayersBox
          title="سفارشی‌سازی"
          icon="ph:sparkle-duotone"
          to="/documentation/tailwindcss"
          color="purple"
        >
          تایرو با تیلویند سی‌اس‌اس و رابط کاربری شوریکن ساخته شده است. شما می‌توانید هر جزء را برای هماهنگی با سبک‌ها، اشکال و رنگ‌های برند خود سفارشی‌سازی کنید.
        </LandingLayersBox>
        <LandingLayersBox
          title="مرجع کامپوننت"
          icon="ph:notification-duotone"
          to="/documentation/reference"
        >
          تایرو با بسیاری از اجزای رابط کاربری ارائه می‌شود، از کوچک‌ترین اجزایی که برای ساخت یک برنامه وب نیاز دارید تا ارگانیزم‌های پیچیده‌تر با منطق خودشان.
        </LandingLayersBox>
      </div>
    </div>
  </div>
</template>
