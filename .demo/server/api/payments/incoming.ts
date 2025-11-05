export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = parseInt((query.perPage as string) || '5', 10)
  const page = parseInt((query.page as string) || '1', 10)
  const filter = (query.filter as string) || ''

  if (perPage >= 50) {
    // Create an artificial delay
    await new Promise(resolve => setTimeout(resolve, 1000))
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
      return [item.recipient.name, item.DemoToolbarLanguage].some(item =>
        item.match(filterRe),
      )
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      date: '۱۸ خرداد ۱۴۰۲',
      amount: 387.56,
      status: 'ارسال شد',
      account: '**** 7623',
      recipient: {
        name: 'ملانی گهلر',
        photo: '/img/avatars/25.svg',
      },
    },
    {
      id: 2,
      date: '۱۳ خرداد ۱۴۰۲',
      amount: 875,
      status: 'باز شده',
      account: '**** 7623',
      recipient: {
        name: 'هرمان مایر',
        photo: '/img/avatars/16.svg',
      },
    },
    {
      id: 3,
      date: '۲۶ خرداد ۱۴۰۲',
      amount: 185,
      status: 'در حال تکمیل',
      account: '**** 7623',
      recipient: {
        name: 'کلاریسا میلر',
        photo: '/img/avatars/5.svg',
      },
    },
    {
      id: 4,
      date: '۸ خرداد ۱۴۰۲',
      amount: 580,
      status: 'تکمیل شده',
      account: '**** 7623',
      recipient: {
        name: 'کلارک اسمیت',
        photo: '/img/avatars/3.svg',
      },
    },
    {
      id: 5,
      date: '۶ خرداد ۱۴۰۲',
      amount: 1240,
      status: 'تکمیل شده',
      account: '**** 7623',
      recipient: {
        name: 'جان باکستر',
        photo: '/img/avatars/8.svg',
      },
    },
    {
      id: 6,
      date: '۳ خرداد ۱۴۰۲',
      amount: 625,
      status: 'تکمیل شده',
      account: '**** 7623',
      recipient: {
        name: 'هاوارد استریم',
        photo: '/img/avatars/20.svg',
      },
    },
  ])
}
