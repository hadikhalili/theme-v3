export default defineEventHandler(async () => {
  return await getDemoData()
})

async function getDemoData() {
  return Promise.resolve({
    personalInfo: {
      firstName: 'مایا',
      lastName: 'روسِلینی',
      picture: '/img/avatars/2.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      role: 'مدیر محصول',
      shortBio:
        'سلام به همه، من یک مدیر محصول از نیویورک هستم و به دنبال فرصت‌های جدید در صنعت نرم‌افزار می‌گردم.',
      longBio:
        'لورم ایپسوم دولور سیت آمت، کنسکتتور آدیپیسینگ الیت. فالی ایگیتور پوزسیموس. پراترایتیس، اینکوی، گائودئو. دوو رگس: کنستراکسیون اینترنته. ایدم‌نه، کواد ایوکند؟ کویس اینیم ردآرگوریت؟ نون سمپر، اینکوی؛ کوید نانک هونسته دیکیت؟ ایام توم آدس، کم دولور اومنیس آبسیت؛ نجات اینیم سومو بونو آفره اینکریمنتوم دی‌ام.',
      projects: 59,
      relations: 500,
      socials: [
        {
          name: 'facebook',
          url: 'https://facebook.com',
          icon: 'fa6-brands:facebook-f',
        },
        {
          name: 'twitter',
          url: 'https://twitter.com',
          icon: 'fa6-brands:twitter',
        },
        {
          name: 'linkedin',
          url: 'https://linkedin.com',
          icon: 'fa6-brands:linkedin-in',
        },
      ],
      experiences: [
        {
          company: 'گیت‌هاب',
          position: 'مدیر محصول',
          logo: '/img/logos/brands/github.svg',
          period: 'آذر ۱۴۰۱ تا امروز',
        },
        {
          company: 'فیسبوک',
          position: 'مدیر محصول',
          logo: '/img/logos/brands/facebook.svg',
          period: 'مهر ۱۴۰۰ · آبان ۱۴۰۱',
        },
        {
          company: 'آتلسیان',
          position: 'مدیر محصول',
          logo: '/img/logos/brands/atlassian.svg',
          period: 'آبان ۱۳۹۹ · شهریور ۱۴۰۰',
        },
        {
          company: 'ایر‌بی‌ان‌بی',
          position: 'مدیر محصول',
          logo: '/img/logos/brands/airbnb.svg',
          period: 'اردیبهشت ۱۳۹۷ · مهر ۱۳۹۹',
        },
        {
          company: 'اسلک',
          position: 'مالک محصول',
          logo: '/img/logos/brands/slack.svg',
          period: 'اردیبهشت ۱۳۹۶ · دی ۱۳۹۶',
        },
        {
          company: 'گیت‌لب',
          position: 'مالک محصول',
          logo: '/img/logos/brands/gitlab.svg',
          period: 'مرداد ۱۳۹۵ · بهمن ۱۳۹۵',
        },
      ],
      languages: [
        {
          name: 'فارسی',
          mastery: 'گوینده بومی، مسلط',
          level: 100,
          icon: '/img/icons/flags/iran.svg',
        },
        {
          name: 'انگلیسی',
          mastery: 'گوینده بومی، مسلط',
          level: 100,
          icon: '/img/icons/flags/united-states-of-america.svg',
        },
        {
          name: 'فرانسوی',
          mastery: 'سلیس، نوشتاری و گفتاری',
          level: 85,
          icon: '/img/icons/flags/france.svg',
        },
        {
          name: 'آلمانی',
          mastery: 'سطح مبتدی',
          level: 25,
          icon: '/img/icons/flags/germany.svg',
        },
        {
          name: 'اسپانیایی',
          mastery: 'سطح مبتدی',
          level: 35,
          icon: '/img/icons/flags/spain.svg',
        },
      ],
      tools: [
        {
          name: 'ادوبی ایلاستریتور',
          mastery: 'سطح پیشرفته',
          level: 82,
          logo: '/img/stacks/illustrator.svg',
        },
        {
          name: 'نرم‌افزار جيرا',
          mastery: 'سطح متوسط',
          level: 56,
          logo: '/img/logos/brands/jira.svg',
        },
        {
          name: 'مایکروسافت آفیس',
          mastery: 'سطح حرفه‌ای',
          level: 95,
          logo: '/img/logos/brands/office.svg',
        },
      ],
      viewed: [
        {
          name: 'آرتور ب.',
          role: 'مدیر محصول',
          badge: '/img/icons/flags/united-states-of-america.svg',
          src: '/img/avatars/8.svg',
          text: 'AB',
        },
        {
          name: 'ملانی ال.',
          role: 'مدیر پروژه',
          badge: '/img/icons/flags/united-states-of-america.svg',
          src: '/img/avatars/25.svg',
          text: 'ML',
        },
        {
          name: 'جان اچ.',
          role: 'مهندس نرم‌افزار',
          badge: '/img/icons/flags/united-states-of-america.svg',
          src: '',
          text: 'JH',
        },
        {
          name: 'هاوارد د.',
          role: 'مدیر فروش',
          badge: '/img/icons/flags/united-states-of-america.svg',
          src: '/img/avatars/20.svg',
          text: 'HD',
        },
      ],
      skills: [
        {
          name: 'جاوااسکریپت',
          experience: 7,
          level: 95,
          logo: '/img/stacks/js.svg',
          related: {
            total: '2K',
            people: [
              {
                name: 'کلارک گ.',
                src: '/img/avatars/3.svg',
                text: 'CG',
              },
              {
                name: 'کلاریسا م.',
                src: '/img/avatars/5.svg',
                text: 'CM',
              },
              {
                name: 'جان اچ.',
                src: undefined,
                text: 'JH',
              },
              {
                name: 'بتی د.',
                src: '/img/avatars/24.svg',
                text: 'BD',
              },
            ],
          },
        },
        {
          name: 'مدیریت محصول',
          experience: 4,
          level: 95,
          icon: 'ph:archive-duotone',
          related: {
            total: '2K',
            people: [
              {
                name: 'کنشیرو وای.',
                text: 'KY',
              },
              {
                name: 'آرتور ب.',
                src: '/img/avatars/8.svg',
                text: 'AB',
              },
              {
                name: 'کندرا و.',
                src: '/img/avatars/10.svg',
                text: 'KW',
              },
            ],
          },
        },
        {
          name: 'Vue',
          experience: 10,
          level: 75,
          logo: '/img/stacks/vuejs.svg',
          related: {
            total: '2K',
            people: [
              {
                name: 'الیزابت ن.',
                src: '/img/avatars/21.svg',
                text: 'EN',
              },
              {
                name: 'هاوارد اف.',
                src: '/img/avatars/20.svg',
                text: 'HF',
              },
            ],
          },
        },
        {
          name: 'ری‌اکت',
          experience: 10,
          level: 68,
          logo: '/img/stacks/reactjs.svg',
          related: {
            total: '2K',
            people: [
              {
                name: 'هرمان م.',
                src: '/img/avatars/16.svg',
                text: 'HM',
              },
              {
                name: 'مارجوری ال.',
                src: '/img/avatars/25.svg',
                text: 'ML',
              },
              {
                name: 'گرتا ک.',
                src: '/img/avatars/22.svg',
                text: 'GK',
              },
              {
                name: 'مری و.',
                text: 'MW',
              },
            ],
          },
        },
      ],
      recommandations: [
        {
          name: 'کلارک گ.',
          role: 'مدیر محصول',
          src: '/img/avatars/3.svg',
          badge: '/img/icons/flags/united-states-of-america.svg',
          text: 'مایا یک مدیر محصول عالی است. او بسیار به کارش علاقه‌مند است و همیشه کارها را به موقع تحویل می‌دهد. من او را به هر شرکتی توصیه می‌کنم.',
          date: '۸ دی ۱۴۰۲',
        },
        {
          name: 'بتی سی.',
          role: 'مدیر محصول',
          src: '/img/avatars/24.svg',
          badge: '/img/icons/flags/united-states-of-america.svg',
          text: 'مایا یک مدیر محصول عالی است. او بسیار به کارش علاقه‌مند است و همیشه کارها را به موقع تحویل می‌دهد. من او را به هر شرکتی توصیه می‌کنم.',
          date: '۱۲ اسفند ۱۴۰۱',
        },
      ],
    },
    notifications: true,
  })
}
