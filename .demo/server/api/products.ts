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
  const offset = (page - 1) * perPage
  const filterRe = new RegExp(filter, 'i')

  return {
    total: data.length,
    data: !filter
      ? data.slice(offset, offset + perPage)
      : data
        .filter((item) => {
          return [item.name, item.category].some(item => item.match(filterRe))
        })
        .slice(offset, offset + perPage),
  }
})

async function getDemoData() {
  return Promise.resolve([
    {
      id: 0,
      name: 'مبل خاکستری',
      price: 2499.99,
      image: '/img/illustrations/layouts/furniture-1.svg',
      sku: 'FC-59859',
      stock: 10,
      category: 'مبل‌ها',
    },
    {
      id: 1,
      name: 'مبل به سبک سفالی',
      price: 1999.99,
      image: '/img/illustrations/layouts/furniture-2.svg',
      sku: 'FC-15984',
      stock: 16,
      category: 'مبل‌ها',
    },
    {
      id: 2,
      name: 'صندلی ویکتوریایی',
      price: 899.99,
      image: '/img/illustrations/layouts/furniture-3.svg',
      sku: 'FC-48668',
      stock: 24,
      category: 'صندلی‌ها',
    },
    {
      id: 3,
      name: 'مبل راحت',
      price: 1499.99,
      image: '/img/illustrations/layouts/furniture-4.svg',
      sku: 'FC-75549',
      stock: 17,
      category: 'مبل‌ها',
    },
    {
      id: 4,
      name: 'مبل خاکستری تخت',
      price: 1649.99,
      image: '/img/illustrations/layouts/furniture-5.svg',
      sku: 'FC-45654',
      stock: 11,
      category: 'مبل‌ها',
    },
    {
      id: 5,
      name: 'مبل راحتی تخت‌خواب‌شو',
      price: 1449.49,
      image: '/img/illustrations/layouts/furniture-6.svg',
      sku: 'FC-81155',
      stock: 21,
      category: 'مبل‌ها',
    },
    {
      id: 6,
      name: 'مبل ساده',
      price: 999.99,
      image: '/img/illustrations/layouts/furniture-7.svg',
      sku: 'FC-15898',
      stock: 15,
      category: 'مبل‌ها',
    },
    {
      id: 7,
      name: 'مبل امپراتور',
      price: 2999.99,
      image: '/img/illustrations/layouts/furniture-8.svg',
      sku: 'FC-41599',
      stock: 22,
      category: 'مبل‌ها',
    },
    {
      id: 8,
      name: 'مبل مینیمالیستی',
      price: 1299.99,
      image: '/img/illustrations/layouts/furniture-9.svg',
      sku: 'FC-16945',
      stock: 8,
      category: 'مبل‌ها',
    },
    {
      id: 9,
      name: 'مبل Lazyboy',
      price: 899.99,
      image: '/img/illustrations/layouts/furniture-10.svg',
      sku: 'FC-84165',
      stock: 9,
      category: 'مبل‌ها',
    },
    {
      id: 10,
      name: 'صندلی صومعه‌ای',
      price: 2499,
      image: '/img/illustrations/layouts/furniture-11.svg',
      sku: 'FC-59859',
      stock: 10,
      category: 'مبل‌ها',
    },
    {
      id: 11,
      name: 'مبل سبک رومی',
      price: 2499,
      image: '/img/illustrations/layouts/furniture-12.svg',
      sku: 'FC-47988',
      stock: 3,
      category: 'صندلی‌ها',
    },
    {
      id: 12,
      name: 'صندلی راحتی',
      price: 3499.99,
      image: '/img/illustrations/layouts/furniture-13.svg',
      sku: 'FC-12654',
      stock: 5,
      category: 'مبل‌ها',
    },
    {
      id: 13,
      name: 'مبل جمع‌وجور',
      price: 549.99,
      image: '/img/illustrations/layouts/furniture-14.svg',
      sku: 'FC-23559',
      stock: 52,
      category: 'صندلی‌ها',
    },
    {
      id: 14,
      name: 'صندلی راحت شراب',
      price: 1299.99,
      image: '/img/illustrations/layouts/furniture-15.svg',
      sku: 'FC-11568',
      stock: 16,
      category: 'مبل‌ها',
    },
    {
      id: 15,
      name: 'مبل مدرن',
      price: 999.99,
      image: '/img/illustrations/layouts/furniture-16.svg',
      sku: 'FC-78589',
      stock: 21,
      category: 'صندلی‌ها',
    },
    {
      id: 16,
      name: 'صندلی راحتی مدرن',
      price: 1499.99,
      image: '/img/illustrations/layouts/furniture-17.svg',
      sku: 'FC-154489',
      stock: 9,
      category: 'مبل‌ها',
    },
    {
      id: 17,
      name: 'مبل منحنی',
      price: 899.99,
      image: '/img/illustrations/layouts/furniture-18.svg',
      sku: 'FC-41589',
      stock: 19,
      category: 'صندلی',
    },
    {
      id: 18,
      name: 'مبل شیک',
      price: 1799.99,
      image: '/img/illustrations/layouts/furniture-19.svg',
      sku: 'FC-15659',
      stock: 12,
      category: 'مبل‌ها',
    },
    {
      id: 19,
      name: 'مبل تخت‌خواب‌شو',
      price: 1299.99,
      image: '/img/illustrations/layouts/furniture-20.svg',
      sku: 'FC-11568',
      stock: 7,
      category: 'مبل‌ها',
    },
  ])
}
