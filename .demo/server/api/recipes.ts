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
          return [item.name, item.category, item.author.name].some(item =>
            item.match(filterRe),
          )
        })
        .slice(offset, offset + perPage),
  }
})

async function getDemoData() {
  return Promise.resolve([
    {
      id: '1',
      icon: '/img/illustrations/layouts/cake-1.svg',
      name: 'کیک توت‌فرنگی و خامه',
      category: 'کیک‌ها',
      duration: '۱ ساعت ۴۵ دقیقه',
      attachments: 3,
      author: {
        name: 'آلیس سی.',
        avatar: '/img/avatars/22.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/9.svg',
        },
        {
          id: 2,
          src: '/img/avatars/20.svg',
        },
      ],
    },
    {
      id: '2',
      icon: '/img/illustrations/layouts/cake-2.svg',
      name: 'کیک پرتقال و لیمو',
      category: 'کیک‌ها',
      duration: '۱ ساعت و ۱۵ دقیقه',
      attachments: 2,
      author: {
        name: 'کندرا و.',
        avatar: '/img/avatars/10.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/12.svg',
        },
        {
          id: 2,
          src: '/img/avatars/21.svg',
        },
        {
          id: 3,
          src: '/img/avatars/16.svg',
        },
        {
          id: 5,
          src: undefined,
          text: 'AD',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
    {
      id: '3',
      icon: '/img/illustrations/layouts/cake-3.svg',
      name: 'کیک سه شکلاتی',
      category: 'کیک‌ها',
      duration: '2h',
      attachments: 2,
      author: {
        name: 'کارن و.',
        avatar: '/img/avatars/24.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/3.svg',
        },
        {
          id: 2,
          src: '/img/avatars/2.svg',
        },
        {
          id: 3,
          src: '/img/avatars/17.svg',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
        {
          id: 5,
          src: undefined,
          text: 'AD',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
    {
      id: '4',
      icon: '/img/illustrations/layouts/cake-4.svg',
      name: 'کیک عروسی',
      category: 'کیک‌ها',
      duration: '۳ ساعت و ۳۰ دقیقه',
      attachments: 7,
      author: {
        name: 'کورتنی و.',
        avatar: '/img/avatars/26.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/19.svg',
        },
        {
          id: 2,
          src: '/img/avatars/24.svg',
        },
        {
          id: 3,
          src: '/img/avatars/10.svg',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
    {
      id: '5',
      icon: '/img/illustrations/layouts/cake-5.svg',
      name: 'وافل‌های وانیلی',
      category: 'وافل',
      duration: '۱ ساعت ۰ دقیقه',
      attachments: 2,
      author: {
        name: 'رایان ب.',
        avatar: '/img/avatars/14.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/20.svg',
        },
        {
          id: 2,
          src: '/img/avatars/9.svg',
        },
        {
          id: 3,
          src: '/img/avatars/13.svg',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
        {
          id: 5,
          src: undefined,
          text: 'AD',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
    {
      id: '6',
      icon: '/img/illustrations/layouts/cake-6.svg',
      name: 'برش توت‌فرنگی',
      category: 'برش‌ها',
      duration: '۱ ساعت ۰ دقیقه',
      attachments: 2,
      author: {
        name: 'آرنولد د.',
        avatar: '/img/avatars/20.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/14.svg',
        },
        {
          id: 2,
          src: '/img/avatars/5.svg',
        },
        {
          id: 3,
          src: '/img/avatars/8.svg',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
    {
      id: '7',
      icon: '/img/illustrations/layouts/cake-7.svg',
      name: 'دونات مارمالاد',
      category: 'دونات',
      duration: '۲ ساعت و ۱۵ دقیقه',
      attachments: 2,
      author: {
        name: 'کلاریسا م.',
        avatar: '/img/avatars/5.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/5.svg',
        },
        {
          id: 2,
          src: '/img/avatars/12.svg',
        },
        {
          id: 3,
          src: '/img/avatars/21.svg',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
        {
          id: 5,
          src: undefined,
          text: 'AD',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
    {
      id: '8',
      icon: '/img/illustrations/layouts/cake-8.svg',
      name: 'ساندویچ کره بادام زمینی',
      category: 'ساندویچ‌ها',
      duration: '15m',
      attachments: 1,
      author: {
        name: 'هرمان م.',
        avatar: '/img/avatars/16.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/9.svg',
        },
        {
          id: 2,
          src: '/img/avatars/10.svg',
        },
        {
          id: 3,
          src: '/img/avatars/23.svg',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
        {
          id: 5,
          src: undefined,
          text: 'AD',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
    {
      id: '9',
      icon: '/img/illustrations/layouts/cake-9.svg',
      name: 'اسلایس کره بادام‌زمینی',
      category: 'برش‌ها',
      duration: '15m',
      attachments: 1,
      author: {
        name: 'جاشوا اس.',
        avatar: '/img/avatars/12.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/5.svg',
        },
        {
          id: 2,
          src: '/img/avatars/22.svg',
        },
        {
          id: 3,
          src: '/img/avatars/16.svg',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
        {
          id: 5,
          src: undefined,
          text: 'AD',
        },
      ],
    },
    {
      id: '10',
      icon: '/img/illustrations/layouts/cake-9.svg',
      name: 'توت‌فرنگی تند',
      category: 'برش‌ها',
      duration: '۱ ساعت و ۱۵ دقیقه',
      attachments: 1,
      author: {
        name: 'کلی م.',
        avatar: '/img/avatars/9.svg',
      },
      followers: [
        {
          id: 1,
          src: '/img/avatars/24.svg',
        },
        {
          id: 2,
          src: '/img/avatars/23.svg',
        },
        {
          id: 3,
          src: '/img/avatars/13.svg',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
        {
          id: 5,
          src: undefined,
          text: 'AD',
        },
        {
          id: 6,
          src: undefined,
          text: 'TF',
        },
        {
          id: 7,
          src: undefined,
          text: 'GR',
        },
      ],
    },
  ])
}
