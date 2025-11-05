interface Member {
  id: number
  picture?: string
  badge?: string
  username: string
  initials: string
  status: string
  location: string
  position: string
  completed: number
  bio: string
  socialProfiles: {
    name: string
    icon: string
    url: string
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
          return [item.username, item.location, item.position].some(item =>
            item.match(filterRe),
          )
        })
        .slice(offset, offset + perPage),
  }
})

async function getDemoData(): Promise<Member[]> {
  return Promise.resolve([
    {
      id: 29,
      picture: '/img/avatars/22.svg',
      badge: '/img/stacks/python.svg',
      username: 'میراندا ال.',
      initials: 'ML',
      status: 'جدید',
      location: 'برلین، آلمان',
      position: 'مهندس نرم‌افزار',
      completed: 12,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 21,
      picture: '/img/avatars/21.svg',
      badge: '/img/icons/flags/england.svg',
      username: 'الیزابت ف.',
      initials: 'EF',
      status: 'در دسترس',
      location: 'لندن، بریتانیا',
      position: 'توسعه‌دهنده موبایل',
      completed: 49,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 8,
      picture: '/img/avatars/23.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'اریک ک.',
      initials: 'EK',
      status: 'در دسترس',
      location: 'نیویورک، نیویورک',
      position: 'مهندس نرم‌افزار',
      completed: 61,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 7,
      picture: '/img/avatars/10.svg',
      badge: '/img/stacks/js.svg',
      username: 'کندرا و.',
      initials: 'KW',
      status: 'در دسترس',
      location: 'سن‌دیگو، CA',
      position: 'مهندس نرم‌افزار',
      completed: 28,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 122,
      picture: '/img/avatars/16.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'هرمان م.',
      initials: 'HM',
      color: 'warning',
      status: 'مشغول',
      location: 'سن‌دیگو، CA',
      position: 'مدیر محصول',
      completed: 36,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 23,
      picture: '/img/avatars/11.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'دن بی.',
      initials: 'DB',
      status: 'در دسترس',
      location: 'سن‌دیگو، CA',
      position: 'مدیر پروژه',
      completed: 71,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 37,
      picture: '/img/avatars/24.svg',
      badge: '/img/icons/flags/france.svg',
      username: 'کریستینا ف.',
      initials: 'CF',
      status: 'در دسترس',
      location: 'پاریس، فرانسه',
      position: 'مدیر محصول',
      completed: 32,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 25,
      picture: '/img/avatars/25.svg',
      badge: '/img/stacks/js.svg',
      username: 'ملانی و.',
      initials: 'MW',
      status: 'جدید',
      location: 'سن‌دیگو، CA',
      position: 'توسعه‌دهنده وب',
      completed: 49,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 39,
      picture: '/img/avatars/3.svg',
      badge: '/img/stacks/python.svg',
      username: 'الخاندرو بی.',
      initials: 'AB',
      status: 'در دسترس',
      location: 'نیویورک، نیویورک',
      position: 'تحلیل‌گر کسب‌وکار',
      completed: 58,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 19,
      picture: '/img/avatars/19.svg',
      badge: '/img/icons/flags/germany.svg',
      username: 'گرتا ک.',
      initials: 'GK',
      status: 'در دسترس',
      location: 'لس‌آنجلس، کالیفرنیا',
      position: 'مدیر فروش',
      completed: 19,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 9,
      picture: '/img/avatars/9.svg',
      badge: '/img/stacks/illustrator.svg',
      username: 'آنا بی.',
      initials: 'AB',
      status: 'مشغول',
      location: 'سان فرانسیسکو، کالیفرنیا',
      position: 'طراح UI/UX',
      completed: 49,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 124,
      picture: undefined,
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'آلن تی.',
      initials: 'AT',
      status: 'مشغول',
      location: 'نیویورک، نیویورک',
      position: 'مهندس نرم‌افزار',
      completed: 56,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 120,
      picture: undefined,
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'سارا سی.',
      initials: 'SC',
      status: 'در دسترس',
      location: 'لس‌آنجلس، کالیفرنیا',
      position: 'طراح UI/UX',
      completed: 35,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 32,
      picture: '/img/avatars/1.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'جاناتان ک.',
      initials: 'JK',
      status: 'در دسترس',
      location: 'لس‌آنجلس، کالیفرنیا',
      position: 'مدیر محصول',
      completed: 24,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 36,
      picture: '/img/avatars/18.svg',
      badge: '/img/stacks/reactjs.svg',
      username: 'بنوآ ب.',
      initials: 'BB',
      status: 'offline',
      location: 'پاریس، فرانسه',
      position: 'مهندس نرم‌افزار',
      completed: 41,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 38,
      picture: '/img/avatars/2.svg',
      badge: '/img/stacks/vuejs.svg',
      username: 'مایا ر.',
      initials: 'MR',
      status: 'در دسترس',
      location: 'لس‌آنجلس، کالیفرنیا',
      position: 'توسعه‌دهنده وب',
      completed: 36,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 26,
      picture: '/img/avatars/26.svg',
      badge: '/img/stacks/html5.svg',
      username: 'کورتنی و.',
      initials: 'CW',
      status: 'در دسترس',
      location: 'ملبورن، استرالیا',
      position: 'توسعه‌دهنده وب',
      completed: 64,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 16,
      picture: '/img/avatars/8.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'جیسون ج.',
      initials: 'JG',
      status: 'offline',
      location: 'هیوستون، تگزاس',
      position: 'تحلیل‌گر کسب‌وکار',
      completed: 85,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 28,
      picture: '/img/avatars/17.svg',
      badge: '/img/stacks/angular.svg',
      username: 'ادوارد ف.',
      initials: 'EF',
      status: 'جدید',
      location: 'پاریس، فرانسه',
      position: 'توسعه‌دهنده وب',
      completed: 14,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 22,
      picture: '/img/avatars/13.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'دواین اچ.',
      initials: 'DH',
      status: 'در دسترس',
      location: 'لس‌آنجلس، کالیفرنیا',
      position: 'مدیر محصول',
      completed: 29,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 13,
      picture: '/img/avatars/22.svg',
      badge: '/img/stacks/illustrator.svg',
      username: 'تارا اس.',
      initials: 'TS',
      status: 'مشغول',
      location: 'نیویورک، نیویورک',
      position: 'طراح UI/UX',
      completed: 57,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 24,
      picture: '/img/avatars/5.svg',
      badge: '/img/icons/flags/france.svg',
      username: 'کلاریسا م.',
      initials: 'CM',
      status: 'در دسترس',
      location: 'لیون، فرانسه',
      position: 'مدیر منابع انسانی',
      completed: 61,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 27,
      picture: '/img/avatars/12.svg',
      badge: '/img/icons/flags/spain.svg',
      username: 'کارمن ای.',
      initials: 'CE',
      status: 'در دسترس',
      location: 'مادرید، اسپانیا',
      position: 'مدیر منابع انسانی',
      completed: 41,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 11,
      picture: '/img/avatars/4.svg',
      badge: '/img/icons/flags/england.svg',
      username: 'کلی م.',
      initials: 'KM',
      status: 'offline',
      location: 'لندن، بریتانیا',
      position: 'مدیر منابع انسانی',
      completed: 52,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 15,
      picture: '/img/avatars/15.svg',
      badge: '/img/icons/flags/germany.svg',
      username: 'جاش سی.',
      initials: 'JC',
      status: 'در دسترس',
      location: 'برلین، آلمان',
      position: 'مهندس نرم‌افزار',
      completed: 37,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 14,
      picture: '/img/avatars/14.svg',
      badge: '/img/icons/flags/england.svg',
      username: 'رایان ب.',
      initials: 'RB',
      status: 'در دسترس',
      location: 'لندن، بریتانیا',
      position: 'توسعه‌دهنده وب',
      completed: 89,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 10,
      picture: '/img/avatars/6.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'هنری ج.',
      initials: 'HG',
      status: 'مشغول',
      location: 'میامی، فلوریدا',
      position: 'تحلیل‌گر کسب‌وکار',
      completed: 56,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 18,
      picture: undefined,
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'استبان سی.',
      initials: 'EC',
      status: 'در دسترس',
      location: 'میامی، فلوریدا',
      position: 'طراح UI/UX',
      completed: 81,
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      socialProfiles: [
        {
          name: 'فیسبوک',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'توییتر',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'لینکدین',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'گیت‌هاب',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
  ])
}
