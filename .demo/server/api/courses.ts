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
          return [item.name, item.category].some(item => item.match(filterRe))
        })
        .slice(offset, offset + perPage),
  }
})

async function getDemoData() {
  return Promise.resolve([
    {
      id: 0,
      name: 'معرفی به HTML5',
      picture: '/img/illustrations/layouts/course-1.jpg',
      category: 'توسعه وب',
      difficulty: 1,
      price: 26,
      skill: {
        icon: 'uiw:html5',
        name: 'Html5',
      },
      author: {
        id: 8,
        picture: '/images/avatars/svg/vuero-1.svg',
        username: 'اریک ک.',
        initials: 'EK',
        color: 'info',
      },
    },
    {
      id: 1,
      name: 'تسلط بر VueJS و تایپ‌اسکریپت',
      picture: '/img/illustrations/layouts/course-2.png',
      category: 'توسعه وب',
      difficulty: 4,
      price: 12,
      skill: {
        icon: 'teenyicons:vue-solid',
        name: 'Vue',
      },
      author: {
        id: 12,
        picture: '/img/avatars/12.jpg',
        username: 'جاشوا اس.',
        initials: 'JS',
        color: 'info',
      },
    },
    {
      id: 2,
      name: 'کشف CSS3 و استایل شیت‌ها',
      picture: '/img/illustrations/layouts/course-3.jpg',
      category: 'توسعه وب',
      difficulty: 2,
      price: 16,
      skill: {
        icon: 'simple-icons:css3',
        name: 'CSS3',
      },
      author: {
        id: 12,
        picture: '/img/avatars/5.jpg',
        username: 'مری ال.',
        initials: 'ML',
        color: 'info',
      },
    },
    {
      id: 3,
      name: 'با لاراول 10 شروع کنید',
      picture: '/img/illustrations/layouts/course-4.png',
      category: 'توسعه وب',
      difficulty: 3,
      price: 0,
      skill: {
        icon: 'teenyicons:laravel-solid',
        name: 'لاراول',
      },
      author: {
        id: 18,
        picture: '/img/avatars/18.jpg',
        username: 'استبان سی.',
        initials: 'EC',
        color: 'info',
      },
    },
    {
      id: 4,
      name: 'مبانی پایتون برای مبتدیان',
      picture: '/img/illustrations/layouts/course-5.jpeg',
      category: 'توسعه وب',
      difficulty: 1,
      price: 8,
      skill: {
        icon: 'akar-icons:python-fill',
        name: 'پایتون',
      },
      author: {
        id: 18,
        picture: '/img/avatars/18.jpg',
        username: 'استبان سی.',
        initials: 'EC',
        color: 'info',
      },
    },
    {
      id: 5,
      name: 'تسلط بر State با ری‌اکت Hooks',
      picture: '/img/illustrations/layouts/course-6.jpg',
      category: 'توسعه وب',
      difficulty: 4,
      price: 25,
      skill: {
        icon: 'teenyicons:react-solid',
        name: 'React.js',
      },
      author: {
        id: 30,
        picture: '/img/avatars/30.jpg',
        username: 'کلمانت د.',
        initials: 'CD',
        color: 'info',
      },
    },
    {
      id: 6,
      name: 'راه‌اندازی سرور اکپرس',
      picture: '/img/illustrations/layouts/course-7.png',
      category: 'توسعه وب',
      difficulty: 3,
      price: 12,
      skill: {
        icon: 'akar-icons:node-fill',
        name: 'Node.js',
      },
      author: {
        id: 38,
        picture: '/img/avatars/38.jpg',
        username: 'کریستی د.',
        initials: 'CD',
        color: 'info',
      },
    },
    {
      id: 7,
      name: 'یادگیری استفاده از Kubernetes',
      picture: '/img/illustrations/layouts/course-9.jpg',
      category: 'توسعه وب',
      difficulty: 5,
      price: 34,
      skill: {
        icon: 'pajamas:kubernetes',
        name: 'Kubernetes',
      },
      author: {
        id: 30,
        picture: '/img/avatars/30.jpg',
        username: 'کلمانت د.',
        initials: 'CD',
        color: 'info',
      },
    },
    {
      id: 8,
      name: 'دوره تصادفی دیگر انگولار',
      picture: '/img/illustrations/layouts/course-11.jpg',
      category: 'توسعه وب',
      difficulty: 4,
      price: 22,
      skill: {
        icon: 'simple-icons:angular',
        name: 'انگولار',
      },
      author: {
        id: 34,
        picture: '/img/avatars/34.jpg',
        username: 'دنیل ر.',
        initials: 'DR',
        color: 'info',
      },
    },
    {
      id: 9,
      name: 'آموزش مفاهیم پیشرفته داکر',
      picture: '/img/illustrations/layouts/course-12.jpg',
      category: 'توسعه وب',
      difficulty: 5,
      price: 35,
      skill: {
        icon: 'simple-icons:docker',
        name: 'داکر',
      },
      author: {
        id: 30,
        picture: '/img/avatars/30.jpg',
        username: 'کلمانت د.',
        initials: 'CD',
        color: 'info',
      },
    },
  ])
}
