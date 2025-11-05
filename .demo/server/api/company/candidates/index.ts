interface Candidate {
  id: number
  username: string
  position: string
  src?: string
  badge: string
  location: string
  industry: string
  status: string
  initials?: string
  tasks: {
    pending: number
    done: number
    status: number
  }
  relations: {
    id: number
    src?: string
    initials?: string
    text?: string
  }[]
}

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
          return [item.username, item.location, item.position, item.industry].some(
            item => item.match(filterRe),
          )
        })
        .slice(offset, offset + perPage),
  }
})

async function getDemoData(): Promise<Candidate[]> {
  return Promise.resolve([
    {
      id: 0,
      username: 'اریک ک.',
      position: 'مدیر محصول',
      src: '/img/avatars/20.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'لاس وگاس، نوادا',
      industry: 'نرم‌افزار',
      status: 'آنلاین',
      tasks: {
        pending: 37,
        done: 164,
        status: 0,
      },
      relations: [
        {
          id: 0,
          src: '/img/avatars/25.svg',
          text: 'AC',
        },
        {
          id: 2,
          src: '/img/avatars/16.svg',
          text: 'HM',
        },
        {
          id: 1,
          src: undefined,
          text: 'JP',
        },
        {
          id: 3,
          src: '/img/avatars/5.svg',
          text: 'ML',
        },
        {
          id: 4,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 1,
      username: 'ساندرا تی.',
      position: 'مدیر پروژه',
      src: '/img/avatars/22.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'لس‌آنجلس، کالیفرنیا',
      industry: 'کسب‌وکار',
      status: 'مشغول',
      tasks: {
        pending: 21,
        done: 598,
        status: 0,
      },
      relations: [
        {
          id: 148,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 2,
      username: 'ملانی و.',
      position: 'توسعه‌دهنده وب',
      src: '/img/avatars/25.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'سن خوزه، کالیفرنیا',
      industry: 'طراحی',
      status: 'آنلاین',
      tasks: {
        pending: 45,
        done: 265,
        status: 1,
      },
      relations: [
        {
          id: 127,
          src: undefined,
          text: 'BT',
        },
        {
          id: 7,
          src: '/img/avatars/10.svg',
          text: 'KW',
        },
        {
          id: 19,
          src: '/img/avatars/19.svg',
          text: 'GK',
        },
        {
          id: 148,
          src: undefined,
          text: 'SC',
        },
        {
          id: 149,
          src: undefined,
          text: 'SC',
        },
        {
          id: 150,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 3,
      username: 'هرمان ام.',
      position: 'توسعه‌دهنده بک‌اند',
      src: '/img/avatars/16.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'لاس وگاس، نوادا',
      industry: 'حسابداری',
      status: 'تعلیق شده',
      tasks: {
        pending: 15,
        done: 575,
        status: 0,
      },
      relations: [
        {
          id: 7,
          src: '/img/avatars/8.svg',
          initials: 'TS',
        },
      ],
    },
    {
      id: 4,
      username: 'هاینریش ال.',
      position: 'طراح UI/UX',
      src: '/img/avatars/13.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'لس‌آنجلس، کالیفرنیا',
      industry: 'مالی',
      status: 'مشغول',
      tasks: {
        pending: 6,
        done: 47,
        status: 0,
      },
      relations: [
        {
          id: 0,
          src: '/img/avatars/3.svg',
          text: 'CD',
        },
        {
          id: 14,
          src: '/img/avatars/11.svg',
          text: 'KL',
        },
        {
          id: 17,
          src: '/img/avatars/5.svg',
          text: 'ML',
        },
        {
          id: 150,
          src: undefined,
          text: 'SC',
        },
        {
          id: 151,
          src: undefined,
          text: 'SC',
        },
        {
          id: 152,
          src: undefined,
          text: 'SC',
        },
        {
          id: 154,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 5,
      username: 'گرتا ک.',
      position: 'مدیر فروش',
      src: '/img/avatars/19.svg',
      badge: '/img/icons/flags/germany.svg',
      location: 'برلین، آلمان',
      industry: 'کسب‌وکار',
      status: 'آنلاین',
      tasks: {
        pending: 68,
        done: 128,
        status: 1,
      },
      relations: [
        {
          id: 0,
          src: '/img/avatars/4.svg',
          text: 'AC',
        },
        {
          id: 49,
          src: '/img/avatars/3.svg',
          text: 'CJ',
        },
        {
          id: 17,
          src: '/img/avatars/5.svg',
          text: 'ML',
        },
        {
          id: 150,
          src: undefined,
          text: 'SC',
        },
        {
          id: 151,
          src: undefined,
          text: 'SC',
        },
        {
          id: 152,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 6,
      username: 'کلمانت د.',
      position: 'مهندس نرم‌افزار',
      src: '/img/avatars/3.svg',
      badge: '/img/icons/flags/france.svg',
      location: 'تولوز، فرانسه',
      industry: 'نرم‌افزار',
      status: 'آفلاین',
      tasks: {
        pending: 19,
        done: 127,
        status: 0,
      },
      relations: [
        {
          id: 0,
          src: '/img/avatars/15.svg',
          text: 'AC',
        },
        {
          id: 145,
          src: '/img/avatars/22.svg',
          text: 'AC',
        },
        {
          id: 8,
          src: '/img/avatars/16.svg',
          text: 'ML',
        },
        {
          id: 150,
          src: undefined,
          text: 'SC',
        },
        {
          id: 151,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 7,
      username: 'رونالد دی.',
      position: 'مدیر محصول',
      src: '/img/avatars/11.svg',
      badge: '/img/icons/flags/england.svg',
      location: 'لندن، بریتانیا',
      industry: 'نرم‌افزار',
      status: 'آنلاین',
      tasks: {
        pending: 24,
        done: 277,
        status: 0,
      },
      relations: [
        {
          id: 25,
          src: '/img/avatars/25.svg',
          text: 'AC',
        },
        {
          id: 13,
          src: '/img/avatars/13.svg',
          text: 'TS',
        },
        {
          id: 17,
          src: '/img/avatars/5.svg',
          text: 'ML',
        },
      ],
    },
    {
      id: 8,
      username: 'آلن تی.',
      position: 'مهندس نرم‌افزار',
      src: undefined,
      badge: '/img/icons/flags/united-states-of-america.svg',
      initials: 'AT',
      location: 'سان فرانسیسکو، کالیفرنیا',
      industry: 'نرم‌افزار',
      status: 'آفلاین',
      tasks: {
        pending: 42,
        done: 227,
        status: 2,
      },
      relations: [
        {
          id: 25,
          src: '/img/avatars/25.svg',
          text: 'MW',
        },
      ],
    },
    {
      id: 9,
      username: 'کورتنی و.',
      position: 'توسعه‌دهنده وب',
      src: '/img/avatars/26.svg',
      badge: '/img/icons/flags/australia.svg',
      location: 'ملبورن، استرالیا',
      industry: 'نرم‌افزار',
      status: 'آفلاین',
      tasks: {
        pending: 12,
        done: 272,
        status: 0,
      },
      relations: [
        {
          id: 112,
          src: '/img/avatars/6.svg',
          text: 'AC',
        },
        {
          id: 7,
          src: '/img/avatars/10.svg',
          text: 'KW',
        },
        {
          id: 27,
          src: '/img/avatars/16.svg',
          text: 'CE',
        },
        {
          id: 150,
          src: undefined,
          text: 'SC',
        },
        {
          id: 151,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 10,
      username: 'جنیفر د.',
      position: 'مدیر فروش',
      src: '/img/avatars/24.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'سن‌دیگو، CA',
      industry: 'فروش',
      status: 'آفلاین',
      tasks: {
        pending: 11,
        done: 72,
        status: 0,
      },
      relations: [
        {
          id: 112,
          src: '/img/avatars/2.svg',
          text: 'MR',
        },
        {
          id: 156,
          src: undefined,
          text: 'JB',
        },
      ],
    },
    {
      id: 11,
      username: 'کندرا و.',
      position: 'مدیر منابع انسانی',
      src: '/img/avatars/10.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'نیویورک، نیویورک',
      industry: 'HR',
      status: 'آفلاین',
      tasks: {
        pending: 17,
        done: 272,
        status: 0,
      },
      relations: [
        {
          id: 112,
          src: '/img/avatars/2.svg',
          text: 'MR',
        },
        {
          id: 7,
          src: '/img/avatars/6.svg',
          text: 'JB',
        },
        {
          id: 27,
          src: '/img/avatars/9.svg',
          text: 'AB',
        },
        {
          id: 150,
          src: undefined,
          text: 'SC',
        },
        {
          id: 151,
          src: undefined,
          text: 'SC',
        },
      ],
    },
    {
      id: 12,
      username: 'مایک اچ.',
      position: 'تحلیل‌گر کسب‌وکار',
      src: '/img/avatars/23.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'هیوستون، تگزاس',
      industry: 'کسب‌وکار',
      status: 'آفلاین',
      tasks: {
        pending: 27,
        done: 272,
        status: 1,
      },
      relations: [
        {
          id: 150,
          src: undefined,
          text: 'TE',
        },
        {
          id: 151,
          src: undefined,
          text: 'GV',
        },
      ],
    },
    {
      id: 13,
      username: 'برایان ف.',
      position: 'مهندس نرم‌افزار',
      src: undefined,
      badge: '/img/icons/flags/united-states-of-america.svg',
      initials: 'BF',
      location: 'سانتا مونیکا، CA',
      industry: 'نرم‌افزار',
      status: 'آفلاین',
      tasks: {
        pending: 8,
        done: 28,
        status: 0,
      },
      relations: [
        {
          id: 150,
          src: undefined,
          text: 'TE',
        },
        {
          id: 151,
          src: undefined,
          text: 'GV',
        },
        {
          id: 12,
          src: '/img/avatars/25.svg',
          text: 'JT',
        },
      ],
    },
    {
      id: 14,
      username: 'جان بی.',
      position: 'عضو هیئت مدیره',
      src: '/img/avatars/6.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      location: 'نیویورک، نیویورک',
      industry: 'کسب‌وکار',
      status: 'آفلاین',
      tasks: {
        pending: 4,
        done: 75,
        status: 0,
      },
      relations: [
        {
          id: 112,
          src: undefined,
          text: 'ST',
        },
        {
          id: 7,
          src: '/img/avatars/10.svg',
          text: 'KW',
        },
        {
          id: 27,
          src: '/img/avatars/5.svg',
          text: 'CM',
        },
        {
          id: 150,
          src: undefined,
          text: 'SC',
        },
        {
          id: 151,
          src: undefined,
          text: 'SC',
        },
      ],
    },
  ])
}
