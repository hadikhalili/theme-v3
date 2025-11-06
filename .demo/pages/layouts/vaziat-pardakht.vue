<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <section class="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-16" dir="rtl">
      <div class="w-full max-w-3xl rounded-[3rem] border border-white/5 bg-slate-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.5)] backdrop-blur">
        <header class="flex flex-col items-center gap-3 px-10 pb-10 pt-14 text-center">
          <component
            :is="statusMeta.icon"
            class="size-20 rounded-full border border-white/10 p-5"
            :class="statusMeta.iconBg"
          />
          <span class="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            {{ statusMeta.pill }}
          </span>
          <h1 class="text-3xl font-bold text-white">
            {{ statusMeta.title }}
          </h1>
          <p class="max-w-xl text-sm text-slate-400">
            {{ statusMeta.subtitle }}
          </p>
        </header>

        <div class="border-t border-white/10" />

        <div class="space-y-6 p-10 text-sm text-slate-300">
          <p class="leading-7 tracking-wide">
            {{ statusMeta.description }}
          </p>

          <div
            class="flex flex-wrap items-center gap-4 rounded-2xl bg-slate-900/70 p-5 text-xs text-slate-300 shadow-inner shadow-black/40"
          >
            <div class="flex items-start gap-3">
              <ClockIcon class="size-9 rounded-full bg-white/5 p-2 text-yellow-300" />
              <div class="space-y-1 text-left text-slate-300">
                <p class="font-semibold text-white">
                  زمان بررسی دوباره
                </p>
                <p>اگر وضعیت نامعلوم بود چند دقیقه صبر کنید و دوباره امتحان کنید.</p>
              </div>
            </div>
            <div class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-slate-200">
              <InformationCircleIcon class="size-4 text-yellow-200" />
              <span>در صورت تأیید پرداخت، وضعیت به‌طور خودکار به‌روزرسانی می‌شود.</span>
            </div>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button
              class="flex-1 rounded-2xl bg-gradient-to-l from-slate-200 via-white to-slate-100 px-6 py-3 text-center text-sm font-semibold text-slate-900 shadow shadow-white/40 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
              :disabled="paymentStatus === 'pending' && countdown > 0"
              @click="handlePrimaryAction"
            >
              {{ primaryActionLabel }}
            </button>
            <button
              class="flex-1 rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40"
              @click="handleSecondaryAction"
            >
              {{ statusMeta.secondaryCta }}
            </button>
          </div>
        </div>

        <footer class="rounded-b-[3rem] border-t border-white/10 bg-black/40 px-10 py-6 text-xs text-slate-500">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
            <div class="flex items-center gap-2 text-slate-400">
              <ArrowsRightLeftIcon class="size-4" />
              <span>نمای کلی وضعیت پرداخت</span>
            </div>
            <div class="flex flex-wrap items-center gap-2 text-xs">
              <div
                v-for="item in statusTimeline"
                :key="item.key"
                :class="timelineItemClass(item.key)"
                aria-hidden="true"
              >
                <component
                  :is="item.icon"
                  class="size-4"
                  :class="item.iconColor"
                />
                <span>{{ item.label }}</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import {
  CheckBadgeIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ArrowsRightLeftIcon,
  XCircleIcon,
} from '@heroicons/vue/24/solid'

type StatusKey = 'pending' | 'success' | 'failed'

const props = defineProps<{ initialStatus?: StatusKey }>()

const paymentStatus = ref<StatusKey>(props.initialStatus ?? 'pending')
const countdown = ref(60)
let timerId: ReturnType<typeof setInterval> | null = null

