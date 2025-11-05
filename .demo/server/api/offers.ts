export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = parseInt((query.perPage as string) || '5', 10)
  const page = parseInt((query.page as string) || '1', 10)
  const filter = (query.filter as string) || ''

  if (perPage >= 200) {
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
      return [item.categories, item.title].some(item => item.match(filterRe))
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      categories: ['popular', 'development'],
      slug: 'asana',
      title: 'آسانا',
      subtitle: '۱۵٪ تخفیف در اشتراک',
      icon: 'logos:asana-icon',
      remaining: '۱۰ روز',
    },
    {
      id: 2,
      categories: ['popular', 'development'],
      slug: 'supabase',
      title: 'سوپابیس',
      subtitle: '2 ماه رایگان',
      icon: 'logos:supabase-icon',
      remaining: '۱۵ روز',
    },
    {
      id: 3,
      categories: ['popular', 'development'],
      slug: 'twilio',
      title: 'تویلیو',
      subtitle: 'اکنون ۲۰٪ تخفیف',
      icon: 'logos:twilio-icon',
      remaining: '۲۵ روز',
    },
    {
      id: 4,
      categories: ['popular', 'development'],
      slug: 'heroku',
      title: 'هروکو',
      subtitle: '6 ماه رایگان',
      icon: 'logos:heroku-icon',
      remaining: '۵ روز',
    },
    {
      id: 5,
      categories: ['popular', 'development'],
      slug: 'dropbox',
      title: 'دراپ‌باکس',
      subtitle: 'اکنون ۱۵٪ تخفیف',
      icon: 'logos:dropbox',
      remaining: '۷ روز',
    },
    {
      id: 6,
      categories: ['popular', 'development'],
      slug: 'github',
      title: 'گیت‌هاب',
      subtitle: '۳۰٪ تخفیف برای سازمان‌ها',
      icon: 'logos:github-icon',
      remaining: '۱۲ روز',
    },
    {
      id: 7,
      categories: ['recent'],
      slug: 'elastic-search',
      title: 'جستجوی الاستیک',
      subtitle: '۱۲٪ تخفیف در اشتراک',
      icon: 'logos:elasticpath-icon',
      remaining: '۲۵ روز',
    },
    {
      id: 8,
      categories: ['recent'],
      slug: 'docker',
      title: 'داکر',
      subtitle: '2 ماه رایگان',
      icon: 'logos:docker-icon',
      remaining: '۳۰ روز',
    },
    {
      id: 9,
      categories: ['recent'],
      slug: 'g-suite',
      title: 'جی سوئیت',
      subtitle: 'اکنون ۲۰٪ تخفیف',
      icon: 'logos:google-icon',
      remaining: '۱۵ روز',
    },
    {
      id: 10,
      categories: ['recent'],
      slug: 'hound-ci',
      title: 'هاوند CI',
      subtitle: '2 ماه رایگان',
      icon: 'logos:houndci',
      remaining: '۵ روز',
    },
    {
      id: 11,
      categories: ['recent'],
      slug: 'haxe',
      title: 'هاکس',
      subtitle: 'اکنون ۳۵٪ تخفیف',
      icon: 'logos:haxe',
      remaining: '۲۰ روز',
    },
    {
      id: 12,
      categories: ['recent'],
      slug: 'evergreen',
      title: 'جاودانه',
      subtitle: '۱۰٪ تخفیف در تمام پلن‌ها',
      icon: 'logos:evergreen-icon',
      remaining: '۱۵ روز',
    },
    {
      id: 13,
      categories: ['communication'],
      slug: 'slack',
      title: 'اسلک',
      subtitle: '۱۲٪ تخفیف در اشتراک',
      icon: 'logos:slack-icon',
      remaining: '۲۰ روز',
    },
    {
      id: 14,
      categories: ['communication'],
      slug: 'mattermost',
      title: 'مترموست',
      subtitle: '۱ ماه رایگان',
      icon: 'logos:mattermost-icon',
      remaining: '۵ روز',
    },
    {
      id: 15,
      categories: ['communication'],
      slug: 'teams',
      title: 'تیم‌ها',
      subtitle: '-۵۰٪ تخفیف اکنون',
      icon: 'logos:microsoft-teams',
      remaining: '۲۰ روز',
    },
    {
      id: 16,
      categories: ['communication'],
      slug: 'intercom',
      title: 'اینترکام',
      subtitle: '2 ماه رایگان',
      icon: 'logos:intercom-icon',
      remaining: '۲۵ روز',
    },
    {
      id: 17,
      categories: ['communication'],
      slug: 'google-meet',
      title: 'ملاقات گوگل',
      subtitle: '-۱۰٪ تخفیف الان',
      icon: 'logos:google-meet',
      remaining: '۱۰ روز',
    },
    {
      id: 18,
      categories: ['communication'],
      slug: 'hipchat',
      title: 'هیپ‌چت',
      subtitle: '۲۵٪ تخفیف برای همه پلن‌ها',
      icon: 'logos:hipchat',
      remaining: '۵ روز',
    },
    {
      id: 19,
      categories: ['design'],
      slug: 'sketch',
      title: 'اسکچ',
      subtitle: '۲۰٪ تخفیف در اشتراک',
      icon: 'logos:sketch',
      remaining: '۱۵ روز',
    },
    {
      id: 20,
      categories: ['design'],
      slug: 'figma',
      title: 'فیگما',
      subtitle: '۳ ماه رایگان',
      icon: 'logos:figma',
      remaining: '۲۵ روز',
    },
    {
      id: 21,
      categories: ['design'],
      slug: 'adobe-xd',
      title: 'ادوبی XD',
      subtitle: '۳۰٪ تخفیف اکنون',
      icon: 'logos:adobe-xd',
      remaining: '۵ روز',
    },
    {
      id: 22,
      categories: ['design'],
      slug: 'adobe-illustrator',
      title: 'ایلاستریتور',
      subtitle: '۳۰٪ تخفیف اکنون',
      icon: 'logos:adobe-illustrator',
      remaining: '۵ روز',
    },
    {
      id: 23,
      categories: ['design'],
      slug: 'zeplin',
      title: 'زپلین',
      subtitle: '۳۰٪ تخفیف اکنون',
      icon: 'logos:zeplin',
      remaining: '۱۵ روز',
    },
    {
      id: 24,
      categories: ['design'],
      slug: 'invision',
      title: 'اینوژن',
      subtitle: '۲۵٪ تخفیف برای همه پلن‌ها',
      icon: 'logos:invision-icon',
      remaining: '۲۵ روز',
    },
    {
      id: 25,
      categories: ['development'],
      slug: 'code-igniter',
      title: 'کد ایگنایتر',
      subtitle: '۲۰٪ تخفیف در اشتراک',
      icon: 'logos:codeigniter-icon',
      remaining: '۵ روز',
    },
    {
      id: 26,
      categories: ['development'],
      slug: 'gitlab',
      title: 'گیت‌لب',
      subtitle: '۱۵٪ تخفیف برای سازمان‌ها',
      icon: 'logos:gitlab',
      remaining: '۲۵ روز',
    },
    {
      id: 27,
      categories: ['development'],
      slug: 'firebase',
      title: 'فایربیس',
      subtitle: '۳ ماه رایگان',
      icon: 'logos:firebase',
      remaining: '۱۰ روز',
    },
  ])
}
