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
      id: '13',
      name: 'تارا سوِنسون',
      shortname: 'تارا اس.',
      location: 'نیویورک، نیویورک',
      role: 'طراح UI/UX',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/13.jpg',
        badge: '/images/icons/flags/united-states-of-america.svg',
      },
      progress: 65,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '37',
      name: 'هلموت فریتز',
      shortname: 'هلموت ف.',
      location: 'پاریس، فرانسه',
      role: 'مدیر محصول',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/37.jpg',
        badge: '/images/icons/flags/france.svg',
      },
      progress: 38,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '25',
      name: 'ملانی والاس',
      shortname: 'ملانی و.',
      location: 'سن خوزه، کالیفرنیا',
      role: 'توسعه‌دهنده وب',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/25.jpg',
        badge: '/images/icons/stacks/js.svg',
      },
      progress: 58,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '29',
      name: 'حکیم کلامی',
      shortname: 'حکیم سی.',
      location: 'برلین، آلمان',
      role: 'مهندس نرم‌افزار',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/29.jpg',
        badge: '/images/icons/stacks/python.svg',
      },
      progress: 85,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '39',
      name: 'الخاندرو باداخوز',
      shortname: 'الخاندرو بی.',
      location: 'نیویورک، نیویورک',
      role: 'تحلیل‌گر کسب‌وکار',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/39.jpg',
        badge: '/images/icons/flags/united-states-of-america.svg',
      },
      progress: 28,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '40',
      name: 'جین مارشند',
      shortname: 'ژان ام.',
      location: 'پاریس، فرانسه',
      role: 'توسعه‌دهنده موبایل',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/40.jpg',
        badge: '/images/icons/stacks/android.svg',
      },
      progress: 67,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '19',
      name: 'گرتا کروپفر',
      shortname: 'گرتا ک.',
      location: 'برلین، آلمان',
      role: 'مدیر فروش',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/19.jpg',
        badge: '/images/icons/flags/germany.svg',
      },
      progress: 56,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '9',
      name: 'آنا بیکر',
      shortname: 'آنا ب.',
      location: 'سان فرانسیسکو، کالیفرنیا',
      role: 'طراح UI/UX',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/9.jpg',
        badge: '/images/icons/stacks/photoshop.svg',
      },
      progress: 12,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '5',
      name: 'مری لبوفسکی',
      shortname: 'مری ال.',
      location: 'سن‌دیگو، CA',
      role: 'مدیر پروژه',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/5.jpg',
        badge: '/images/icons/flags/united-states-of-america.svg',
      },
      progress: 29,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '32',
      name: 'جاناتان کروگر',
      shortname: 'جاناتان ک.',
      location: 'لس‌آنجلس، کالیفرنیا',
      role: 'مدیر محصول',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/32.jpg',
        badge: '/images/icons/flags/united-states-of-america.svg',
      },
      progress: 91,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '36',
      name: 'بنوآ لبلانک',
      shortname: 'بنوآ ل.',
      location: 'پاریس، فرانسه',
      role: 'مهندس نرم‌افزار',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/36.jpg',
        badge: '/images/icons/stacks/reactjs.svg',
      },
      progress: 44,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '38',
      name: 'کریستی دالاس',
      shortname: 'کریستی د.',
      location: 'لس‌آنجلس، کالیفرنیا',
      role: 'توسعه‌دهنده وب',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/38.jpg',
        badge: '/images/icons/stacks/vuejs.svg',
      },
      progress: 61,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '26',
      name: 'کورتنی ویلسون',
      shortname: 'کورتنی و.',
      location: 'ملبورن، استرالیا',
      role: 'توسعه‌دهنده وب',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/26.jpg',
        badge: '/images/icons/stacks/html5.svg',
      },
      progress: 53,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '16',
      name: 'جیسون گوارانک',
      shortname: 'جیسون ج.',
      location: 'هیوستون، تگزاس',
      role: 'تحلیل‌گر کسب‌وکار',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/16.jpg',
        badge: '/images/icons/flags/united-states-of-america.svg',
      },
      progress: 78,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '23',
      name: 'ایرینا ویربوفسکی',
      shortname: 'ایرینا و.',
      location: 'سن‌دیگو، CA',
      role: 'مدیر پروژه',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/23.jpg',
        badge: '/images/icons/flags/united-states-of-america.svg',
      },
      progress: 36,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '28',
      name: 'ادوارد فالانت',
      shortname: 'ادوارد ف.',
      location: 'پاریس، فرانسه',
      role: 'توسعه‌دهنده وب',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/28.jpg',
        badge: '/images/icons/stacks/angular.svg',
      },
      progress: 49,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '7',
      name: 'آلیس کاراسکا',
      shortname: 'آلیس سی.',
      location: 'سن‌دیگو، CA',
      role: 'مهندس نرم‌افزار',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/7.jpg',
        badge: '/images/icons/stacks/csharp.svg',
      },
      progress: 78,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
    {
      id: '22',
      name: 'دوین هیکس',
      shortname: 'دواین اچ.',
      location: 'لس‌آنجلس، کالیفرنیا',
      role: 'مدیر محصول',
      bio: 'این یک توصیف کاربر خوب است که می‌توانیم به عنوان محتوای نمایشی استفاده کنیم.',
      medias: {
        avatar: '/demo/avatars/22.jpg',
        badge: '/images/icons/flags/united-states-of-america.svg',
      },
      progress: 17,
      social: [
        {
          channel: 'لینکدین',
          url: 'https://linkedin.com',
          icon: 'fab fa-linkedin-in',
        },
        {
          channel: 'توییتر',
          url: 'https://twitter.com',
          icon: 'fab fa-twitter',
        },
        {
          channel: 'دریبل',
          url: 'https://dribbble.com',
          icon: 'fab fa-dribbble',
        },
        {
          channel: 'گیت‌هاب',
          url: 'https://github.com',
          icon: 'fab fa-github',
        },
      ],
    },
  ])
}
