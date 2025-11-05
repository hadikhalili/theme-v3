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
      date: '۲۶ خرداد ۱۴۰۲',
      amount: 387.56,
      status: 'scheduled',
      recipient: {
        name: 'ایر‌بی‌ان‌بی',
        logo: '/img/logos/companies/airbnb.svg',
      },
    },
    {
      id: 2,
      date: '۲۵ خرداد ۱۴۰۲',
      amount: 125.99,
      status: 'scheduled',
      recipient: {
        name: 'آتلسیان',
        logo: '/img/logos/companies/atlassian.svg',
      },
    },
    {
      id: 3,
      date: '۳ خرداد ۱۴۰۲',
      amount: 52.14,
      status: 'scheduled',
      recipient: {
        name: 'آمازون',
        logo: '/img/logos/companies/amazon.svg',
      },
    },
    {
      id: 4,
      date: '۳ خرداد ۱۴۰۲',
      amount: 39.99,
      status: 'scheduled',
      recipient: {
        name: 'AT&T',
        logo: '/img/logos/companies/att.svg',
      },
    },
  ])
}
