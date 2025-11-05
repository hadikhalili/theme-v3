export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = parseInt((query.perPage as string) || '5', 10)
  const page = parseInt((query.page as string) || '1', 10)
  const filter = (query.filter as string) || ''

  if (perPage >= 50) {
    // Create an artificial delay
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  const data = await getDemoData()

  return {
    total: data.length,
    data: filterDemoData(data, filter, page, perPage),
  }
})

function filterDemoData(
  data: any[],
  filter: string,
  page: number,
  perPage: number,
) {
  const offset = (page - 1) * perPage
  if (!filter) {
    return data.slice(offset, offset + perPage)
  }
  const filterRe = new RegExp(filter, 'i')
  return data
    .filter((item) => {
      return [item.issuer, item.date, item.status].some(item =>
        item.match(filterRe),
      )
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      date: '۲۶ خرداد ۱۴۰۲',
      issuer: 'شیرینی‌جات ویکتوریا',
      type: 'out',
      amount: 52.14,
      account: '**** 7623',
      status: 'در حال پردازش',
      method: 'کارت اعتباری',
    },
    {
      id: 2,
      date: '۲۵ خرداد ۱۴۰۲',
      issuer: 'مورگان سیس، مسئولیت محدود',
      type: 'out',
      amount: 428.47,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
    {
      id: 3,
      date: '۲۳ خرداد ۱۴۰۲',
      issuer: 'وال‌مارت',
      type: 'out',
      amount: 112.23,
      account: '**** 7623',
      status: 'در حال تکمیل',
      method: 'چک',
    },
    {
      id: 4,
      date: '۲۱ خرداد ۱۴۰۲',
      issuer: 'جان رولند',
      type: 'out',
      amount: 950,
      account: '**** 7623',
      status: 'رد شده',
      method: 'انتقال',
    },
    {
      id: 5,
      date: '۱۸ خرداد ۱۴۰۲',
      issuer: 'LLC هری',
      type: 'out',
      amount: 24.49,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
    {
      id: 6,
      date: '۱۸ خرداد ۱۴۰۲',
      issuer: 'فروشگاه بازی‌ها',
      type: 'out',
      amount: 89.49,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
    {
      id: 7,
      date: '۱۷ خرداد ۱۴۰۲',
      issuer: 'وال‌مارت',
      type: 'out',
      amount: 143.19,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'چک',
    },
    {
      id: 8,
      date: '۱۴ خرداد ۱۴۰۲',
      issuer: 'خواربار پارک',
      type: 'out',
      amount: 31.22,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
    {
      id: 9,
      date: '۱۴ خرداد ۱۴۰۲',
      issuer: 'جین کالووی',
      type: 'in',
      amount: 300,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'انتقال',
    },
    {
      id: 10,
      date: '۱۳ خرداد ۱۴۰۲',
      issuer: 'هارولد برنر',
      type: 'in',
      amount: 575,
      account: '**** 3283',
      status: 'تکمیل شده',
      method: 'انتقال',
    },
    {
      id: 11,
      date: '۱۲ خرداد ۱۴۰۲',
      issuer: 'اربن، مسئولیت محدود',
      type: 'out',
      amount: 79.99,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
    {
      id: 12,
      date: '۱۲ خرداد ۱۴۰۲',
      issuer: 'وال‌مارت',
      type: 'out',
      amount: 84.67,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'چک',
    },
    {
      id: 13,
      date: '۱۱ خرداد ۱۴۰۲',
      issuer: 'آرتکام، شرکت',
      type: 'in',
      amount: 5272.99,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'انتقال',
    },
    {
      id: 14,
      date: '۱۱ خرداد ۱۴۰۲',
      issuer: 'وام‌های HS',
      type: 'out',
      amount: 3275.27,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'bank',
    },
    {
      id: 15,
      date: '۱۲ خرداد ۱۴۰۲',
      issuer: 'رستوران سان مارینا',
      type: 'out',
      amount: 279.44,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
    {
      id: 16,
      date: '۱۰ خرداد ۱۴۰۲',
      issuer: 'پارک توئیستر',
      type: 'out',
      amount: 120,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
    {
      id: 17,
      date: '۱۰ خرداد ۱۴۰۲',
      issuer: 'پیتزای جیانی',
      type: 'out',
      amount: 40.22,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
    {
      id: 18,
      date: '۹ خرداد ۱۴۰۲',
      issuer: 'رستوران سان مارینا',
      type: 'out',
      amount: 110.31,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
    {
      id: 19,
      date: '۷ خرداد ۱۴۰۲',
      issuer: 'تاکو بل',
      type: 'out',
      amount: 31.19,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
    {
      id: 20,
      date: '۵ خرداد ۱۴۰۲',
      issuer: 'خطوط هوایی آمریکایی',
      type: 'out',
      amount: 489.99,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
    {
      id: 21,
      date: '۵ خرداد ۱۴۰۲',
      issuer: 'خواربار پارک',
      type: 'out',
      amount: 45.52,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
    {
      id: 22,
      date: '۳ خرداد ۱۴۰۲',
      issuer: 'پیتزای جیانی',
      type: 'out',
      amount: 61.17,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
    {
      id: 23,
      date: '۳ خرداد ۱۴۰۲',
      issuer: 'اربن، مسئولیت محدود',
      type: 'out',
      amount: 156.29,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
    {
      id: 24,
      date: '۲ خرداد ۱۴۰۲',
      issuer: 'فروشگاه نینتندو',
      type: 'out',
      amount: 265.99,
      account: '**** 7623',
      status: 'تکمیل شده',
      method: 'کارت اعتباری',
    },
  ])
}
