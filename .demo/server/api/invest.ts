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
      title: 'بدهی ریسک‌پذیر',
      subtitle: 'سرمایه‌گذاری در استارتاپ‌ها',
      purpose: '20-35% از آخرین دور سرمایه‌گذاری',
      benefits: {
        concept: {
          label: 'چگونه کار می‌کند',
          link: undefined,
          features: [
            'سرمایه با کمترین رقیق‌سازی برای افزایش مسیر خود دریافت کنید',
            'بدون سهام، بدون صندلی هیئت‌مدیره، بدون ضمانت‌های شخصی',
            'تامین مالی سریع و انعطاف‌پذیر',
          ],
        },
        pros: {
          label: 'مزایا',
          link: undefined,
          features: [
            'وام‌های ما هزینه‌های پایین و شرایط مناسب برای بنیان‌گذاران دارند',
            'پرسشنامه آنلاین ما ۱۰ دقیقه برای تکمیل نیاز دارد',
            'ما در عرض ۲ روز کاری با شما تماس خواهیم گرفت',
            'از وام‌های ما برای رشد کسب‌وکار خود به روش و نیازهای خود استفاده کنید',
            'از اسناد دقت از دورۀ سرمایه‌گذاری خود استفاده کنید',
          ],
        },
        cons: {
          label: 'معایب',
          link: undefined,
          features: [
            'شما باید از اولین دور سرمایه‌گذاری خطرپذیر عبور کرده باشید',
            'هزینه‌های اضافی برای گارانتی و بیمه وجود دارد',
          ],
        },
      },
      targets: ['تملک‌ها', 'تحقیق و توسعه', 'بازاریابی', 'حقوق و دستمزد'],
      provider: {
        name: 'شرکت تایرو',
        logo: '/img/logos/logo.svg',
      },
    },
    {
      id: 2,
      title: 'پرداخت روزانه',
      subtitle: 'تجارت الکترونیک، دراپ‌شیپینگ',
      purpose: 'درآمد روزانه',
      benefits: {
        concept: {
          label: 'چگونه کار می‌کند',
          link: undefined,
          features: [
            'دریافت پرداخت پیشرفته از فروش‌های روز گذشته تا ۸۰٪',
            'دریافت ۲۰٪ اضافی زمانی که تأمین‌کننده شما پرداخت کامل را دریافت کند',
          ],
        },
        pros: {
          label: 'مزایا',
          link: undefined,
          features: [
            'روشی بسیار سریع برای دریافت هزینه‌های شما طی ۱-۲ روز کاری',
            'شما نیازی به واگذاری سهام یا ضمانت‌های شخصی ندارید',
          ],
        },
        cons: {
          label: 'معایب',
          link: undefined,
          features: [
            'پرداخت‌ها به درآمد روزانه موجود شما محدود می‌شود',
            'تأمین مالی آینده تضمین‌شده نیست و به عملکرد شما بستگی دارد.',
          ],
        },
      },
      targets: ['تبلیغات', 'موجودی'],
      provider: {
        name: 'شرکت تایرو',
        logo: '/img/logos/logo.svg',
      },
    },
    {
      id: 3,
      title: 'بر اساس درآمد',
      subtitle: 'تجارت الکترونیک',
      purpose: '1-3 ماه از درآمد',
      benefits: {
        concept: {
          label: 'چگونه کار می‌کند',
          link: undefined,
          features: [
            'دریافت پیش‌پرداخت ۱-۳ ماهه از درآمد متوسط ماهانه شما',
            'شما به ارائه‌دهنده خود یک هزینه ثابت پرداخت می‌کنید تا زمانی که تمام درآمدتان به حساب بانکی شما واریز شود',
          ],
        },
        pros: {
          label: 'مزایا',
          link: undefined,
          features: [
            'روشی بسیار سریع برای دریافت هزینه‌ها در طی ۱ تا ۵ روز کاری',
            'شما نیازی به واگذاری سهام یا ضمانت‌های شخصی ندارید',
            'بازپرداخت‌های شما با درآمدتان بالا و پایین می‌رود',
          ],
        },
        cons: {
          label: 'معایب',
          link: undefined,
          features: [
            'حاشیه سود ناخالص شما باید به اندازه کافی بالا باشد تا از این سیستم تأمین مالی پشتیبانی کند',
            'تأمین مالی آینده تضمین‌شده نیست و به عملکرد شما بستگی دارد.',
          ],
        },
      },
      targets: ['تبلیغات', 'موجودی'],
      provider: {
        name: 'شرکت تایرو',
        logo: '/img/logos/logo.svg',
      },
    },
    {
      id: 4,
      title: 'تأمین مالی SaaS',
      subtitle: 'SaaS، نرم‌افزار B2B',
      purpose: '۳۰-۶۰٪ از درآمد سالانه بازگشتی شما',
      benefits: {
        concept: {
          label: 'چگونه کار می‌کند',
          link: undefined,
          features: [
            '۶۰٪ از درآمد سالانه خود را در یک خط اعتباری انعطاف‌پذیر دریافت کنید',
            'فقط آنچه برای این خط ویژه نیاز دارید برداشت کنید و زمانی که می‌خواهید بازپرداخت کنید',
            'بازپرداخت به ارائه‌دهنده با اقساط ماهانه برابر',
          ],
        },
        pros: {
          label: 'مزایا',
          link: undefined,
          features: [
            'غیردلوتیو بودن به این معناست که هرگز نیازی به واگذاری سهام نخواهید داشت.',
            'بدون تعهدات، بهره‌های امنیتی، بدون ضمانت‌های شخصی',
            'خط اعتباری شما با افزایش درآمدتان افزایش می‌یابد',
            'it\'s very fast, you can be funded in less than a week',
          ],
        },
        cons: {
          label: 'معایب',
          link: undefined,
          features: [
            'حداقل زمان لازم برای نقدینگی ۶ ماه است',
            'سرمایه‌گذاری آینده تضمین‌شده نیست و به عملکرد شما بستگی دارد',
          ],
        },
      },
      targets: ['تبلیغات', 'هزینه‌ها', 'استخدام'],
      provider: {
        name: 'شرکت تایرو',
        logo: '/img/logos/logo.svg',
      },
    },
    {
      id: 5,
      title: 'تحقیق و توسعه اعتبارات مالیات',
      subtitle: 'استارتاپ‌ها',
      purpose: 'بودجه سال گذشته برای تحقیق و توسعه محصول',
      benefits: {
        concept: {
          label: 'چگونه کار می‌کند',
          link: undefined,
          features: [
            'فرم‌های اعتبار مالیاتی تحقیق و توسعه خود را پر کرده و به دولت فدرال توسط کارشناسان ما ارسال کنید',
            'در صورت تأیید، تا ۱۵۰,۰۰۰,۰۰۰ تومان اعتبار مالیاتی دریافت کنید',
          ],
        },
        pros: {
          label: 'مزایا',
          link: undefined,
          features: [
            'غیرمخدوش بودن یعنی اگر شرکت مالیات حقوق پرداخت کند، مالکیت آن به شما تعلق دارد',
            'هزینه‌های حسابداری و مالیاتی خود را با قیمت ارزان بهینه کنید',
          ],
        },
        cons: {
          label: 'معایب',
          link: undefined,
          features: [
            'وام تنها با آخرین اظهارنامه مالیاتی شما قابل ادعا است - نمی‌توانید از اظهارنامه‌های مالیاتی سال‌های گذشته استفاده کنید',
            'پول به سرعت در دسترس نیست و به ارائه‌دهنده‌ای که استفاده می‌کنید بستگی دارد',
          ],
        },
      },
      targets: ['مجرا', 'حقوق و دستمزد', 'تبلیغات'],
      provider: {
        name: 'شرکت تایرو',
        logo: '/img/logos/logo.svg',
      },
    },
    {
      id: 6,
      title: 'سهام',
      subtitle: 'استارتاپ‌ها',
      purpose: 'متغیر است و به برنامه تجاری و نتایج بستگی دارد',
      benefits: {
        concept: {
          label: 'چگونه کار می‌کند',
          link: undefined,
          features: [
            'استارتاپ‌ها می‌توانند بخشی از شرکت خود را به سرمایه‌گذاران در ازای دریافت سرمایه بفروشند',
            'می‌توانید در چندین مرحله به عنوان شرکت رشد می‌کند سرمایه‌گذاری دریافت کنید',
          ],
        },
        pros: {
          label: 'مزایا',
          link: undefined,
          features: [
            'می‌توانید مقادیر زیادی سرمایه جمع کنید',
            'سرمایه‌گذاران باکیفیت می‌توانند تخصص و ارتباطات ارزشمندی به شرکت شما بیاورند، به خصوص اگر عضو هیئت مدیره باشند',
          ],
        },
        cons: {
          label: 'معایب',
          link: undefined,
          features: [
            'باید از فرآیند سخت‌گیرانه جمع‌آوری سرمایه عبور کنید، از ارائه تا مذاکره درباره شرایط',
            'شما سهم و بخشی از کنترل شرکت خود را واگذار می‌کنید',
          ],
        },
      },
      targets: ['کسب‌وکار', 'حقوق و دستمزد', 'تملیک‌ها'],
      provider: {
        name: 'شرکت تایرو',
        logo: '/img/logos/logo.svg',
      },
    },
  ])
}
