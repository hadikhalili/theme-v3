export default defineEventHandler(async () => {
  return await getDemoData()
})

async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      user: {
        name: 'ملانی ال.',
        src: '/img/avatars/25.svg',
        text: 'ML',
      },
      date: '۱۱ اسفند ۱۴۰۱',
      time: '۱۱:۲۸ ق.ظ',
      status: 0,
      target: {
        type: 'project',
        name: 'اپلیکیشن تحویل',
        url: '/layouts/projects/details/delivery-app-project',
        text: 'تغییراتی در',
      },
      people: [
        {
          name: 'مایا ر.',
          src: '/img/avatars/2.svg',
          text: 'MR',
        },
      ],
    },
    {
      id: 2,
      user: {
        name: 'کندرا و.',
        src: '/img/avatars/10.svg',
        text: 'KW',
      },
      date: '۹ اسفند ۱۴۰۱',
      time: '۲:۱۴ ب.ظ',
      status: 0,
      target: {
        type: 'project',
        name: 'اپلیکیشن تحویل',
        url: '/layouts/projects/details/delivery-app-project',
        text: 'یک نظر روی وظیفه‌ای گذاشت در',
      },
      people: [
        {
          name: 'گرتا ک.',
          src: '/img/avatars/24.svg',
          text: 'GK',
        },
      ],
    },
    {
      id: 3,
      user: {
        name: 'هرمان م.',
        src: '/img/avatars/16.svg',
        text: 'HM',
      },
      date: '۹ اسفند ۱۴۰۱',
      time: '۵:۲۹ عصر',
      status: 1,
      target: {
        type: 'project',
        name: 'اپلیکیشن مدیریت رزومه',
        url: '/layouts/projects/details/resume-management-mobile-app',
        text: '۳ نفر دعوت شده به',
      },
      people: [
        {
          name: 'مایا ر.',
          src: '/img/avatars/2.svg',
          text: 'MR',
        },
        {
          name: 'جان بی.',
          src: '/img/avatars/8.svg',
          text: 'JB',
        },
        {
          name: 'بتی سی.',
          src: '/img/avatars/24.svg',
          text: 'BC',
        },
      ],
    },
    {
      id: 4,
      user: {
        name: 'جان بی.',
        src: '/img/avatars/8.svg',
        text: 'JB',
      },
      date: '۹ اسفند ۱۴۰۱',
      time: '۱۸:۱۲',
      status: 1,
      target: {
        type: 'project',
        name: 'اپلیکیشن تحویل',
        url: '/layouts/projects/details/delivery-app-project',
        text: 'وضعیت یک کار را تغییر داد، در',
      },
      people: [],
    },
    {
      id: 5,
      user: {
        name: 'کلاریسا م.',
        src: '/img/avatars/5.svg',
        text: 'JB',
      },
      date: '۸ اسفند ۱۴۰۱',
      time: '۹:۴۷ ق.ظ',
      status: 1,
      target: {
        type: 'project',
        name: 'اپلیکیشن تحویل',
        url: '/layouts/projects/details/delivery-app-project',
        text: '3 فایل جدید آپلود شد، در',
      },
      people: [],
    },
    {
      id: 6,
      user: {
        name: 'بتی د.',
        src: '/img/avatars/24.svg',
        text: 'BD',
      },
      date: '۷ اسفند ۱۴۰۱',
      time: '۱۰:۱۹ ق.ظ',
      status: 1,
      target: {
        type: 'project',
        name: 'اپلیکیشن مدیریت رزومه',
        url: '/layouts/projects/details/resume-management-mobile-app',
        text: 'شما را در یک نظر ذکر کرد، در',
      },
      people: [],
    },
    {
      id: 7,
      user: {
        name: 'هاوارد سی.',
        src: '/img/avatars/20.svg',
        text: 'HC',
      },
      date: '۲۵ اسفند ۱۴۰۲',
      time: '۱۱:۲۷ ق.ظ',
      status: 0,
      target: {
        type: 'project',
        name: 'اپلیکیشن تحویل',
        url: '/layouts/projects/details/delivery-app-project',
        text: 'یک نظر روی وظیفه‌ای گذاشت در',
      },
      people: [
        {
          name: 'ساندرا و.',
          src: '/img/avatars/12.svg',
          text: 'SW',
        },
      ],
    },
    {
      id: 8,
      user: {
        name: 'جان بی.',
        src: '/img/avatars/8.svg',
        text: 'JB',
      },
      date: '۲۵ اسفند ۱۴۰۲',
      time: '۳:۱۹ ب.ظ',
      status: 1,
      target: {
        type: 'project',
        name: 'اپلیکیشن تحویل',
        url: '/layouts/projects/details/delivery-app-project',
        text: 'وضعیت یک کار را تغییر داد، در',
      },
      people: [],
    },
  ])
}
