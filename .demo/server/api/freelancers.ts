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
          return [item.name, item.location, item.role].some(item =>
            item.match(filterRe),
          )
        })
        .slice(offset, offset + perPage),
  }
})

async function getDemoData() {
  return Promise.resolve([
    {
      id: '5',
      name: 'مری لبوفسکی',
      location: 'سن‌دیگو، CA',
      role: 'مدیر پروژه',
      roleColor: 'primary',
      medias: {
        avatar: '/img/avatars/5.svg',
        flag: '/img/icons/flags/united-states-of-america.svg',
      },
      stats: {
        projects: 14,
        replies: 97,
        posts: 16,
      },
      teams: [{ src: '/img/avatars/9.svg' }, { src: '/img/avatars/11.svg' }],
    },
    {
      id: '34',
      name: 'دانیل ردبِرد',
      location: 'تورنتو، کانادا',
      role: 'توسعه‌دهنده وب',
      roleColor: 'orange',
      medias: {
        avatar: '/img/avatars/20.svg',
        flag: '/img/icons/flags/canada.svg',
      },
      stats: {
        projects: 45,
        replies: 12,
        posts: 5,
      },
      teams: [
        { src: '/img/avatars/12.svg' },
        { src: '/img/avatars/22.svg' },
        { src: '/img/avatars/10.svg' },
      ],
    },
    {
      id: '8',
      name: 'هرمان مایر',
      location: 'نیویورک، نیویورک',
      role: 'مدیر محصول',
      roleColor: 'secondary',
      medias: {
        avatar: '/img/avatars/16.svg',
        flag: '/img/icons/flags/united-states-of-america.svg',
      },
      stats: {
        projects: 14,
        replies: 97,
        posts: 16,
      },
      teams: [{ src: '/img/avatars/7.svg' }, { src: '/img/avatars/23.svg' }],
    },
    {
      id: '40',
      name: 'جین مارشند',
      location: 'پاریس، فرانسه',
      role: 'توسعه‌دهنده موبایل',
      roleColor: 'orange',
      medias: {
        avatar: '/img/avatars/19.svg',
        flag: '/img/icons/flags/france.svg',
      },
      stats: {
        projects: 6,
        replies: 12,
        posts: 8,
      },
      teams: [
        { src: '/img/avatars/18.svg' },
        { src: '/img/avatars/13.svg' },
        { src: '/img/avatars/8.svg' },
        { src: '/img/avatars/4.svg' },
        { src: '/img/avatars/5.svg' },
        { src: '/img/avatars/6.svg' },
        { src: '/img/avatars/7.svg' },
        { src: '/img/avatars/9.svg' },
      ],
    },
    {
      id: '27',
      name: 'کارمن اسکودرو',
      location: 'مادرید، اسپانیا',
      role: 'مدیر منابع انسانی',
      roleColor: 'primary',
      medias: {
        avatar: '/img/avatars/21.svg',
        flag: '/img/icons/flags/spain.svg',
      },
      stats: {
        projects: 8,
        replies: 158,
        posts: 54,
      },
      teams: [{ src: '/img/avatars/18.svg' }],
    },
    {
      id: '9',
      name: 'آنا بیکر',
      location: 'سان فرانسیسکو، کالیفرنیا',
      role: 'طراح UI/UX',
      roleColor: 'green',
      medias: {
        avatar: '/img/avatars/9.svg',
        flag: '/img/icons/flags/united-states-of-america.svg',
      },
      stats: {
        projects: 19,
        replies: 28,
        posts: 12,
      },
      teams: [{ src: '/img/avatars/12.svg' }, { src: '/img/avatars/5.svg' }],
    },
    {
      id: '18',
      name: 'استبان کاستلانوس',
      location: 'میامی، فلوریدا',
      role: 'طراح UI/UX',
      roleColor: 'green',
      medias: {
        avatar: '/img/avatars/18.svg',
        flag: '/img/icons/flags/united-states-of-america.svg',
      },
      stats: {
        projects: 59,
        replies: 158,
        posts: 16,
      },
      teams: [
        { src: '/img/avatars/19.svg' },
        { src: '/img/avatars/16.svg' },
        { src: '/img/avatars/22.svg' },
        { src: '/img/avatars/4.svg' },
        { src: '/img/avatars/5.svg' },
        { src: '/img/avatars/2.svg' },
        { src: '/img/avatars/6.svg' },
        { src: '/img/avatars/9.svg' },
        { src: '/img/avatars/7.svg' },
        { src: '/img/avatars/3.svg' },
      ],
    },
    {
      id: '10',
      name: 'کندرا ویلسون',
      location: 'میامی، فلوریدا',
      role: 'تحلیل‌گر کسب‌وکار',
      roleColor: 'primary',
      medias: {
        avatar: '/img/avatars/10.svg',
        flag: '/img/icons/flags/united-states-of-america.svg',
      },
      stats: {
        projects: 42,
        replies: 15,
        posts: 2,
      },
      teams: [{ src: '/img/avatars/15.svg' }, { src: '/img/avatars/22.svg' }],
    },
    {
      id: '25',
      name: 'ملانی والاس',
      location: 'سن خوزه، کالیفرنیا',
      role: 'توسعه‌دهنده وب',
      roleColor: 'orange',
      medias: {
        avatar: '/img/avatars/25.svg',
        flag: '/img/icons/flags/united-states-of-america.svg',
      },
      stats: {
        projects: 17,
        replies: 22,
        posts: 4,
      },
      teams: [
        { src: '/img/avatars/10.svg' },
        { src: '/img/avatars/23.svg' },
        { src: '/img/avatars/16.svg' },
        { src: '/img/avatars/5.svg' },
        { src: '/img/avatars/4.svg' },
      ],
    },
    {
      id: '7',
      name: 'توماس اندرسون',
      location: 'سن‌دیگو، CA',
      role: 'مهندس نرم‌افزار',
      roleColor: 'orange',
      medias: {
        avatar: '/img/avatars/7.svg',
        flag: '/img/icons/flags/united-states-of-america.svg',
      },
      stats: {
        projects: 31,
        replies: 82,
        posts: 14,
      },
      teams: [{ src: '/img/avatars/9.svg' }, { src: '/img/avatars/14.svg' }],
    },
  ])
}
