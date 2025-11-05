export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = parseInt((query.perPage as string) || '5', 10)
  const page = parseInt((query.page as string) || '1', 10)
  const filter = (query.filter as string) || ''
  const slug = (query.slug as string) || ''

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
          return [item.name, item.owner.name, item.category].some(item =>
            item.match(filterRe),
          )
        })
        .slice(offset, offset + perPage),
    recent: data.filter(item => item.recent === true),
    project: slug ? data.find(item => item.slug === slug) : undefined,
  }
})

async function getDemoData() {
  return Promise.resolve([
    {
      id: '1',
      slug: 'delivery-app-project',
      name: 'پروژه داشبورد مدیریتی تیلوایز',
      dueDate: 'مرداد ۱۳۹۹',
      updated: '۳ دقیقه پیش',
      image: '/img/apps/1.png',
      completed: 75,
      recent: false,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 7,
        avatar: '/img/avatars/3.svg',
        badge: '/img/stacks/reactjs.svg',
        role: 'توسعه‌دهنده فرانت‌اند',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'کلارک گ.',
        text: 'CG',
      },
      team: [
        {
          'id': 27,
          'src': '/img/avatars/24.svg',
          'badge': '/img/stacks/illustrator.svg',
          'role': 'طراح UI/UX',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'کارمن ای.',
          'data-nui-tooltip': 'کارمن ای.',
          'text': 'CE',
        },
        {
          'id': 15,
          'src': '/img/avatars/15.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده فول استک',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'جاش سی.',
          'data-nui-tooltip': 'جاش سی.',
          'text': 'JC',
        },
        {
          'id': 12,
          'src': '/img/avatars/12.svg',
          'badge': '/img/stacks/csharp.svg',
          'role': 'توسعه‌دهنده بک‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'مارجوری ال.',
          'data-nui-tooltip': 'مارجوری ال.',
          'text': 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Html5',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/html5.svg',
        },
        {
          name: 'جاوااسکریپت',
          description: 'زبان برنامه‌نویسی',
          icon: '/img/stacks/js.svg',
        },
        {
          name: 'Vue',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/vuejs.svg',
        },
        {
          name: 'ری‌اکت',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/reactjs.svg',
        },
        {
          name: 'تیلویند',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/tailwind.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/flashlite.svg',
        name: 'فلاش‌لایت',
        text: 'تحویل',
      },
    },
    {
      id: '2',
      slug: 'health-and-fitness-dashboard',
      name: 'فروشگاه لوازم خانگی نفوس',
      dueDate: 'مهر ۱۳۹۹',
      updated: '5 ساعت پیش',
      image: '/img/apps/2.png',
      completed: 75,
      recent: true,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 8,
        avatar: '/img/avatars/12.svg',
        badge: '/img/stacks/js.svg',
        role: 'طراح UI/UX',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'مارجوری ال.',
        text: 'ML',
      },
      team: [
        {
          'id': 13,
          'src': '/img/avatars/10.svg',
          'badge': '/img/stacks/reactjs.svg',
          'role': 'مهندس نرم‌افزار',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'کندرا و.',
          'data-nui-tooltip': 'کندرا و.',
          'text': 'KW',
        },
        {
          'id': 21,
          'src': '/img/avatars/21.svg',
          'badge': '/img/stacks/html5.svg',
          'role': 'طراح رابط کاربری',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'الیزابت ف.',
          'data-nui-tooltip': 'الیزابت ف.',
          'text': 'EF',
        },
        {
          'id': 27,
          'src': '/img/avatars/24.svg',
          'badge': '/img/stacks/illustrator.svg',
          'role': 'طراح UI/UX',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'کارمن ای.',
          'data-nui-tooltip': 'کارمن ای.',
          'text': 'CE',
        },
        {
          'id': 15,
          'src': '/img/avatars/15.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده فول استک',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'جاش سی.',
          'data-nui-tooltip': 'جاش سی.',
          'text': 'JC',
        },
        {
          'id': 12,
          'src': '/img/avatars/16.svg',
          'badge': '/img/stacks/react.svg',
          'role': 'توسعه‌دهنده فول استک',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'هرمان م.',
          'data-nui-tooltip': 'هرمان م.',
          'text': 'HM',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'اندروید',
          description: 'سیستم‌عامل موبایل',
          icon: '/img/stacks/android.svg',
        },
        {
          name: 'ری‌اکت',
          description: 'کتابخانه جاوا اسکریپت',
          icon: '/img/stacks/reactjs.svg',
        },
        {
          name: 'HTML5',
          description: 'زبان نشانه‌گذاری',
          icon: '/img/stacks/html5.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/nitro.svg',
        name: 'نیترو',
        text: 'سلامتی',
      },
    },
    {
      id: '3',
      slug: 'learning-tracker-dashboard',
      name: 'قالب چندمنظوره لیست‌کیت',
      dueDate: 'شهریور ۱۳۹۹',
      updated: '5 ساعت پیش',
      image: '/img/apps/3.png',
      completed: 75,
      recent: false,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 25,
        avatar: '/img/avatars/2.svg',
        badge: '/img/stacks/js.svg',
        role: 'طراح UI/UX',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'مایا ر.',
        text: 'MR',
      },
      team: [
        {
          'id': 14,
          'src': '/img/avatars/14.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'طراح UI/UX',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'رایان ب.',
          'data-nui-tooltip': 'رایان ب.',
          'text': 'RB',
        },
        {
          'id': 27,
          'src': '/img/avatars/24.svg',
          'badge': '/img/stacks/illustrator.svg',
          'role': 'طراح UI/UX',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'کارمن ای.',
          'data-nui-tooltip': 'کارمن ای.',
          'text': 'CE',
        },
        {
          'id': 15,
          'src': '/img/avatars/15.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده فول استک',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'جاش سی.',
          'data-nui-tooltip': 'جاش سی.',
          'text': 'JC',
        },
        {
          'id': 12,
          'src': '/img/avatars/12.svg',
          'badge': '/img/stacks/csharp.svg',
          'role': 'توسعه‌دهنده بک‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'مارجوری ال.',
          'data-nui-tooltip': 'مارجوری ال.',
          'text': 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'پایتون',
          description: 'زبان برنامه‌نویسی',
          icon: '/img/stacks/python.svg',
        },
        {
          name: 'C#',
          description: 'زبان برنامه‌نویسی',
          icon: '/img/stacks/csharp.svg',
        },
        {
          name: 'انگولار',
          description: 'کتابخانه جاوا اسکریپت',
          icon: '/img/stacks/angular.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/slicer.svg',
        name: 'اسلایسر اینک.',
        text: 'بازدهی',
      },
    },
    {
      id: '4',
      slug: 'banking-and-finance-dashboard',
      name: 'وب اپلیکیشن لندینگ وولک',
      dueDate: 'مهر ۱۳۹۹',
      updated: '5 ساعت پیش',
      image: '/img/apps/4.png',
      completed: 75,
      recent: true,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 23,
        avatar: '/img/avatars/16.svg',
        badge: '/img/stacks/js.svg',
        role: 'طراح UI/UX',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'هرمان م.',
        text: 'HM',
      },
      team: [
        {
          'id': 13,
          'src': '/img/avatars/1.svg',
          'badge': '/img/stacks/vuejs.svg',
          'role': 'معمار راه‌حل',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'راب اچ.',
          'data-nui-tooltip': 'راب اچ.',
          'text': 'RH',
        },
        {
          'id': 21,
          'src': '/img/avatars/20.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده فرانت‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'آنتونی د.',
          'data-nui-tooltip': 'آنتونی د.',
          'text': 'AD',
        },
        {
          'id': 27,
          'src': '/img/avatars/24.svg',
          'badge': '/img/stacks/illustrator.svg',
          'role': 'طراح UI/UX',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'کارمن ای.',
          'data-nui-tooltip': 'کارمن ای.',
          'text': 'CE',
        },
        {
          'id': 15,
          'src': '/img/avatars/15.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده فول استک',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'جاش سی.',
          'data-nui-tooltip': 'جاش سی.',
          'text': 'JC',
        },
        {
          'id': 12,
          'src': '/img/avatars/12.svg',
          'badge': '/img/stacks/csharp.svg',
          'role': 'توسعه‌دهنده بک‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'مارجوری ال.',
          'data-nui-tooltip': 'مارجوری ال.',
          'text': 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Vue',
          description: 'کتابخانه جاوا اسکریپت',
          icon: '/img/stacks/vuejs.svg',
        },
        {
          name: 'اندروید',
          description: 'چارچوب موبایل',
          icon: '/img/stacks/android.svg',
        },
        {
          name: 'جاوااسکریپت',
          description: 'زبان برنامه‌نویسی',
          icon: '/img/stacks/js.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/okano.svg',
        name: 'اوکانو',
        text: 'بانکداری',
      },
    },
    {
      id: '5',
      slug: 'resume-management-mobile-app',
      name: 'وب اپلیکیشن شرکتی میزل',
      dueDate: 'مهر ۱۳۹۹',
      updated: '۲ ساعت پیش',
      image: '/img/apps/5.png',
      completed: 75,
      recent: false,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 11,
        avatar: '/img/avatars/11.svg',
        badge: '/img/stacks/js.svg',
        role: 'طراح UI/UX',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'مایک بی.',
        text: 'MB',
      },
      team: [
        {
          'id': 30,
          'src': '/img/avatars/10.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده فرانت‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'کندرا و.',
          'data-nui-tooltip': 'کندرا و.',
          'text': 'KW',
        },
        {
          'id': 39,
          'src': '/img/avatars/25.svg',
          'badge': '/img/stacks/reactjs.svg',
          'role': 'توسعه‌دهنده فرانت‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'ملانی ال.',
          'data-nui-tooltip': 'ملانی ال.',
          'text': 'ML',
        },
        {
          'id': 27,
          'src': '/img/avatars/24.svg',
          'badge': '/img/stacks/illustrator.svg',
          'role': 'طراح UI/UX',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'کارمن ای.',
          'data-nui-tooltip': 'کارمن ای.',
          'text': 'CE',
        },
        {
          'id': 12,
          'src': '/img/avatars/12.svg',
          'badge': '/img/stacks/csharp.svg',
          'role': 'توسعه‌دهنده بک‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'مارجوری ال.',
          'data-nui-tooltip': 'مارجوری ال.',
          'text': 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Html5',
          description: 'زبان نشانه‌گذاری',
          icon: '/img/stacks/html5.svg',
        },
        {
          name: 'اندروید',
          description: 'چارچوب موبایل',
          icon: '/img/stacks/android.svg',
        },
        {
          name: 'سوئیفت',
          description: 'چارچوب موبایل',
          icon: '/img/stacks/swift.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/clover.svg',
        name: 'کلوور',
        text: 'اپلیکیشن SaaS',
      },
    },
    {
      id: '6',
      slug: 'banking-landing-page',
      name: 'گالری استودیو عکاسی فتوگام',
      dueDate: 'آذر ۱۳۹۹',
      updated: '3 روز پیش',
      image: '/img/apps/6.png',
      completed: 75,
      recent: false,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 9,
        avatar: '/img/avatars/9.svg',
        badge: '/img/stacks/js.svg',
        role: 'طراح UI/UX',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'آنا ب.',
        text: 'AB',
      },
      team: [
        {
          'id': 15,
          'src': '/img/avatars/15.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده فول استک',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'جاش سی.',
          'data-nui-tooltip': 'جاش سی.',
          'text': 'JS',
        },
        {
          'id': 59,
          'src': '/img/avatars/2.svg',
          'badge': '/img/stacks/illustrator.svg',
          'role': 'هنرمند گرافیک',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'مایا ر.',
          'data-nui-tooltip': 'مایا ر.',
          'text': 'MR',
        },
        {
          'id': 40,
          'src': '/img/avatars/20.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده بک‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'هارولد اس',
          'data-nui-tooltip': 'هارولد اس',
          'text': 'HS',
        },
        {
          'id': 8,
          'src': '/img/avatars/11.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'معمار راه‌حل',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'مایک بی.',
          'data-nui-tooltip': 'مایک بی.',
          'text': 'MB',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'C#',
          description: 'زبان برنامه‌نویسی',
          icon: '/img/stacks/csharp.svg',
        },
        {
          name: 'ری‌اکت',
          description: 'کتابخانه جاوا اسکریپت',
          icon: '/img/stacks/reactjs.svg',
        },
        {
          name: 'نود جی‌اس',
          description: 'فریم‌ورک جاوا اسکریپت',
          icon: '/img/stacks/nodejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/bankaria.svg',
        name: 'بانکاریا',
        text: 'راه‌حل‌های بانکی',
      },
    },
    {
      id: '7',
      slug: 'learning-app-design',
      name: 'وبلاگ شخصی و خبری آیدکو',
      dueDate: 'آبان ۱۳۹۹',
      updated: '۱ ساعت پیش',
      image: '/img/apps/7.png',
      completed: 75,
      recent: true,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 25,
        avatar: '/img/avatars/25.svg',
        badge: '/img/stacks/js.svg',
        role: 'طراح UI/UX',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'ملانی ال.',
        text: 'ML',
      },
      team: [
        {
          'id': 11,
          'src': '/img/avatars/11.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده فرانت‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'مایک بی.',
          'data-nui-tooltip': 'مایک بی.',
          'text': 'MB',
        },
        {
          'id': 11,
          'src': '/img/avatars/8.svg',
          'badge': '/img/stacks/android.svg',
          'role': 'توسعه‌دهنده موبایل',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'آرتور ب.',
          'data-nui-tooltip': 'آرتور ب.',
          'text': 'AB',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'ری‌اکت',
          description: 'کتابخانه جاوا اسکریپت',
          icon: '/img/stacks/reactjs.svg',
        },
        {
          name: 'اندروید',
          description: 'چارچوب موبایل',
          icon: '/img/stacks/android.svg',
        },
        {
          name: 'سوئیفت',
          description: 'چارچوب موبایل',
          icon: '/img/stacks/swift.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/courserio.svg',
        name: 'کورسریو',
        text: 'آموزش الکترونیکی',
      },
    },
    {
      id: '8',
      slug: 'educational-app-design',
      name: 'رزومه و پورتفوی حوسی',
      dueDate: 'آبان ۱۳۹۹',
      updated: '۴ روز پیش',
      image: '/img/apps/8.png',
      completed: 75,
      recent: false,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 5,
        avatar: '/img/avatars/5.svg',
        badge: '/img/stacks/js.svg',
        role: 'طراح UI/UX',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'کلاریسا م.',
        text: 'CM',
      },
      team: [
        {
          'id': 21,
          'src': '/img/avatars/9.svg',
          'badge': '/img/stacks/illustrator.svg',
          'role': 'طراح UI/UX',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'آنا ب.',
          'data-nui-tooltip': 'آنا ب.',
          'text': 'AB',
        },
        {
          'id': 29,
          'src': '/img/avatars/13.svg',
          'badge': '/img/stacks/reactjs.svg',
          'role': 'توسعه‌دهنده فرانت‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'هنری سی.',
          'data-nui-tooltip': 'هنری سی.',
          'text': 'HC',
        },
        {
          'id': 33,
          'src': '/img/avatars/22.svg',
          'badge': '/img/stacks/csharp.svg',
          'role': 'توسعه‌دهنده بک‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'گرتا ک.',
          'data-nui-tooltip': 'گرتا ک.',
          'text': 'GK',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'نود جی‌اس',
          description: 'زمان‌اجرای جاوااسکریپت',
          icon: '/img/stacks/nodejs.svg',
        },
        {
          name: 'Sass',
          description: 'پیش‌پردازنده CSS',
          icon: '/img/stacks/sass.svg',
        },
        {
          name: 'Vue',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/gradius.svg',
        name: 'گرادیوس',
        text: 'آموزش دیجیتال',
      },
    },
    {
      id: '9',
      slug: 'banking-solution-website',
      name: 'رزومه و پورتفوی آیکانیک‌وبز',
      dueDate: 'مهر ۱۳۹۹',
      updated: '۲ ساعت پیش',
      image: '/img/apps/9.png',
      completed: 75,
      recent: false,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 27,
        avatar: '/img/avatars/24.svg',
        badge: '/img/stacks/js.svg',
        role: 'توسعه‌دهنده فرانت‌اند',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'کارمن ای.',
        text: 'CE',
      },
      team: [
        {
          'id': 30,
          'src': '/img/avatars/3.svg',
          'badge': '/img/stacks/illustrator.svg',
          'role': 'طراح UI/UX',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'کلارک گ.',
          'data-nui-tooltip': 'کلارک گ.',
          'text': 'CG',
        },
        {
          'id': 19,
          'src': '/img/avatars/19.svg',
          'badge': '/img/stacks/nodejs.svg',
          'role': 'توسعه‌دهنده فول استک',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'گرتا ک.',
          'data-nui-tooltip': 'گرتا ک.',
          'text': 'GK',
        },
        {
          'id': 15,
          'src': '/img/avatars/15.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده فول استک',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'جاش سی.',
          'data-nui-tooltip': 'جاش سی.',
          'text': 'JC',
        },
        {
          'id': 12,
          'src': '/img/avatars/12.svg',
          'badge': '/img/stacks/csharp.svg',
          'role': 'توسعه‌دهنده بک‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'مارجوری ال.',
          'data-nui-tooltip': 'مارجوری ال.',
          'text': 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'نود جی‌اس',
          description: 'زمان‌اجرای جاوااسکریپت',
          icon: '/img/stacks/nodejs.svg',
        },
        {
          name: 'بولما',
          description: 'چارچوب CSS',
          icon: '/img/stacks/framework_css/bulma.svg',
        },
        {
          name: 'Vue',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/okano.svg',
        name: 'اوکانو',
        text: 'بانکداری',
      },
    },
    {
      id: '10',
      slug: 'hr-webapp-design',
      name: 'وب‌اپلیکیشن آژانس تبلیغاتی میزل',
      dueDate: 'مرداد ۱۳۹۹',
      updated: '۲ ساعت پیش',
      image: '/img/apps/10.png',
      completed: 75,
      recent: false,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 27,
        avatar: '/img/avatars/24.svg',
        badge: '/img/stacks/js.svg',
        role: 'توسعه‌دهنده فرانت‌اند',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'کارمن ای.',
        text: 'CE',
      },
      team: [
        {
          'id': 12,
          'src': '/img/avatars/12.svg',
          'badge': '/img/stacks/csharp.svg',
          'role': 'توسعه‌دهنده بک‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'مارجوری ال.',
          'data-nui-tooltip': 'مارجوری ال.',
          'text': 'ML',
        },
        {
          'id': 15,
          'src': '/img/avatars/15.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده فول استک',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'جاش سی.',
          'data-nui-tooltip': 'جاش سی.',
          'text': 'JC',
        },
        {
          'id': 24,
          'src': '/img/avatars/22.svg',
          'badge': '/img/stacks/illustrator.svg',
          'role': 'طراح UI/UX',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'ساندرین سی.',
          'data-nui-tooltip': 'ساندرین سی.',
          'text': 'SC',
        },
        {
          'id': 22,
          'src': '/img/avatars/10.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده فرانت‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'کندرا و.',
          'data-nui-tooltip': 'کندرا و.',
          'text': 'KW',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'نود جی‌اس',
          description: 'زمان‌اجرای جاوااسکریپت',
          icon: '/img/stacks/nodejs.svg',
        },
        {
          name: 'تیلویند سی‌اس‌اس',
          description: 'چارچوب CSS',
          icon: '/img/stacks/framework_css/tailwindcss.svg',
        },
        {
          name: 'Vue',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/rekrew.svg',
        name: 'رکرو',
        text: 'نرم‌افزار استخدام',
      },
    },
    {
      id: '11',
      slug: 'ice-cream-delivery-dashboard',
      name: 'وبلاک شخصی و خبری آیدکو',
      dueDate: 'اردیبهشت ۱۴۰۰',
      updated: '۲ ساعت پیش',
      image: '/img/apps/11.png',
      completed: 75,
      recent: false,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 13,
        avatar: '/img/avatars/13.svg',
        badge: '/img/stacks/js.svg',
        role: 'طراح UI/UX',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'تری اس.',
        text: 'TS',
      },
      team: [
        {
          'id': 28,
          'src': '/img/avatars/9.svg',
          'badge': '/img/stacks/android.svg',
          'role': 'توسعه‌دهنده موبایل',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'آنا ب.',
          'data-nui-tooltip': 'آنا ب.',
          'text': 'AB',
        },
        {
          'id': 27,
          'src': '/img/avatars/24.svg',
          'badge': '/img/stacks/reactjs.svg',
          'role': 'توسعه‌دهنده فرانت‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'کارمن ای.',
          'data-nui-tooltip': 'کارمن ای.',
          'text': 'CE',
        },
        {
          'id': 15,
          'src': '/img/avatars/15.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده فول استک',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'جاش سی.',
          'data-nui-tooltip': 'جاش سی.',
          'text': 'JC',
        },
        {
          'id': 12,
          'src': '/img/avatars/12.svg',
          'badge': '/img/stacks/csharp.svg',
          'role': 'توسعه‌دهنده بک‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'مارجوری ال.',
          'data-nui-tooltip': 'مارجوری ال.',
          'text': 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'نود جی‌اس',
          description: 'زمان‌اجرای جاوااسکریپت',
          icon: '/img/stacks/nodejs.svg',
        },
        {
          name: 'تیلویند سی‌اس‌اس',
          description: 'چارچوب CSS',
          icon: '/img/stacks/framework_css/tailwindcss.svg',
        },
        {
          name: 'Vue',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/meatboy.svg',
        name: 'میت‌بوی',
        text: 'فناوری غذا',
      },
    },
    {
      id: '12',
      slug: 'mobile-app-landing-page',
      name: 'قالب جندمنظوره لیست‌کیت',
      dueDate: 'آبان ۱۳۹۹',
      updated: '۴ روز پیش',
      image: '/img/apps/12.png',
      completed: 75,
      recent: false,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 12,
        avatar: '/img/avatars/10.svg',
        badge: '/img/stacks/js.svg',
        role: 'طراح UI/UX',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'کندرا و.',
        text: 'KW',
      },
      team: [
        {
          'id': 119,
          'src': '/img/avatars/22.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'طراح UI/UX',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'سارا سی.',
          'data-nui-tooltip': 'سارا سی.',
          'text': 'SC',
        },
        {
          'id': 27,
          'src': '/img/avatars/24.svg',
          'badge': '/img/stacks/vuejs.svg',
          'role': 'توسعه‌دهنده فرانت‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'کارمن ای.',
          'data-nui-tooltip': 'کارمن ای.',
          'text': 'CE',
        },
        {
          'id': 15,
          'src': '/img/avatars/15.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده فول استک',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'جاش سی.',
          'data-nui-tooltip': 'جاش سی.',
          'text': 'JC',
        },
        {
          'id': 12,
          'src': '/img/avatars/12.svg',
          'badge': '/img/stacks/csharp.svg',
          'role': 'توسعه‌دهنده بک‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'مارجوری ال.',
          'data-nui-tooltip': 'مارجوری ال.',
          'text': 'ML',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'لاراول',
          description: 'چارچوب PHP',
          icon: '/img/stacks/laravel.svg',
        },
        {
          name: 'تیلویند سی‌اس‌اس',
          description: 'چارچوب CSS',
          icon: '/img/stacks/framework_css/tailwindcss.svg',
        },
        {
          name: 'Vue',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/mobilol.svg',
        name: 'موبیلول',
        text: 'برنامه تلفن همراه',
      },
    },
    {
      id: '13',
      slug: 'web-marketing-landing-page',
      name: 'رزومه و پورتفوی بنتوفولیو',
      dueDate: 'آبان ۱۳۹۹',
      updated: '۳ دقیقه پیش',
      image: '/img/apps/13.png',
      completed: 75,
      recent: false,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 12,
        avatar: '/img/avatars/20.svg',
        badge: '/img/stacks/js.svg',
        role: 'طراح UI/UX',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'هارولد اس.',
        text: 'HS',
      },
      team: [
        {
          'id': 8,
          'src': '/img/avatars/3.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'توسعه‌دهنده فرانت‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'کلارک گ.',
          'data-nui-tooltip': 'کلارک گ.',
          'text': 'CG',
        },
        {
          'id': 15,
          'src': '/img/avatars/16.svg',
          'badge': '/img/stacks/android.svg',
          'role': 'توسعه‌دهنده موبایل',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'هرمان م.',
          'data-nui-tooltip': 'هرمان م.',
          'text': 'HM',
        },
        {
          'id': 12,
          'src': '/img/avatars/8.svg',
          'badge': '/img/stacks/python.svg',
          'role': 'توسعه‌دهنده بک‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'ماریو ت.',
          'data-nui-tooltip': 'ماریو ت.',
          'text': 'MT',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'Html5',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/html5.svg',
        },
        {
          name: 'بولما',
          description: 'چارچوب CSS',
          icon: '/img/stacks/framework_css/bulma.svg',
        },
        {
          name: 'Vue',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/metamovies.svg',
        name: 'متاموویز',
        text: 'رسانه دیجیتال',
      },
    },
    {
      id: '14',
      slug: 'startup-landing-page',
      name: 'وب‌سایت شخصی جوسی',
      dueDate: 'آبان ۱۳۹۹',
      updated: '۳ دقیقه پیش',
      image: '/img/apps/14.png',
      completed: 75,
      recent: false,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 15,
        avatar: '/img/avatars/15.svg',
        badge: '/img/stacks/js.svg',
        role: 'طراح UI/UX',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'جاش ک.',
        text: 'JK',
      },
      team: [
        {
          'id': 31,
          'src': '/img/avatars/21.svg',
          'badge': '/img/stacks/illustrator.svg',
          'role': 'طراح UI/UX',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'هاوارد د.',
          'data-nui-tooltip': 'هاوارد د.',
          'text': 'HD',
        },
        {
          'id': 15,
          'src': '/img/avatars/16.svg',
          'badge': '/img/stacks/python.svg',
          'role': 'معمار راه‌حل',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'هرمان م.',
          'data-nui-tooltip': 'هرمان م.',
          'text': 'HM',
        },
        {
          'id': 12,
          'src': '/img/avatars/8.svg',
          'badge': '/img/stacks/csharp.svg',
          'role': 'توسعه‌دهنده بک‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'ماریو ت.',
          'data-nui-tooltip': 'ماریو ت.',
          'text': 'MT',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'نود جی‌اس',
          description: 'زمان‌اجرای جاوااسکریپت',
          icon: '/img/stacks/nodejs.svg',
        },
        {
          name: 'تیلویند سی‌اس‌اس',
          description: 'چارچوب CSS',
          icon: '/img/stacks/framework_css/tailwindcss.svg',
        },
        {
          name: 'Vue',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/vuejs.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/bingo.svg',
        name: 'بینگو',
        text: 'استارتاپ',
      },
    },
    {
      id: '15',
      slug: 'expense-management-system',
      name: 'وب‌اپلیکیشن لندینگ وولک',
      dueDate: 'اردیبهشت ۱۴۰۰',
      updated: '۲ روز پیش',
      image: '/img/apps/15.png',
      completed: 75,
      recent: true,
      category: 'طراحی UI/UX',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. اول تو چه می‌گویی؟ حتی بهترین؟ آیا از گرفتن شاگرد می‌ترسی؟',
      meta: {
        sprintPerWeek: 2,
        monthDuration: 3,
        budgetType: 'ثابت',
      },
      owner: {
        id: 39,
        avatar: '/img/avatars/16.svg',
        badge: '/img/stacks/js.svg',
        role: 'طراح UI/UX',
        bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
        name: 'هرمان م.',
        text: 'HM',
      },
      team: [
        {
          'id': 5,
          'src': '/img/avatars/5.svg',
          'badge': '/img/stacks/js.svg',
          'role': 'طراح UI/UX',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'کلاریسا م.',
          'data-nui-tooltip': 'کلاریسا م.',
          'text': 'CM',
        },
        {
          'id': 15,
          'src': '/img/avatars/16.svg',
          'badge': '/img/stacks/vuejs.svg',
          'role': 'توسعه‌دهنده فرانت‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'هرمان م.',
          'data-nui-tooltip': 'هرمان م.',
          'text': 'HM',
        },
        {
          'id': 12,
          'src': '/img/avatars/8.svg',
          'badge': '/img/stacks/reactjs.svg',
          'role': 'توسعه‌دهنده فرانت‌اند',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'ماریو ت.',
          'data-nui-tooltip': 'ماریو ت.',
          'text': 'MT',
        },
        {
          'id': 24,
          'src': '/img/avatars/24.svg',
          'badge': '/img/stacks/csharp.svg',
          'role': 'معمار راه‌حل',
          'bio': 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
          'tooltip': 'آنا ب.',
          'data-nui-tooltip': 'آنا ب.',
          'text': 'AB',
        },
      ],
      files: [
        {
          id: 0,
          name: 'company-ux-guide.pdf',
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
          name: 'tech-summit-expenses.xlsx',
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
          name: 'project-outline.docx',
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
          name: 'ux-presentation.pptx',
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
          name: 'website-homepage-redesign.ai',
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
          name: 'interns-ux-rampup.docx',
          icon: '/img/icons/files/doc-2.svg',
          size: '1.8MB',
          version: '1.2.0',
          uploaded: '۳ روز پیش',
          author: {
            name: 'هاوارد ال.',
            picture: '/img/avatars/20.svg',
          },
        },
      ],
      tools: [
        {
          name: 'اسکچ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/sketch.svg',
        },
        {
          name: 'ایلاستریتور',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/illustrator.svg',
        },
        {
          name: 'فتوشاپ',
          description: 'نرم‌افزار طراحی',
          icon: '/img/stacks/photoshop.svg',
        },
      ],
      stacks: [
        {
          name: 'پایتون',
          description: 'زبان برنامه‌نویسی',
          icon: '/img/stacks/python.svg',
        },
        {
          name: 'C#',
          description: 'زبان برنامه‌نویسی',
          icon: '/img/stacks/csharp.svg',
        },
        {
          name: 'انگولار',
          description: 'کتابخانه جاوا اسکریپت',
          icon: '/img/stacks/angular.svg',
        },
      ],
      tasks: [
        {
          id: 0,
          name: 'یک طراحی جدید فیمگا برای عناصر جدید صفحه‌اصلی ایجاد کنید',
          description:
            'ما باید مجموعه‌ای از ساده‌ترین عناصر رابط کاربری مانند دکمه‌ها، برچسب‌ها و عناصر فرم داشته باشیم. سپس باید از این‌ها برای ایجاد بلوک‌های بخش قابل استفاده مجدد استفاده کنیم که می‌توانیم آن‌ها را در سایر صفحات پروژه نیز استفاده کنیم.',
          completion: 100,
          status: 5,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'company-ux-guide.pdf',
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
              name: 'project_sketches.ai',
              icon: '/img/icons/files/ai.svg',
              size: '8.9MB',
              version: '1.1.3',
              uploaded: 'یک هفته پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد مجموعه‌ای از عناصر دکمه',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر نشان',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر ورودی',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از عناصر چک‌باکس',
              done: true,
            },
            {
              text: 'ایجاد مجموعه‌ای از المان‌های کارت',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم گوشه‌های دکمه‌ها باید کمی گردتر باشند.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'آیا قصد دارید این را به عنوان یک تنظیمات جهانی در فایل پیکربندی اضافه کنید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'هنوز مطمئن نیستم. هنوز باید این موضوع را با تیم مهندسی بررسی کنم.',
              author: {
                name: 'مارجوری ال.',
                picture: '/img/avatars/12.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 1,
          name: 'ساخت قالب صفحه فرود برای کمپین‌های بازاریابی آینده',
          description:
            'وب‌سایت باید الگوی صفحه فرود قابل سفارشی‌سازی ارائه دهد که بتوان از آن برای حمایت از کمپین‌های بازاریابی استفاده کرد. همچنین باید به راحتی توسط تیم بازاریابی قابل سفارشی‌سازی باشد.',
          completion: 58,
          status: 1,
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'ux-notes.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '89KB',
              version: '1.8.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'ملانی د.',
                picture: '/img/avatars/25.svg',
              },
            },
            {
              id: 1,
              name: 'landing_page.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.2MB',
              version: '1.4.1',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک بخش قهرمان قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای قیمت‌گذاری',
              done: true,
            },
            {
              text: 'ایجاد بخش ویژگی‌های قابل تنظیم',
              done: true,
            },
            {
              text: 'ایجاد بخشی قابل تنظیم برای نظرات',
              done: false,
            },
            {
              text: 'ایجاد یک بخش تماس سفارشی',
              done: false,
            },
          ],
          created: '۶ روز پیش',
          attachments: 2,
          comments: [
            {
              text: 'من فکر می‌کنم اگر بخشی برای اعضای تیم اضافه کنیم، خوب باشد. و بخش برای آخرین پست‌های وبلاگ چطور؟',
              author: {
                name: 'سلنا ام.',
                picture: '/img/avatars/24.svg',
                posted: '۷ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 2,
          name: 'ساخت یک پلیر ویدیو سفارشی جاوااسکریپت با پشتیبانی از استریم',
          description:
            'از آنجا که نتوانستیم یک راه‌حل آماده پیدا کنیم، مجبوریم یک پخش‌کننده سفارشی بسازیم که بتوانیم در پروژه‌های دیگر نیز از آن استفاده کنیم.',
          completion: 45,
          status: 1,
          created: '1۸ روز پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'player_specifications.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.9MB',
              version: '1.0.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'گرتا ک.',
                picture: '/img/avatars/20.svg',
              },
            },
            {
              id: 1,
              name: 'player-mockup.ai',
              icon: '/img/icons/files/ai.svg',
              size: '5.7MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'پیاده‌سازی قاب و کنترل‌های پایه',
              done: true,
            },
            {
              text: 'آیکون‌های کنترل SVG سفارشی را طراحی و پیاده‌سازی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی پشتیبانی از پخش ویدئو',
              done: false,
            },
            {
              text: 'کنترل سرعت پخش ویدیو را پیاده‌سازی کنید',
              done: true,
            },
            {
              text: 'Implement video volume control',
              done: false,
            },
          ],
          comments: [
            {
              text: 'کنجکاوم بدانم آیا باید حالت‌های نمایش مختلفی برای پخش‌کننده اضافه کنیم؟ برای مثال، داشتن حالت تمام صفحه می‌تواند جالب باشد.',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'بله، خوب می‌شود. آن را به فهرست ویژگی‌ها اضافه می‌کنم. چیزی دیگری هم به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۳ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'اریک ک.',
                picture: '/img/avatars/8.svg',
                posted: '۳ روز پیش',
              },
            },
          ],
        },
        {
          id: 3,
          name: 'مجموعه‌ای از تصاویر برند شده سفارشی برای وب‌سایت و اپلیکیشن طراحی کنید.',
          description:
            'مشتری می‌خواهد مجموعه‌ای از تصاویر داشته باشد که بتواند در وبسایت و اپلیکیشن استفاده کند. این تصاویر باید به طور سفارشی برندسازی شده و با طراحی کلی همخوانی داشته باشند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 15,
            src: '/img/avatars/15.svg',
            badge: '/img/stacks/js.svg',
            role: 'توسعه‌دهنده فول استک',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'جاش سی.',
            text: 'JC',
          },
          files: [
            {
              id: 0,
              name: 'company_branding.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '25.8MB',
              version: '4.5.2',
              uploaded: '۱ماه پیش',
              author: {
                name: 'Lana H.',
                picture: '/img/avatars/4.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد تصاویر برای صفحه فرود',
              done: true,
            },
            {
              text: 'بازبینی svg ها برای استفاده از currentColor برای ویژگی‌های پر و خط',
              done: true,
            },
            {
              text: 'قسمت‌های SVG که انیمیشن خواهند داشت را آماده کنید',
              done: true,
            },
            {
              text: 'روی مجموعه‌ای از آیکون‌های برنددار کار کنید',
              done: false,
            },
          ],
          comments: [
            {
              text: 'این شروع به عالی به نظر رسیدن کرده است. کنجکاوم بدانم آیا باید کاراکترها را کمی بیشتر انتزاعی کنیم؟ نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۵ ساعت پیش',
              },
            },
            {
              text: 'به نظر من خوب به نظر می‌رسد. فکر می‌کنم می‌توانیم روی آیکون‌ها کار را شروع کنیم. آن را به لیست ویژگی‌ها اضافه می‌کنم. آیا چیز دیگری به ذهنتان می‌رسد؟',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم برای حالا همین کافی باشد. اگر به چیزی دیگر فکر کنم، به شما اطلاع می‌دهم. حالا که این را می‌گویید، آیا درباره سفارشی‌سازی و پشتیبانی از تیلویند سی‌اس‌اس فکر کرده‌اید؟',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۱ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 4,
          name: 'یک نقطه انتهایی API برای پیشنهادات شغلی کامل پیاده‌سازی کنید.',
          description:
            'نقطه پایانی API باید یک لیست JSON از شغل‌ها برگرداند. این نقطه پایانی باید بتواند نتایج را بر اساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 65,
          status: 1,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'api-jobs-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: false,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'راب اچ.',
                picture: '/img/avatars/13.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'بله، به نظر من هم غیرکاربردی است. بیایید چیز دیگری امتحان کنیم. من آن را به لیست ویژگی‌ها اضافه می‌کنم. چیز دیگری به ذهنت می‌رسد؟',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 5,
          name: 'پیاده‌سازی نقطه پایانی API کاربران شرکت',
          description:
            'نقطه پایانی API باید لیستی از کاربران به‌صورت JSON بازگرداند. این نقطه پایانی باید بتواند نتایج را براساس کلمه کلیدی، مکان، نوع و دسته‌بندی فیلتر کند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'api-users-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.9.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم این معماری بهترین نیست. به نظرم باید رویکرد دیگری را در پیش بگیریم. نظر شما چیست؟',
              author: {
                name: 'بتی ل.',
                picture: '/img/avatars/24.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'چند یادداشت به تیم ارسال کرده‌ام. این باید به آنها کمک کند تا کد را بازنویسی کنند.',
              author: {
                name: 'جان بی.',
                picture: '/img/avatars/8.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'صبور باش! من هنوز روی آن کار می‌کنم. وقتی تمام شد به تو اطلاع می‌دهم.',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 6,
          name: 'یک سیستم احراز هویت کامل و نقطه انتهایی API بسازید.',
          description:
            'سیستم احراز هویت باید قادر به مدیریت ثبت‌نام کاربر، ورود، خروج، بازنشانی رمز عبور و تأیید ایمیل باشد. نقطه پایانی API باید یک نشانه Bearer بازگرداند.',
          completion: 100,
          status: 0,
          created: '۲ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'api-auth-specs.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.4MB',
              version: '1.0.0',
              uploaded: '3 هفته پیش',
              author: {
                name: 'جاش اس.',
                picture: '/img/avatars/11.svg',
              },
            },
            {
              id: 1,
              name: 'authentication.docx',
              icon: '/img/icons/files/doc-2.svg',
              size: '34KB',
              version: '1.1.3',
              uploaded: '۵ روز پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد یک نقطه پایانی API جدید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مهاجرت پایگاه داده جدید',
              done: true,
            },
            {
              text: 'ایجاد یک seeder جدید در پایگاه داده',
              done: true,
            },
            {
              text: 'ایجاد یک مدل جدید پایگاه داده',
              done: true,
            },
          ],
          comments: [],
        },
        {
          id: 7,
          name: 'ایجاد کامپوننت‌های قابل استفاده مجدد برای ساخت بخش‌های قیمت‌گذاری مختلف',
          description:
            'اجزاء باید قادر به پشتیبانی از برنامه‌های قیمت‌گذاری مختلف باشند و بتوانند محبوب‌ترین برنامه را نمایش دهند. همچنین، اجزاء باید بتوانند یک دکمه برای خرید برنامه نمایش دهند.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'pricing-components.ai',
              icon: '/img/icons/files/ai.svg',
              size: '9.5MB',
              version: '1.0.0',
              uploaded: '۵ روز پیش',
              author: {
                name: 'آنا ب.',
                picture: '/img/avatars/9.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'اجزا را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی اجزا در پروژه',
              done: true,
            },
            {
              text: 'بخش‌های قیمت‌گذاری را در پروژه پیاده‌سازی کنید.',
              done: true,
            },
          ],
          comments: [
            {
              text: 'من طراحی را خیلی دوست دارم. فقط یک چیز وجود دارد که تغییر می‌دهم. من دکمه را کمی بزرگتر می‌کنم.',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
                posted: '۴ روز پیش',
              },
            },
            {
              text: 'آیا مطمئن هستید؟ فکر می‌کنم دکمه اندازه مناسبی دارد. از تیم می‌پرسم که چه فکری می‌کنند.',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم دکمه خوب است. آن را تغییر نمی‌دهم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 8,
          name: 'پیاده‌سازی صفحه پروفایل کاربر',
          description:
            'صفحه پروفایل کاربر باید شامل آواتار کاربر، نام، ایمیل، بیوگرافی، موقعیت مکانی، لینک‌های اجتماعی و لیستی از پروژه‌های کاربر باشد.',
          completion: 100,
          status: 5,
          created: '3 هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'profile-view.ai',
              icon: '/img/icons/files/ai.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه پروفایل کاربر را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'صفحه نمایه کاربر را در پروژه پیاده‌سازی کنید',
              done: true,
            },
          ],
          comments: [
            {
              text: 'این عالی به نظر می‌رسد! فقط یک سؤال دارم. کاربر چگونه آواتار خود را تغییر خواهد داد؟',
              author: {
                name: 'هنری دی.',
                picture: '/img/avatars/1.svg',
                posted: '۸ ساعت پیش',
              },
            },
            {
              text: 'فکر می‌کنم کاربر قادر خواهد بود از صفحه تنظیمات، آواتار را تغییر دهد.',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 9,
          name: 'ایجاد یک مفهوم برای صفحه فهرست مخاطبین',
          description:
            'صفحه لیست مخاطبین باید لیستی از مخاطبین را با نام، ایمیل، شماره تلفن و آواتار نمایش دهد.',
          completion: 75,
          status: 3,
          created: '۲ هفته پیش',
          assignee: {
            id: 27,
            src: '/img/avatars/24.svg',
            badge: '/img/stacks/illustrator.svg',
            role: 'طراح UI/UX',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کارمن ای.',
            text: 'CE',
          },
          files: [
            {
              id: 0,
              name: 'contact-list.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.9MB',
              version: '1.1.1',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'کشیدن چند وایرفریم مرحله اول',
              done: true,
            },
            {
              text: 'صفحه لیست مخاطبین را در پروژه فیگما طراحی کنید.',
              done: true,
            },
            {
              text: 'پیاده‌سازی صفحه لیست تماس در پروژه',
              done: true,
            },
            {
              text: 'یک قابلیت جستجو برای صفحه لیست تماس‌ها بسازید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فیلتر یک افزونه عالی است. فکر می‌کنم بسیار مفید خواهد بود.',
              author: {
                name: 'ملانی ال.',
                picture: '/img/avatars/25.svg',
                posted: '۶ ساعت پیش',
              },
            },
            {
              text: 'این بالاترین نکته است. فکر می‌کنم آماده پیاده‌سازی است.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۷ ساعت پیش',
              },
            },
            {
              text: 'موافقم. من شروع به کار روی پیاده‌سازی می‌کنم.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/16.svg',
                posted: '۸ ساعت پیش',
              },
            },
          ],
        },
        {
          id: 10,
          name: 'پیاده‌سازی نقطه انتهایی API لیست مخاطبین',
          description:
            'نقطه انتهایی API لیست مخاطبین باید لیستی از مخاطبین با نام، ایمیل، شماره تلفن و آواتار آنها برگرداند.',
          completion: 50,
          status: 1,
          created: '۶ روز پیش',
          assignee: {
            id: 12,
            src: '/img/avatars/12.svg',
            badge: '/img/stacks/csharp.svg',
            role: 'توسعه‌دهنده بک‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'مارجوری ال.',
            text: 'ML',
          },
          files: [
            {
              id: 0,
              name: 'contact-list-api.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '4.7MB',
              version: '1.5.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
              },
            },
            {
              id: 1,
              name: 'contact-list-api.xlsx',
              icon: '/img/icons/files/sheet.svg',
              size: '34KB',
              version: '1.0.0',
              uploaded: '۱ هفته پیش',
              author: {
                name: 'مایا ر.',
                picture: '/img/avatars/2.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد نقطه انتهایی API جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای لیست مخاطبین',
              done: false,
            },
            {
              text: 'ایجاد پرسش‌های فیلتر و صفحه‌بندی برای لیست مخاطبین',
              done: false,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید قابلیت جستجو به لیست مخاطبان اضافه کنیم.',
              author: {
                name: 'لانا ای.',
                picture: '/img/avatars/4.svg',
                posted: '۲ ساعت پیش',
              },
            },
            {
              text: 'موافقم. آن را به لیست بررسی اضافه خواهم کرد.',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 11,
          name: 'یک رابط پیام‌رسان برای مخاطبین پیاده‌سازی کنید',
          description:
            'بخش فرانت‌اند پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. فرانت‌اند باید با استفاده از ری‌اکت پیاده‌سازی شود.',
          completion: 100,
          status: 5,
          created: '۲ هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-frontend.ai',
              icon: '/img/icons/files/ai.svg',
              size: '7.1MB',
              version: '1.0.0',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'الیاس دی.',
                picture: '/img/avatars/13.svg',
              },
            },
            {
              id: 1,
              name: 'messaging-frontend.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '1.2MB',
              version: '1.0.0',
              uploaded: '۶ روز پیش',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'ایجاد اجزای جدید برای رابط کاربری پیام‌رسان',
              done: true,
            },
            {
              text: 'مسیر جدیدی برای رابط کاربری پیام‌رسان اضافه کنید',
              done: true,
            },
            {
              text: 'ایجاد یک جدول پایگاه داده جدید برای پیام‌ها',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
          ],
          comments: [
            {
              text: 'فکر می‌کنم باید امکان ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلاریسا م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'من مطمئن نیستم که آیا باید این را اضافه کنیم. این کار زیادی خواهد بود. نظر تو چیست @هرمان م؟',
              author: {
                name: 'جاش دی.',
                picture: '/img/avatars/11.svg',
                posted: '۲ روز پیش',
              },
            },
            {
              text: 'فکر می‌کنم باید آن را اضافه کنیم. یک ویژگی خوب خواهد بود.',
              author: {
                name: 'هرمان م.',
                picture: '/img/avatars/5.svg',
                posted: '۲ روز پیش',
              },
            },
          ],
        },
        {
          id: 12,
          name: 'پیاده‌سازی یک نقطه انتهایی API پیام‌رسانی برای رابط کاربری',
          description:
            'نقطه انتهایی API پیام‌رسانی باید به کاربران اجازه دهد پیام‌ها را به یکدیگر ارسال کنند. پیام‌ها باید در یک پایگاه داده ذخیره شوند. نقطه انتهایی API باید در Node.js پیاده‌سازی شود.',
          completion: 65,
          status: 1,
          created: '3 هفته پیش',
          assignee: {
            id: 7,
            src: '/img/avatars/3.svg',
            badge: '/img/stacks/reactjs.svg',
            role: 'توسعه‌دهنده فرانت‌اند',
            bio: 'لورم ایپسوم دولور سیت آمِت، کانسکتتور آدیپیسینگ الیت، سد دو ایوسمود.',
            tooltip: 'کلارک گ.',
            text: 'CG',
          },
          files: [
            {
              id: 0,
              name: 'messaging-api-endpoint.pdf',
              icon: '/img/icons/files/pdf.svg',
              size: '2.2MB',
              version: '1.0.2',
              uploaded: '۲ هفته پیش',
              author: {
                name: 'کندرا و.',
                picture: '/img/avatars/10.svg',
              },
            },
          ],
          checklist: [
            {
              text: 'یک نقطه پایانی جدید API برای فرانت‌اند پیام‌رسانی ایجاد کنید',
              done: true,
            },
            {
              text: 'پیاده‌سازی قابلیت پیام‌رسانی',
              done: true,
            },
            {
              text: 'پیام‌ها را در پایگاه داده ذخیره کنید.',
              done: false,
            },
          ],
          comments: [
            {
              text: 'من در این زمینه کار زیادی کرده‌ام. فکر می‌کنم باید حتماً قابلیت ارسال تصاویر و فایل‌ها را اضافه کنیم. نظر شما چیست؟',
              author: {
                name: 'کلارک سی.',
                picture: '/img/avatars/3.svg',
                posted: '۱۰ ساعت پیش',
              },
            },
          ],
        },
      ],
      customer: {
        logo: '/img/icons/logos/masterio.svg',
        name: 'مستر‌یو',
        text: 'فین‌تک',
      },
    },
  ])
}
