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
          return [item.title, item.author.name].some(item => item.match(filterRe))
        })
        .slice(offset, offset + perPage),
  }
})

async function getDemoData() {
  return Promise.resolve([
    {
      id: '1',
      title: 'نحوه سرو کردن قهوه به روش صحیح در دفتر',
      published: '۳۰ دقیقه پیش',
      image: '/img/illustrations/layouts/post-1.svg',
      category: 'بازدهی',
      author: {
        id: 39,
        avatar: '/img/avatars/20.svg',
        name: 'الخاندرو بی.',
        initials: 'AB',
      },
    },
    {
      id: '2',
      title: 'کار تیمی می‌تواند به طور چشمگیری بهره‌وری را افزایش دهد',
      published: '۴ ساعت پیش',
      image: '/img/illustrations/layouts/post-2.svg',
      category: 'بازدهی',
      author: {
        id: 15,
        avatar: '/img/avatars/5.svg',
        name: 'کلاریسا م.',
        initials: 'CM',
      },
    },
    {
      id: '3',
      title: 'آیا تیم‌سازی یک فریب است یا موضوع بعدی؟',
      published: '۵ ساعت پیش',
      image: '/img/illustrations/layouts/post-3.svg',
      category: 'مدیریت',
      author: {
        id: 24,
        avatar: '/img/avatars/24.svg',
        name: 'ساندرین سی.',
        initials: 'SC',
      },
    },
    {
      id: '4',
      title: '۳ چیز که باید هنگام درخواست برای شغل‌های توسعه‌دهنده بدانید',
      published: '۸ ساعت پیش',
      image: '/img/illustrations/layouts/post-4.svg',
      category: 'مهندسی',
      author: {
        id: 27,
        avatar: '/img/avatars/12.svg',
        name: 'کارمن ای.',
        initials: 'CE',
      },
    },
    {
      id: '5',
      title: 'کسب و کار ساخت و ساز به طور گسترده در برنامه‌های موبایل سرمایه‌گذاری می‌کند',
      published: '۱ روز پیش',
      image: '/img/illustrations/layouts/post-5.svg',
      category: 'مهندسی',
      author: {
        id: 10,
        avatar: '/img/avatars/1.svg',
        name: 'هنری ج.',
        initials: 'HG',
      },
    },
    {
      id: '6',
      title: 'پیدا کردن مکان مناسب برای استارتاپ شما',
      published: '۱ روز پیش',
      image: '/img/illustrations/layouts/post-6.svg',
      category: 'مدیریت',
      author: {
        id: 22,
        avatar: '/img/avatars/10.svg',
        name: 'کندرا و.',
        initials: 'KW',
      },
    },
    {
      id: '7',
      title: '۴ نکته برای عالی کردن ناهارهای کاری شما',
      published: '۲ روز پیش',
      image: '/img/illustrations/layouts/post-7.svg',
      category: 'همکاری',
      author: {
        id: 22,
        avatar: '/img/avatars/16.svg',
        name: 'هرمان م.',
        initials: 'HM',
      },
    },
    {
      id: '8',
      title: 'راه‌اندازی یک سیستم طراحی برای پروژه اپلیکیشن شما',
      published: '۲ روز پیش',
      image: '/img/illustrations/layouts/post-8.svg',
      category: 'طراح تجربه کاربری',
      author: {
        id: 26,
        avatar: '/img/avatars/26.svg',
        name: 'کورتنی و.',
        initials: 'CW',
      },
    },
    {
      id: '9',
      title: 'راه‌اندازی یک سیستم طراحی برای پروژه اپلیکیشن شما',
      published: '۳ روز پیش',
      image: '/img/illustrations/layouts/post-9.svg',
      category: 'طراح تجربه کاربری',
      author: {
        id: 8,
        avatar: '/img/avatars/2.svg',
        name: 'مایا ر.',
        initials: 'MR',
      },
    },
    {
      id: '10',
      title: 'آیا به آموزش مدیریت محصول فکر کرده‌اید؟',
      published: '۳ روز پیش',
      image: '/img/illustrations/layouts/post-10.svg',
      category: 'محصول',
      author: {
        id: 14,
        avatar: '/img/avatars/14.svg',
        name: 'رایان ب.',
        initials: 'RB',
      },
    },
    {
      id: '11',
      title: 'استفاده از رنگ‌های جذاب در وب‌سایت‌ها و اپلیکیشن‌های شما',
      published: '۳ روز پیش',
      image: '/img/illustrations/layouts/post-11.svg',
      category: 'طراح تجربه کاربری',
      author: {
        id: 9,
        avatar: '/img/avatars/9.svg',
        name: 'آنا ب.',
        initials: 'AB',
      },
    },
    {
      id: '12',
      title: 'چرا مفید است که مشتریان خود را تحلیل کنید',
      published: '۳ روز پیش',
      image: '/img/illustrations/layouts/post-12.svg',
      category: 'بازاریابی',
      author: {
        id: 22,
        avatar: '/img/avatars/10.svg',
        name: 'کندرا و.',
        initials: 'KW',
      },
    },
    {
      id: '13',
      title: 'ساختن یک تیم منسجم و بااستعداد',
      published: '۳ روز پیش',
      image: '/img/illustrations/layouts/post-13.svg',
      category: 'مدیریت',
      author: {
        id: 19,
        avatar: '/img/avatars/19.svg',
        name: 'گرتا ک.',
        initials: 'GK',
      },
    },
    {
      id: '14',
      title: 'مدیریت شخصیت‌های مختلف در تیم شما',
      published: '۳ روز پیش',
      image: '/img/illustrations/layouts/post-14.svg',
      category: 'مدیریت',
      author: {
        id: 28,
        avatar: '/img/avatars/6.svg',
        name: 'ادوارد ف.',
        initials: 'EF',
      },
    },
    {
      id: '15',
      title: 'چه فریمیورکی را برای ساخت اپلیکیشن موبایل در سال ۱۳۹۹ انتخاب کنیم؟',
      published: '۳ روز پیش',
      image: '/img/illustrations/layouts/post-15.svg',
      category: 'مهندسی',
      author: {
        id: 5,
        avatar: '/img/avatars/25.svg',
        name: 'مری ال.',
        initials: 'ML',
      },
    },
    {
      id: '16',
      title: 'غوطه‌ور شدن در ساخت یک برند تجارت الکترونیک - بخش ۱',
      published: '۴ روز پیش',
      image: '/img/illustrations/layouts/post-16.svg',
      category: 'تجارت الکترونیک',
      author: {
        id: 33,
        avatar: '/img/avatars/18.svg',
        name: 'هاروی ام.',
        initials: 'HM',
      },
    },
    {
      id: '17',
      title: 'غوطه‌ور شدن در ساخت یک برند تجارت الکترونیک - بخش ۲',
      published: '۴ روز پیش',
      image: '/img/illustrations/layouts/post-17.svg',
      category: 'تجارت الکترونیک',
      author: {
        id: 33,
        avatar: '/img/avatars/18.svg',
        name: 'هاروی ام.',
        initials: 'HM',
      },
    },
    {
      id: '18',
      title: 'چگونه مطمئن شویم که به اهدافی که تعیین کرده‌اید می‌رسید',
      published: '۴ روز پیش',
      image: '/img/illustrations/layouts/post-18.svg',
      category: 'مدیریت',
      author: {
        id: 31,
        avatar: '/img/avatars/23.svg',
        name: 'یاسین آ.',
        initials: 'YA',
      },
    },
  ])
}
