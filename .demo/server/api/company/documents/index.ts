interface Document {
  id: number
  name: string
  icon: string
  size: string
  version: string
  uploaded: string
  author: {
    name: string
    picture: string
  }
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
          return [item.name, item.author.name].some(item => item.match(filterRe))
        })
        .slice(offset, offset + perPage),
  }
})

async function getDemoData(): Promise<Document[]> {
  return Promise.resolve([
    {
      id: 0,
      name: 'راهنمای UX شرکت',
      icon: '/img/icons/files/pdf.svg',
      size: '4.7MB',
      version: '1.5.2',
      uploaded: '۲ هفته پیش',
      author: {
        name: 'هرمان م.',
        picture: '/img/avatars/16.svg',
      },
    },
    {
      id: 1,
      name: 'هزینه‌های اجلاس فناوری',
      icon: '/img/icons/files/sheet.svg',
      size: '34KB',
      version: '1.1.3',
      uploaded: '۳ روز پیش',
      author: {
        name: 'کلاریسا م.',
        picture: '/img/avatars/5.svg',
      },
    },
    {
      id: 2,
      name: 'طرح پروژه',
      icon: '/img/icons/files/doc-2.svg',
      size: '77KB',
      version: '1.0.0',
      uploaded: '۵ روز پیش',
      author: {
        name: 'کلارک د.',
        picture: '/img/avatars/3.svg',
      },
    },
    {
      id: 3,
      name: 'ارائه UX',
      icon: '/img/icons/files/ppt.svg',
      size: '2.3MB',
      version: '1.0.0',
      uploaded: '۲ هفته پیش',
      author: {
        name: 'تری اس.',
        picture: '/img/avatars/11.svg',
      },
    },
    {
      id: 4,
      name: 'بازطراحی صفحه اصلی وب‌سایت',
      icon: '/img/icons/files/ai.svg',
      size: '4.8MB',
      version: '1.0.0',
      uploaded: '۲ هفته پیش',
      author: {
        name: 'لانا ای.',
        picture: '/img/avatars/4.svg',
      },
    },
    {
      id: 5,
      name: 'آموزش سریع UX برای کارآموزان',
      icon: '/img/icons/files/doc-2.svg',
      size: '1.8MB',
      version: '1.2.0',
      uploaded: '۳ روز پیش',
      author: {
        name: 'هاوارد ال.',
        picture: '/img/avatars/20.svg',
      },
    },
    {
      id: 6,
      name: 'خلاصه پروژه‌های ۱۳۹۹',
      icon: '/img/icons/files/pdf.svg',
      size: '8.9MB',
      version: '1.3.4',
      uploaded: '3 هفته پیش',
      author: {
        name: 'مایک تی.',
        picture: '/img/avatars/1.svg',
      },
    },
    {
      id: 7,
      name: 'گزارش مالی - ۱۴۰۱',
      icon: '/img/icons/files/doc-2.svg',
      size: '1.2MB',
      version: '1.0.4',
      uploaded: '۵ روز پیش',
      author: {
        name: 'جان بکستر.',
        picture: '/img/avatars/14.svg',
      },
    },
    {
      id: 8,
      name: 'هزینه‌های تأمین‌کنندگان ۱۳۹۹',
      icon: '/img/icons/files/doc-2.svg',
      size: '250KB',
      version: '1.0.0',
      uploaded: '۶ روز پیش',
      author: {
        name: 'مایا ر.',
        picture: '/img/avatars/2.svg',
      },
    },
    {
      id: 9,
      name: 'بازطراحی صفحه درباره سایت',
      icon: '/img/icons/files/ai.svg',
      size: '3.9MB',
      version: '1.2.4',
      uploaded: '۴ روز پیش',
      author: {
        name: 'امیلیو آر.',
        picture: '/img/avatars/8.svg',
      },
    },
    {
      id: 10,
      name: 'بازطراحی صفحه قیمت‌گذاری وب‌سایت',
      icon: '/img/icons/files/ai.svg',
      size: '2.6MB',
      version: '1.2.1',
      uploaded: '۳ روز پیش',
      author: {
        name: 'نیکول آر.',
        picture: '/img/avatars/9.svg',
      },
    },
    {
      id: 11,
      name: 'گزارش مالی - ۱۴۰۰',
      icon: '/img/icons/files/doc-2.svg',
      size: '1.6MB',
      version: '1.7.2',
      uploaded: '۱ سال پیش',
      author: {
        name: 'الساندرا ف.',
        picture: '/img/avatars/21.svg',
      },
    },
    {
      id: 12,
      name: 'هزینه‌های تأمین‌کنندگان ۱۴۰۱',
      icon: '/img/icons/files/doc-2.svg',
      size: '250KB',
      version: '1.0.0',
      uploaded: '۶ روز پیش',
      author: {
        name: 'آرتور اس.',
        picture: '/img/avatars/7.svg',
      },
    },
    {
      id: 13,
      name: 'طراحی مجدد صفحه تماس وب‌سایت',
      icon: '/img/icons/files/ai.svg',
      size: '3.8',
      version: '1.1.5',
      uploaded: '۸ روز پیش',
      author: {
        name: 'کندرا و.',
        picture: '/img/avatars/10.svg',
      },
    },
    {
      id: 14,
      name: 'کتاب برند شرکت',
      icon: '/img/icons/files/pdf.svg',
      size: '7.9MB',
      version: '2.5.1',
      uploaded: '3 هفته پیش',
      author: {
        name: 'هرمان م.',
        picture: '/img/avatars/16.svg',
      },
    },
    {
      id: 15,
      name: 'خلاصه پروژه‌های ۱۴۰۰',
      icon: '/img/icons/files/pdf.svg',
      size: '5.9',
      version: '3.4.8',
      uploaded: '۱ سال پیش',
      author: {
        name: 'تونی یو.',
        picture: '/img/avatars/23.svg',
      },
    },
    {
      id: 16,
      name: 'بازطراحی صفحه فرود',
      icon: '/img/icons/files/ai.svg',
      size: '1.8MB',
      version: '1.0.0',
      uploaded: '۳ روز پیش',
      author: {
        name: 'کلارا سی.',
        picture: '/img/avatars/22.svg',
      },
    },
    {
      id: 17,
      name: 'گزارش‌دهی بودجه',
      icon: '/img/icons/files/sheet.svg',
      size: '34KB',
      version: '1.0.0',
      uploaded: '۵ روز پیش',
      author: {
        name: 'دانیلا دی.',
        picture: '/img/avatars/24.svg',
      },
    },
    {
      id: 18,
      name: 'گزارش استراتژی ۱۴۰۲',
      icon: '/img/icons/files/pdf.svg',
      size: '4.3MB',
      version: '1.1.0',
      uploaded: '۹ روز پیش',
      author: {
        name: 'هلن ت.',
        picture: '/img/avatars/25.svg',
      },
    },
    {
      id: 19,
      name: 'پیشنهاد سرمایه‌گذاران',
      icon: '/img/icons/files/ppt.svg',
      size: '34KB',
      version: '1.1.5',
      uploaded: '۴ روز پیش',
      author: {
        name: 'کندرا و.',
        picture: '/img/avatars/10.svg',
      },
    },
  ])
}
