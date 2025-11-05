<script setup lang="ts">
definePageMeta({
  title: 'سیستم داشبورد Nuxt و تیلویند سی‌اس‌اس',
  description:
    'قالب سیستم داشبورد Nuxt و تیلویند سی‌اس‌اس که با بیش از ۱۰۰ صفحه از پیش ساخته‌شده و بیش از ۴۰ مؤلفه رابط کاربری سفارشی همراه است.',
  breadcrumb: {
    label: 'تایرو',
  },
  layout: 'landing',
})
</script>

<template>
  <div>
    <LandingHero />
    <LandingCustomizer />
    <LandingDemos :limit="12" />
    <LandingLayers />
    <LandingLayouts />
    <LandingFeatures />
    <LandingBenefits />
    <LandingCta />
    <LandingContent />
    <LandingFooter />
  </div>
</template>
