<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
    <section class="mx-auto max-w-6xl px-4 py-16" dir="rtl">
      <header class="space-y-3 text-center">
        <p class="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-300">
          {{ ui.headerPill }}
        </p>
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
          {{ ui.pageTitle }}
        </h1>
        <p class="mx-auto max-w-2xl text-base text-slate-400">
          {{ ui.subtitle }}
        </p>
      </header>

      <div class="mx-auto mt-12 flex w-full max-w-xl items-center rounded-full bg-white/5 p-1 text-sm font-medium text-slate-400 shadow-lg shadow-slate-900/60 backdrop-blur">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="[
            'flex-1 rounded-full px-6 py-3 transition-all duration-300',
            activeTab === tab.id
              ? 'bg-white text-slate-900 shadow-sm shadow-emerald-500/40'
              : 'hover:text-white'
          ]"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <p class="mt-6 text-center text-sm text-slate-400">
        {{ activeTabData.description }}
      </p>

      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <article
          v-for="plan in displayedPlans"
          :key="plan.id"
          :class="[
            'flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-slate-900/70 p-8 shadow-2xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-emerald-500/10',
            plan.highlight ? 'border-emerald-400/70 bg-gradient-to-b from-slate-900/80 via-slate-900/30 to-slate-900/80 ring-2 ring-emerald-400/40' : ''
          ]"
        >
          <div class="flex flex-col gap-6">
            <div class="flex items-start justify-between gap-6">
              <div>
                <div class="flex items-center gap-3">
                  <h3 class="text-2xl font-bold text-white">{{ plan.name }}</h3>
                  <span
                    v-if="plan.highlight"
                    class="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200"
                  >
                    {{ ui.popularBadge }}
                  </span>
                </div>
                <p class="mt-2 text-sm text-slate-400">{{ plan.description }}</p>
              </div>
              <div class="text-left">
                <p class="text-3xl font-bold text-emerald-300">{{ plan.price }}</p>
                <p class="mt-1 text-xs text-slate-400">{{ plan.period }}</p>
                <p v-if="plan.total" class="mt-1 text-xs text-slate-500">{{ plan.total }}</p>
              </div>
            </div>

            <span
              v-if="plan.badge"
              class="inline-flex w-fit items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200"
            >
              {{ plan.badge }}
            </span>

            <ul class="space-y-4">
              <li
                v-for="feature in plan.features"
                :key="feature"
                class="flex items-start gap-3 text-sm text-slate-300"
              >
                <span class="mt-0.5 flex size-8 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                  <CheckIcon class="size-4" />
                </span>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <button
            class="mt-10 w-full rounded-2xl bg-emerald-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            {{ plan.cta }}
          </button>
        </article>
      </div>

      <div class="mt-12 text-center text-xs text-slate-500">
        <p>{{ ui.footerNote }}</p>
        <p class="mt-2 text-emerald-200">
          {{ ui.footerPromo }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { CheckIcon } from '@heroicons/vue/24/solid'

type TabKey = 'monthly' | 'quarterly' | 'yearly'

type Plan = {
  id: string
  name: string
  description: string
  price: string
  period: string
  total?: string
  badge?: string
  features: string[]
  cta: string
  highlight?: boolean
}

const ui = {
  headerPill: 'ارتقای سریع',
  pageTitle: 'خرید و ارتقای بسته',
  subtitle: 'سه پلن متفاوت برای تیم ها و حرفه ای ها. پرداخت مورد نظر را انتخاب کنید و بلافاصله به ابزارهای هوش مصنوعی دسترسی پیدا کنید.',
  popularBadge: 'پرطرفدار',
  footerNote: 'تخفیف ها هنگام پرداخت به صورت خودکار اعمال می شود و نیازی به تماس نیست.',
  footerPromo: 'کد تخفیف دارید؟ آن را در مرحله پرداخت وارد کنید.',
}

const sharedFeatures = {
  plus: [
    'اکانت اختصاصی با فعال سازی فوری',
    'دسترسی روزانه به ChatGPT Plus و Claude',
    'گفتگوهای متنی و صوتی بدون محدودیت',
    'پشتیبانی سریع داخل برنامه',
    'مناسب برای تولیدکنندگان محتوا',
  ],
  pro: [
    'مدل های GPT-5 Pro و Claude 3 در اختیار شما',
    'تولید تصویر با Flux Pro و Midjourney',
    'تحلیل داده پیشرفته و خروجی ساختاریافته',
    'ساخت ورک فلو های خودکار نامحدود',
    'پشتیبانی وژه با پاسخ دهی سریع',
  ],
  team: [
    'کنسول مدیریت اعضا و سطح دسترسی',
    'اشتراک فایل و حافظه مشترک تا 5 ترابایت',
    'هماهنگی با Slack و Notion',
    'پشتیبانی مدیر حساب اختصاصی',
    'گزارش های دوره ای عملکرد تیم',
  ],
} as const

const tabs: Array<{ id: TabKey, label: string, description: string }> = [
  {
    id: 'monthly',
    label: 'بسته ماهانه',
    description: 'پرداخت ماهانه برای انعطاف بیشتر و شروع سریع.',
  },
  {
    id: 'quarterly',
    label: 'بسته 90 روزه',
    description: 'سه ماه دسترسی پایدار با تخفیف ویژه برای تیم های متمرکز.',
  },
  {
    id: 'yearly',
    label: 'بسته سالانه',
    description: 'صرفه جویی حداکثری با تسویه سالانه و امکانات سازمانی کامل.',
  },
]

const plansByTab: Record<TabKey, Plan[]> = {
  monthly: [
    {
      id: 'plus',
      name: 'پلاس',
      description: 'انتخاب سریع برای شروع هوشمند',
      price: '299 هزار تومان',
      period: 'پرداخت ماهانه',
      features: [...sharedFeatures.plus],
      cta: 'خرید بسته پلاس',
    },
    {
      id: 'pro',
      name: 'پرو',
      description: 'برای متخصصان و تیم های محصول',
      price: '649 هزار تومان',
      period: 'پرداخت ماهانه با 30 درصد تخفیف',
      badge: 'دسترسی کامل به مدل های وژه',
      features: [...sharedFeatures.pro],
      cta: 'خرید بسته پرو',
      highlight: true,
    },
    {
      id: 'team',
      name: 'تیم',
      description: 'مناسب سازمان های رو به رشد',
      price: '899 هزار تومان',
      period: 'هر نفر در ماه',
      total: 'حداقل 3 کاربر فعال',
      features: [...sharedFeatures.team],
      cta: 'مشاهده توضیحات تیم',
    },
  ],
  quarterly: [
    {
      id: 'plus',
      name: 'پلاس',
      description: 'پایداری سه ماهه با هزینه کمتر',
      price: '239 هزار تومان',
      period: 'ماهانه با پرداخت 90 روزه',
      total: 'مجموع سه ماه: 717 هزار تومان',
      badge: '20 درصد تخفیف نسبت به ماهانه',
      features: [...sharedFeatures.plus],
      cta: 'خرید بسته پلاس',
    },
    {
      id: 'pro',
      name: 'پرو',
      description: 'ترکیب تخصص و تخفیف در سه ماه',
      price: '499 هزار تومان',
      period: 'ماهانه با پرداخت 90 روزه',
      total: 'مجموع سه ماه: 1497 هزار تومان',
      badge: '35 درصد تخفیف نسبت به ماهانه',
      features: [...sharedFeatures.pro],
      cta: 'خرید بسته پرو',
      highlight: true,
    },
    {
      id: 'team',
      name: 'تیم',
      description: 'هماهنگی کامل برای اسپرینت ها',
      price: '699 هزار تومان',
      period: 'هر نفر با پرداخت 90 روزه',
      total: 'پرداخت کلی: 2097 هزار تومان',
      features: [...sharedFeatures.team],
      cta: 'مشاهده توضیحات تیم',
    },
  ],
  yearly: [
    {
      id: 'plus',
      name: 'پلاس',
      description: 'صرفه جویی برای استفاده درازمدت',
      price: '199 هزار تومان',
      period: 'ماهانه با پرداخت سالانه',
      total: 'مجموع کلی: 2388 هزار تومان',
      badge: '40 درصد صرفه جویی سالانه',
      features: [...sharedFeatures.plus],
      cta: 'خرید بسته پلاس',
    },
    {
      id: 'pro',
      name: 'پرو',
      description: 'برترین انتخاب برای متخصصان',
      price: '449 هزار تومان',
      period: 'ماهانه با پرداخت سالانه',
      total: 'مجموع کلی: 5388 هزار تومان',
      badge: 'بهترین مبلغ برای رشد پیشرفته',
      features: [...sharedFeatures.pro],
      cta: 'خرید بسته پرو',
      highlight: true,
    },
    {
      id: 'team',
      name: 'تیم',
      description: 'پوشش کامل سازمانی با هزینه کمتر',
      price: '599 هزار تومان',
      period: 'هر نفر با پرداخت سالانه',
      total: 'مجموع سالانه: 7188 هزار تومان',
      badge: 'پشتیبانی سازمانی با SLA',
      features: [...sharedFeatures.team],
      cta: 'مشاهده توضیحات تیم',
    },
  ],
}

const activeTab = ref<TabKey>('monthly')

const activeTabData = computed(() => tabs.find(tab => tab.id === activeTab.value) ?? tabs[0])
const displayedPlans = computed(() => plansByTab[activeTab.value])
</script>
