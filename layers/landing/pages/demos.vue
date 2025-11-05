<script setup lang="ts">
definePageMeta({
  title: 'صفحات داشبورد از پیش ساخته‌شده',
  description:
    'بیش از ۱۰۰ صفحه از پیش ساخته‌شده را کاوش کنید، از جمله داشبوردها و نمونه‌های اپلیکیشن. پروژه خود را با Nuxt و تیلویند سی‌اس‌اس آغاز کنید.',
  layout: 'landing',
})
</script>

<template>
  <div class="dark:bg-muted-900 bg-white pt-16">
    <LandingDemos :cta="false" />
    <LandingCta />
    <LandingFooter />
  </div>
</template>
