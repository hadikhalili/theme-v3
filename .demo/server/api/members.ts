export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = parseInt((query.perPage as string) || '5', 10)
  const page = parseInt((query.page as string) || '1', 10)
  const filter = (query.filter as string) || ''
  const slug = (query.slug as string) || ''

  if (perPage >= 200) {
    // Create an artificial delay
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  const data = await getDemoData()
  const member = data.find(item => item.slug === slug)

  return {
    total: data.length,
    data: filterDemoData(data, filter, page, perPage),
    member,
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
      return [item.categories, item.title].some(item => item.match(filterRe))
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      slug: 'maya-rosselini',
      name: 'مایا روسلینی',
      email: 'mayar@eltheme.ir',
      picture: '/img/avatars/2.svg',
      role: {
        label: 'مدیر',
        details: [
          {
            label: 'حساب‌های بانکی',
            access: 'دسترسی کامل',
            permissions: [
              {
                label: 'دسترسی به تمام حساب‌ها',
                status: true,
              },
              {
                label: 'بارگیری صورت‌حساب‌ها',
                status: true,
              },
              {
                label: 'انتقال پول',
                status: true,
              },
            ],
          },
          {
            label: 'مدیریت تیم',
            access: 'دسترسی کامل',
            permissions: [
              {
                label:
                  'اعضا را اضافه/حذف کنید، مجوزهای آن‌ها را تغییر دهید و کارت‌هایشان را مدیریت کنید.',
                status: true,
              },
              {
                label:
                  'مجوزهای دیگر مدیران را تغییر دهید یا بدون اجازه آن‌ها را حذف کنید.',
                status: true,
              },
            ],
          },
        ],
      },
      cards: [
        {
          id: 1,
          creationDate: '۱۱ دی ۱۴۰۱',
          name: 'کارت کندرا',
          account: '**** 7623',
          cardInfo: {
            name: 'کندرا ویلسون',
            type: 'physical',
            brand: 'mastercard',
            number: '•••• 4479',
            expiryYear: '••',
            expiryMonth: '••',
            cvc: '•••',
            status: 'فعال',
          },
          funds: {
            posted: 142.87,
            pending: 0,
            unavailable: 249.99,
            available: 5423.12,
          },
          monthSpent: 3642.27,
          daySpent: 177.34,
          dayWithdraw: 0,
          limits: {
            spend: 250,
            withdraw: 500,
          },
          address: [
            '۱۴۸، خیابان ویکتوریاس',
            'سوئیت D23، طبقه ۳',
            'نیویورک، NY',
          ],
        },
        {
          id: 2,
          creationDate: '۱۱ دی ۱۴۰۱',
          name: 'کارت مجازی کندرا',
          account: '**** 7218',
          cardInfo: {
            name: 'کندرا ویلسون',
            type: 'مجازی',
            brand: 'mastercard',
            number: '•••• 4268',
            expiryYear: '••',
            expiryMonth: '••',
            cvc: '•••',
            status: 'فعال',
          },
          funds: {
            posted: 123.89,
            pending: 12.45,
            unavailable: 0,
            available: 23893.12,
          },
          monthSpent: 4371.87,
          daySpent: 623.67,
          dayWithdraw: 600,
          limits: {
            spend: 2000,
            withdraw: 3000,
          },
          address: [
            '۱۴۸، خیابان ویکتوریاس',
            'سوئیت D23، طبقه ۳',
            'نیویورک، NY',
          ],
        },
      ],
    },
    {
      id: 2,
      slug: 'john-baxter',
      name: 'جان باکستر',
      email: 'johnbaxter@eltheme.ir',
      picture: '/img/avatars/8.svg',
      role: {
        label: 'مدیر',
        details: [
          {
            label: 'حساب‌های بانکی',
            access: 'دسترسی کامل',
            permissions: [
              {
                label: 'دسترسی به تمام حساب‌ها',
                status: true,
              },
              {
                label: 'بارگیری صورت‌حساب‌ها',
                status: true,
              },
              {
                label: 'انتقال پول',
                status: true,
              },
            ],
          },
          {
            label: 'مدیریت تیم',
            access: 'دسترسی کامل',
            permissions: [
              {
                label:
                  'اعضا را اضافه/حذف کنید، مجوزهای آن‌ها را تغییر دهید و کارت‌هایشان را مدیریت کنید.',
                status: true,
              },
              {
                label:
                  'مجوزهای دیگر مدیران را تغییر دهید یا بدون اجازه آن‌ها را حذف کنید.',
                status: true,
              },
            ],
          },
        ],
      },
      cards: [
        {
          id: 1,
          creationDate: '۱۱ دی ۱۴۰۱',
          name: 'کارت جان',
          account: '**** 7623',
          cardInfo: {
            name: 'کندرا ویلسون',
            type: 'physical',
            brand: 'mastercard',
            number: '•••• 2671',
            expiryYear: '••',
            expiryMonth: '••',
            cvc: '•••',
            status: 'فعال',
          },
          funds: {
            posted: 142.87,
            pending: 0,
            unavailable: 249.99,
            available: 5423.12,
          },
          monthSpent: 3642.27,
          daySpent: 177.34,
          dayWithdraw: 0,
          limits: {
            spend: 250,
            withdraw: 500,
          },
          address: [
            '۱۴۸، خیابان ویکتوریاس',
            'سوئیت D23، طبقه ۳',
            'نیویورک، NY',
          ],
        },
      ],
    },
    {
      id: 3,
      slug: 'jennifer-wilson',
      name: 'جنیفر ویلسون',
      email: 'jennwilson@eltheme.ir',
      picture: '/img/avatars/12.svg',
      role: {
        label: 'حسابدار',
        details: [
          {
            label: 'حساب‌های بانکی',
            access: 'دسترسی جزئی',
            permissions: [
              {
                label: 'دسترسی به تمام حساب‌ها',
                status: true,
              },
              {
                label: 'بارگیری صورت‌حساب‌ها',
                status: true,
              },
              {
                label: 'انتقال پول',
                status: false,
              },
            ],
          },
          {
            label: 'مدیریت تیم',
            access: 'دسترسی ندارد',
            permissions: [
              {
                label:
                  'اعضا را اضافه/حذف کنید، مجوزهای آن‌ها را تغییر دهید و کارت‌هایشان را مدیریت کنید.',
                status: false,
              },
              {
                label:
                  'مجوزهای دیگر مدیران را تغییر دهید یا بدون اجازه آن‌ها را حذف کنید.',
                status: false,
              },
            ],
          },
        ],
      },
      cards: [
        {
          id: 1,
          creationDate: '۱۱ دی ۱۴۰۱',
          name: 'کارت جنیفر',
          account: '**** 7623',
          cardInfo: {
            name: 'جنیفر ویلسون',
            type: 'physical',
            brand: 'mastercard',
            number: '•••• 2671',
            expiryYear: '••',
            expiryMonth: '••',
            cvc: '•••',
            status: 'فعال',
          },
          funds: {
            posted: 142.87,
            pending: 0,
            unavailable: 249.99,
            available: 5423.12,
          },
          monthSpent: 3642.27,
          daySpent: 177.34,
          dayWithdraw: 0,
          limits: {
            spend: 250,
            withdraw: 500,
          },
          address: [
            '۱۴۸، خیابان ویکتوریاس',
            'سوئیت D23، طبقه ۳',
            'نیویورک، NY',
          ],
        },
      ],
    },
    {
      id: 4,
      slug: 'amber-wilson',
      name: 'امبر ویلسون',
      email: 'amberwilson@eltheme.ir',
      picture: '/img/avatars/24.svg',
      role: {
        label: 'فقط کارت',
        details: [
          {
            label: 'حساب‌های بانکی',
            access: 'دسترسی ندارد',
            permissions: [
              {
                label: 'دسترسی به تمام حساب‌ها',
                status: false,
              },
              {
                label: 'بارگیری صورت‌حساب‌ها',
                status: false,
              },
              {
                label: 'انتقال پول',
                status: false,
              },
            ],
          },
          {
            label: 'مدیریت تیم',
            access: 'دسترسی ندارد',
            permissions: [
              {
                label:
                  'اعضا را اضافه/حذف کنید، مجوزهای آن‌ها را تغییر دهید و کارت‌هایشان را مدیریت کنید.',
                status: false,
              },
              {
                label:
                  'مجوزهای دیگر مدیران را تغییر دهید یا بدون اجازه آن‌ها را حذف کنید.',
                status: false,
              },
            ],
          },
        ],
      },
      cards: [
        {
          id: 1,
          creationDate: '۱۱ دی ۱۴۰۱',
          name: 'کارت امبر',
          account: '**** 7623',
          cardInfo: {
            name: 'امبر ویلسون',
            type: 'physical',
            brand: 'mastercard',
            number: '•••• 6982',
            expiryYear: '••',
            expiryMonth: '••',
            cvc: '•••',
            status: 'فعال',
          },
          funds: {
            posted: 142.87,
            pending: 0,
            unavailable: 249.99,
            available: 5423.12,
          },
          monthSpent: 3642.27,
          daySpent: 177.34,
          dayWithdraw: 0,
          limits: {
            spend: 250,
            withdraw: 500,
          },
          address: [
            '۱۴۸، خیابان ویکتوریاس',
            'سوئیت D23، طبقه ۳',
            'نیویورک، NY',
          ],
        },
      ],
    },
    {
      id: 5,
      slug: 'kaleb-wilson',
      name: 'کالب ویلسون',
      email: 'kalebwilson@eltheme.ir',
      picture: '/img/avatars/3.svg',
      role: {
        label: 'سفارشی',
        details: [
          {
            label: 'حساب‌های بانکی',
            access: 'دسترسی ندارد',
            permissions: [
              {
                label: 'دسترسی به تمام حساب‌ها',
                status: true,
              },
              {
                label: 'بارگیری صورت‌حساب‌ها',
                status: true,
              },
              {
                label: 'انتقال پول',
                status: false,
              },
            ],
          },
          {
            label: 'مدیریت تیم',
            access: 'دسترسی ندارد',
            permissions: [
              {
                label:
                  'اعضا را اضافه/حذف کنید، مجوزهای آن‌ها را تغییر دهید و کارت‌هایشان را مدیریت کنید.',
                status: false,
              },
              {
                label:
                  'مجوزهای دیگر مدیران را تغییر دهید یا بدون اجازه آن‌ها را حذف کنید.',
                status: false,
              },
            ],
          },
        ],
      },
      cards: [
        {
          id: 1,
          creationDate: '۱۱ دی ۱۴۰۱',
          name: 'کارت کالب',
          account: '**** 7623',
          cardInfo: {
            name: 'کالب ویلسون',
            type: 'physical',
            brand: 'mastercard',
            number: '•••• 3112',
            expiryYear: '••',
            expiryMonth: '••',
            cvc: '•••',
            status: 'فعال',
          },
          funds: {
            posted: 142.87,
            pending: 0,
            unavailable: 249.99,
            available: 5423.12,
          },
          monthSpent: 3642.27,
          daySpent: 177.34,
          dayWithdraw: 0,
          limits: {
            spend: 250,
            withdraw: 500,
          },
          address: [
            '۱۴۸، خیابان ویکتوریاس',
            'سوئیت D23، طبقه ۳',
            'نیویورک، NY',
          ],
        },
      ],
    },
  ])
}