const statuses: Record<StatusKey, {
  title: string
  subtitle: string
  description: string
  primaryCta: string
  secondaryCta: string
  pill: string
  icon: typeof CheckBadgeIcon
  iconBg: string
}> = {
  pending: {
    title: 'وضعیت پرداخت نامعلوم',
    subtitle: 'وضعیت پرداخت هنوز مشخص نشده است. لطفاً چند دقیقه دیگر دوباره بررسی کنید.',
    description:
      'تأیید پرداخت ممکن است تا پنج دقیقه زمان ببرد. می‌توانید وضعیت پرداخت را از مسیر تنظیمات ← وضعیت بسته مشاهده کنید. در صورت کسر مبلغ، طی ۷۲ ساعت مبلغ به حساب شما بازگردانده می‌شود.',
    primaryCta: 'بررسی مجدد',
    secondaryCta: 'بازگشت به صفحه‌ی کاربری',
    pill: 'در انتظار تأیید',
    icon: ExclamationTriangleIcon,
    iconBg: 'bg-gradient-to-br from-yellow-500/90 to-amber-500/80 text-yellow-50',
  },
  success: {
    title: 'پرداخت با موفقیت انجام شد',
    subtitle: 'پرداخت شما ثبت شد و دسترسی کامل فعال گردید. از لحظه‌ی فعلی می‌توانید از بسته جدید استفاده کنید.',
    description:
      'تمام قابلیت‌های بسته همین حالا برای شما فعال است. رسید پرداخت به ایمیل ثبت‌شده ارسال شد. در صورت نیاز به پشتیبانی می‌توانید از طریق تیکت درون‌برنامه‌ای با ما در ارتباط باشید.',
    primaryCta: 'ورود به داشبورد',
    secondaryCta: 'دانلود رسید پرداخت',
    pill: 'پرداخت موفق',
    icon: CheckBadgeIcon,
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white',
  },
  failed: {
    title: 'پرداخت ناموفق بود',
    subtitle: 'پرداخت انجام نشد. لطفاً کارت بانکی یا موجودی خود را بررسی کرده و دوباره تلاش کنید.',
    description:
      'بانک مبلغی را کسر نکرده یا تراکنش به دلیل خطای امنیتی رد شده است. اگر مبلغی از حساب شما کم شده باشد، طی ۷۲ ساعت آینده به صورت خودکار باز می‌گردد.',
    primaryCta: 'پرداخت دوباره',
    secondaryCta: 'بازگشت به صفحه روش‌های پرداخت',
    pill: 'پرداخت ناموفق',
    icon: XCircleIcon,
    iconBg: 'bg-gradient-to-br from-rose-500 to-pink-500 text-white',
  },
}

const statusTimeline = [
  { key: 'pending' as StatusKey, label: 'نامعلوم', icon: ExclamationTriangleIcon, iconColor: 'text-yellow-300' },
  { key: 'success' as StatusKey, label: 'موفق', icon: CheckBadgeIcon, iconColor: 'text-emerald-300' },
  { key: 'failed' as StatusKey, label: 'ناموفق', icon: XCircleIcon, iconColor: 'text-rose-300' },
]

const statusMeta = computed(() => statuses[paymentStatus.value])

const primaryActionLabel = computed(() => {
  if (paymentStatus.value === 'pending') {
    const seconds = countdown.value.toString().padStart(2, '0')
    return `بررسی مجدد (در ${seconds} ثانیه دیگر)`
  }
  return statuses[paymentStatus.value].primaryCta
})

const timelineItemClass = (key: StatusKey) =>
  key === paymentStatus.value
    ? 'flex items-center gap-2 rounded-full border-transparent bg-white text-slate-900 shadow shadow-white/30 px-4 py-2'
    : 'flex items-center gap-2 rounded-full border border-slate-500/20 bg-transparent px-4 py-2 text-slate-300'

const stopCountdown = () => {
  if (timerId !== null) {
    clearInterval(timerId)
    timerId = null
  }
}

const startCountdown = () => {
  if (paymentStatus.value !== 'pending') return
  stopCountdown()
  countdown.value = 60
  timerId = setInterval(() => {
    countdown.value -= 1
    if (countdown.value <= 0) {
      stopCountdown()
      handleStatusRefresh()
    }
  }, 1000)
}

const checkPaymentStatus = async (): Promise<StatusKey | null> => {
  try {
    const response = await fetch('/api/payment-status', { method: 'GET' })
    if (!response.ok) return null
    const data = (await response.json()) as { status?: StatusKey }
    if (data.status === 'success') return 'success'
    if (data.status === 'failed') return 'failed'
    return null
  }
  catch (error) {
    console.error('خطا در بررسی وضعیت پرداخت', error)
    return null
  }
}

const handleStatusRefresh = async () => {
  const newStatus = await checkPaymentStatus()
  if (newStatus === 'success') {
    paymentStatus.value = 'success'
    stopCountdown()
    return
  }
  if (newStatus === 'failed') {
    paymentStatus.value = 'failed'
    stopCountdown()
    return
  }
  if (paymentStatus.value === 'pending') {
    startCountdown()
  }
}

const handlePrimaryAction = async () => {
  if (paymentStatus.value === 'pending' && countdown.value === 0) {
    await handleStatusRefresh()
  }
  // TODO: برای وضعیت‌های دیگر، اقدام موردنیاز (مانند مسیریابی) را پیاده‌سازی کنید.
}

const handleSecondaryAction = () => {
  // TODO: اتصال به رفتار ثانویه (مثلاً بازگشت یا دانلود رسید) در اینجا انجام شود.
}

onMounted(() => {
  if (paymentStatus.value === 'pending') {
    startCountdown()
  }
  else {
    countdown.value = 0
  }
})

onBeforeUnmount(() => {
  stopCountdown()
})

watch(paymentStatus, (status) => {
  if (status !== 'pending') {
    stopCountdown()
    countdown.value = 0
  }
})
</script>
