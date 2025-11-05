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
          return [item.title, item.location, item.duration].some(item =>
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
      logo: '/img/logos/brands/airbnb.svg',
      title: 'توسعه‌دهنده فول‌استک Node JS مورد نیاز 👌',
      location: 'سن دیگو',
      duration: 'تمام وقت',
      requirements: '۳ سال تجربه',
    },
    {
      id: '2',
      logo: '/img/logos/brands/hubspot.svg',
      title: 'مدیر پروژه برای پروژه ری‌اکت Native',
      location: 'لس آنجلس',
      duration: 'نیمه‌وقت',
      requirements: '۲ سال تجربه',
    },
    {
      id: '3',
      logo: '/img/logos/brands/slack.svg',
      title: 'طراح UI/UX برای تقویت تیم UX 💪💪',
      location: 'لس آنجلس',
      duration: 'تمام وقت',
      requirements: '۳ سال تجربه',
    },
    {
      id: '4',
      logo: '/img/logos/brands/gitlab.svg',
      title: 'مدیر ارشد DevOps تیم IT',
      location: 'لس آنجلس',
      duration: 'تمام وقت',
      requirements: '۱۰ سال تجربه',
    },
    {
      id: '5',
      logo: '/img/logos/brands/google.svg',
      title: 'توسعه‌دهنده فول‌استک با مهارت‌های قوی Mongoپایگاه داده',
      location: 'سان فرانسیسکو',
      duration: 'تمام وقت',
      requirements: '۵ سال سابقه',
    },
    {
      id: '6',
      logo: '/img/logos/brands/facebook.svg',
      title: 'توسعه‌دهنده فول‌استک جاوااسکریپت و Node.js',
      location: 'پاسادنا',
      duration: 'تمام وقت',
      requirements: '۴ سال تجربه',
    },
    {
      id: '7',
      logo: '/img/logos/brands/tnw.svg',
      title: 'مالک محصول برای پروژه ری‌اکت Native',
      location: 'لس آنجلس',
      duration: 'تمام وقت',
      requirements: '۲ سال تجربه',
    },
    {
      id: '8',
      logo: '/img/logos/brands/dribbble.svg',
      title: 'طراح UI/UX با مهارت‌های Html5 و Sass 👍',
      location: 'سن دیگو',
      duration: 'تمام وقت',
      requirements: '۴ سال تجربه',
    },
    {
      id: '9',
      logo: '/img/logos/brands/atlassian.svg',
      title: 'مدیر ارشد تجربه کاربری با تجربه',
      location: 'ملبورن',
      duration: 'تمام وقت',
      requirements: '۱۰ سال تجربه',
    },
    {
      id: '10',
      logo: '/img/logos/brands/github.svg',
      title: 'توسعه‌دهنده فول‌استک جاوااسکریپت و Node.js',
      location: 'لس آنجلس',
      duration: 'نیمه‌وقت',
      requirements: '۱ سال سابقه',
    },
    {
      id: '11',
      logo: '/img/logos/brands/airbnb.svg',
      title: 'توسعه‌دهنده فول‌استک Node JS مورد نیاز 👌',
      location: 'سن دیگو',
      duration: 'تمام وقت',
      requirements: '۳ سال تجربه',
    },
    {
      id: '12',
      logo: '/img/logos/brands/airbnb.svg',
      title: 'توسعه‌دهنده فول‌استک Node JS مورد نیاز 👌',
      location: 'سن دیگو',
      duration: 'تمام وقت',
      requirements: '۳ سال تجربه',
    },
  ])
}
