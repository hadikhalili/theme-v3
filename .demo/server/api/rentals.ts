interface Rental {
  id: string
  picture: string
  name: string
  location: string
  rating: number
  details: {
    rooms: number
    beds: number
    bathrooms: number
  }
  amenities: {
    parking?: boolean
    wifi?: boolean
    heater?: boolean
    cleaning?: boolean
    other?: boolean
    otherThing?: boolean
    otherCoolThing?: boolean
    otherGreatCoolThing?: boolean
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
          return [item.name, item.location].some(item => item.match(filterRe))
        })
        .slice(offset, offset + perPage),
  }
})

async function getDemoData(): Promise<Rental[]> {
  return Promise.resolve([
    {
      id: '1',
      picture: '/img/illustrations/layouts/rental-1.svg',
      name: 'خیابان رد‌موند ۱۳۹۶',
      location:
        'خیابان ردمد، شماره 1396، آپارتمان 12، واحد H 102، لس آنجلس، CA',
      rating: 4,
      details: {
        rooms: 5,
        beds: 3,
        bathrooms: 1,
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true,
      },
    },
    {
      id: '2',
      picture: '/img/illustrations/layouts/rental-2.svg',
      name: 'خیابان ملبری شماره ۲۴',
      location: 'خیابان ملبری شماره ۲۴، واحد ۴۳، نیویورک، نیویورک',
      rating: 5,
      details: {
        rooms: 3,
        beds: 2,
        bathrooms: 1,
      },
      amenities: {
        wifi: true,
        cleaning: true,
      },
    },
    {
      id: '3',
      picture: '/img/illustrations/layouts/rental-3.svg',
      name: 'خیابان ۶۲ جان والبرگ',
      location:
        'خیابان ۶۲ جان والبِرگ، آپارتمان ۱۰، سوئیت ۲۴، لس‌آنجلس، کالیفرنیا',
      rating: 5,
      details: {
        rooms: 4,
        beds: 2,
        bathrooms: 2,
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true,
      },
    },
    {
      id: '4',
      picture: '/img/illustrations/layouts/rental-4.svg',
      name: 'خیابان منهاتن شماره ۴۸',
      location: 'خیابان منهاتن شماره ۴۸، واحد G12، نیویورک، نیویورک',
      rating: 5,
      details: {
        rooms: 5,
        beds: 4,
        bathrooms: 3,
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true,
      },
    },
    {
      id: '5',
      picture: '/img/illustrations/layouts/rental-5.svg',
      name: 'خیابان خیریه ۱۲',
      location: 'خیابان چریتی ۱۲، آپارتمان ۴۹، بروکلین، نیویورک',
      rating: 4,
      details: {
        rooms: 3,
        beds: 2,
        bathrooms: 1,
      },
      amenities: {
        parking: true,
        wifi: true,
        cleaning: true,
      },
    },
    {
      id: '6',
      picture: '/img/illustrations/layouts/rental-6.svg',
      name: 'خیابان نانوایی شماره ۲۳',
      location: 'خیابان نانوایی شماره ۲۳، واحد ۱۲۱، نیویورک، نیویورک',
      rating: 5,
      details: {
        rooms: 3,
        beds: 2,
        bathrooms: 1,
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true,
        otherGreatCoolThing: true,
      },
    },
    {
      id: '7',
      picture: '/img/illustrations/layouts/rental-7.svg',
      name: 'خیابان پاسادنا ۱۰۲۸',
      location: 'خیابان پاسادنا ۱۰۲۸، سوئیت F ۲۴، لس آنجلس، کالیفرنیا',
      rating: 5,
      details: {
        rooms: 7,
        beds: 5,
        bathrooms: 3,
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true,
      },
    },
    {
      id: '8',
      picture: '/img/illustrations/layouts/rental-8.svg',
      name: 'خیابان کلیسا شماره ۵۴',
      location: 'خیابان کلیسا شماره ۵۴، آپارتمان ۲، نیویورک، نیویورک',
      rating: 5,
      details: {
        rooms: 2,
        beds: 1,
        bathrooms: 1,
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
      },
    },
    {
      id: '9',
      picture: '/img/illustrations/layouts/rental-9.svg',
      name: 'منطقه شهر قدیمی شماره ۱۱۲',
      location: 'منطقه شهر قدیمی شماره ۱۱۲، آپارتمان ۵ واحد ۴۲، نیویورک، نیویورک',
      rating: 5,
      details: {
        rooms: 3,
        beds: 2,
        bathrooms: 1,
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
      },
    },
    {
      id: '10',
      picture: '/img/illustrations/layouts/rental-10.svg',
      name: 'خیابان سنت لئونارد شماره ۵۱',
      location: 'خیابان سنت لئونارد شماره ۵۱، واحد ۲۳، نیویورک، نیویورک',
      rating: 5,
      details: {
        rooms: 4,
        beds: 2,
        bathrooms: 1,
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
      },
    },
  ])
}
