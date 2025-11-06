<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white">
    <div class="w-full max-w-4xl space-y-8">
      <!-- Header -->
      <div class="text-center">
        <h1 class="text-4xl font-bold text-purple-400">خورد و ارتقا به پریمیوم</h1>
        <p class="mt-2 text-gray-400">انتخاب پلن مناسب برای دسترسی به ویژگی‌های پیشرفته</p>
      </div>

      <!-- Tabs -->
      <div class="flex justify-center space-x-4 rtl:space-x-reverse">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="[
            'rounded-full px-6 py-3 font-semibold transition-colors duration-300',
            activeTab === tab.id
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          ]"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab Content -->
      <div class="rounded-2xl border border-purple-600/30 bg-gray-800 p-6 shadow-lg">
        <div v-if="activeTab === 'monthly'">
          <div class="mb-6 text-center">
            <h2 class="text-2xl font-semibold text-purple-300">ماهانه</h2>
            <p class="mt-2 text-3xl font-bold">۴۹۹ تومان</p>
            <p class="text-sm text-gray-500">/ ماه</p>
          </div>
          <ul class="mb-8 space-y-4">
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              دسترسی به مدل‌های پیشرفته هوش مصنوعی
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              مدل‌های تصویری و تولید تصویر
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              ابزارهای تحقیق عمیق (Deep Research)
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              مدل‌های ChatGPT 5 Plus, GPT-5, Grok 4, Gemini 2.5, Claude 4, o4-mini g Sonnet
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              تولید تصاویر پیشرفته با Flux Pro, Imagen 4, Midjourney
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              مدل‌های ویدیو و صدا
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              اولویت در صف درخواست‌ها
            </li>
          </ul>
          <button
            class="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition-colors duration-300 hover:bg-purple-700"
          >
            ارتقا به پریمیوم
          </button>
        </div>

        <div v-if="activeTab === 'quarterly'">
          <div class="mb-6 text-center">
            <h2 class="text-2xl font-semibold text-purple-300">۹۰ روزه</h2>
            <p class="mt-2 text-3xl font-bold">۱,۲۹۹ تومان</p>
            <p class="text-sm text-gray-500">/ ۹۰ روز</p>
          </div>
          <ul class="mb-8 space-y-4">
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              همه ویژگی‌های پلن ماهانه
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              صرفه‌جویی ۲۰% نسبت به ماهانه
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              دسترسی به مدل‌های پیشرفته هوش مصنوعی
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              مدل‌های تصویری و تولید تصویر
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              ابزارهای تحقیق عمیق (Deep Research)
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              مدل‌های ChatGPT 5 Plus, GPT-5, Grok 4, Gemini 2.5, Claude 4, o4-mini g Sonnet
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              تولید تصاویر پیشرفته با Flux Pro, Imagen 4, Midjourney
            </li>
          </ul>
          <button
            class="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition-colors duration-300 hover:bg-purple-700"
          >
            ارتقا به پریمیوم
          </button>
        </div>

        <div v-if="activeTab === 'yearly'">
          <div class="mb-6 text-center">
            <h2 class="text-2xl font-semibold text-purple-300">سالانه</h2>
            <p class="mt-2 text-3xl font-bold">۴,۹۹۹ تومان</p>
            <p class="text-sm text-gray-500">/ سال</p>
          </div>
          <ul class="mb-8 space-y-4">
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              همه ویژگی‌های پلن ۹۰ روزه
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              صرفه‌جویی ۳۰% نسبت به ماهانه
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              دسترسی به مدل‌های پیشرفته هوش مصنوعی
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              مدل‌های تصویری و تولید تصویر
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              ابزارهای تحقیق عمیق (Deep Research)
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              مدل‌های ChatGPT 5 Plus, GPT-5, Grok 4, Gemini 2.5, Claude 4, o4-mini g Sonnet
            </li>
            <li class="flex items-center text-gray-300">
              <CheckIcon class="mr-2 size-5 text-purple-400" />
              تولید تصاویر پیشرفته با Flux Pro, Imagen 4, Midjourney
            </li>
          </ul>
          <button
            class="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition-colors duration-300 hover:bg-purple-700"
          >
            ارتقا به پریمیوم
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckIcon } from '@heroicons/vue/24/solid'

const tabs = [
  { id: 'monthly', label: 'ماهانه' },
  { id: 'quarterly', label: '۹۰ روزه' },
  { id: 'yearly', label: 'سالانه' },
]

const activeTab = ref('monthly')
</script>

<style>
/* Assuming Tailwind is configured, no additional styles needed */
</style>
