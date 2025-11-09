import { d as defineEventHandler, g as getQuery } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'ipx';

const courses = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const perPage = parseInt(query.perPage || "5", 10);
  const page = parseInt(query.page || "1", 10);
  const filter = query.filter || "";
  if (perPage >= 50) {
    await new Promise((resolve) => setTimeout(resolve, 1e3));
  }
  const data = await getDemoData();
  const offset = (page - 1) * perPage;
  const filterRe = new RegExp(filter, "i");
  return {
    total: data.length,
    data: !filter ? data.slice(offset, offset + perPage) : data.filter((item) => {
      return [item.name, item.category].some((item2) => item2.match(filterRe));
    }).slice(offset, offset + perPage)
  };
});
async function getDemoData() {
  return Promise.resolve([
    {
      id: 0,
      name: "\u0645\u0639\u0631\u0641\u06CC \u0628\u0647 HTML5",
      picture: "/img/illustrations/layouts/course-1.jpg",
      category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
      difficulty: 1,
      price: 26,
      skill: {
        icon: "uiw:html5",
        name: "Html5"
      },
      author: {
        id: 8,
        picture: "/images/avatars/svg/vuero-1.svg",
        username: "\u0627\u0631\u06CC\u06A9 \u06A9.",
        initials: "EK",
        color: "info"
      }
    },
    {
      id: 1,
      name: "\u062A\u0633\u0644\u0637 \u0628\u0631 VueJS \u0648 \u062A\u0627\u06CC\u067E\u200C\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A",
      picture: "/img/illustrations/layouts/course-2.png",
      category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
      difficulty: 4,
      price: 12,
      skill: {
        icon: "teenyicons:vue-solid",
        name: "Vue"
      },
      author: {
        id: 12,
        picture: "/img/avatars/12.jpg",
        username: "\u062C\u0627\u0634\u0648\u0627 \u0627\u0633.",
        initials: "JS",
        color: "info"
      }
    },
    {
      id: 2,
      name: "\u06A9\u0634\u0641 CSS3 \u0648 \u0627\u0633\u062A\u0627\u06CC\u0644 \u0634\u06CC\u062A\u200C\u0647\u0627",
      picture: "/img/illustrations/layouts/course-3.jpg",
      category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
      difficulty: 2,
      price: 16,
      skill: {
        icon: "simple-icons:css3",
        name: "CSS3"
      },
      author: {
        id: 12,
        picture: "/img/avatars/5.jpg",
        username: "\u0645\u0631\u06CC \u0627\u0644.",
        initials: "ML",
        color: "info"
      }
    },
    {
      id: 3,
      name: "\u0628\u0627 \u0644\u0627\u0631\u0627\u0648\u0644 10 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u062F",
      picture: "/img/illustrations/layouts/course-4.png",
      category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
      difficulty: 3,
      price: 0,
      skill: {
        icon: "teenyicons:laravel-solid",
        name: "\u0644\u0627\u0631\u0627\u0648\u0644"
      },
      author: {
        id: 18,
        picture: "/img/avatars/18.jpg",
        username: "\u0627\u0633\u062A\u0628\u0627\u0646 \u0633\u06CC.",
        initials: "EC",
        color: "info"
      }
    },
    {
      id: 4,
      name: "\u0645\u0628\u0627\u0646\u06CC \u067E\u0627\u06CC\u062A\u0648\u0646 \u0628\u0631\u0627\u06CC \u0645\u0628\u062A\u062F\u06CC\u0627\u0646",
      picture: "/img/illustrations/layouts/course-5.jpeg",
      category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
      difficulty: 1,
      price: 8,
      skill: {
        icon: "akar-icons:python-fill",
        name: "\u067E\u0627\u06CC\u062A\u0648\u0646"
      },
      author: {
        id: 18,
        picture: "/img/avatars/18.jpg",
        username: "\u0627\u0633\u062A\u0628\u0627\u0646 \u0633\u06CC.",
        initials: "EC",
        color: "info"
      }
    },
    {
      id: 5,
      name: "\u062A\u0633\u0644\u0637 \u0628\u0631 State \u0628\u0627 \u0631\u06CC\u200C\u0627\u06A9\u062A Hooks",
      picture: "/img/illustrations/layouts/course-6.jpg",
      category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
      difficulty: 4,
      price: 25,
      skill: {
        icon: "teenyicons:react-solid",
        name: "React.js"
      },
      author: {
        id: 30,
        picture: "/img/avatars/30.jpg",
        username: "\u06A9\u0644\u0645\u0627\u0646\u062A \u062F.",
        initials: "CD",
        color: "info"
      }
    },
    {
      id: 6,
      name: "\u0631\u0627\u0647\u200C\u0627\u0646\u062F\u0627\u0632\u06CC \u0633\u0631\u0648\u0631 \u0627\u06A9\u067E\u0631\u0633",
      picture: "/img/illustrations/layouts/course-7.png",
      category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
      difficulty: 3,
      price: 12,
      skill: {
        icon: "akar-icons:node-fill",
        name: "Node.js"
      },
      author: {
        id: 38,
        picture: "/img/avatars/38.jpg",
        username: "\u06A9\u0631\u06CC\u0633\u062A\u06CC \u062F.",
        initials: "CD",
        color: "info"
      }
    },
    {
      id: 7,
      name: "\u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 Kubernetes",
      picture: "/img/illustrations/layouts/course-9.jpg",
      category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
      difficulty: 5,
      price: 34,
      skill: {
        icon: "pajamas:kubernetes",
        name: "Kubernetes"
      },
      author: {
        id: 30,
        picture: "/img/avatars/30.jpg",
        username: "\u06A9\u0644\u0645\u0627\u0646\u062A \u062F.",
        initials: "CD",
        color: "info"
      }
    },
    {
      id: 8,
      name: "\u062F\u0648\u0631\u0647 \u062A\u0635\u0627\u062F\u0641\u06CC \u062F\u06CC\u06AF\u0631 \u0627\u0646\u06AF\u0648\u0644\u0627\u0631",
      picture: "/img/illustrations/layouts/course-11.jpg",
      category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
      difficulty: 4,
      price: 22,
      skill: {
        icon: "simple-icons:angular",
        name: "\u0627\u0646\u06AF\u0648\u0644\u0627\u0631"
      },
      author: {
        id: 34,
        picture: "/img/avatars/34.jpg",
        username: "\u062F\u0646\u06CC\u0644 \u0631.",
        initials: "DR",
        color: "info"
      }
    },
    {
      id: 9,
      name: "\u0622\u0645\u0648\u0632\u0634 \u0645\u0641\u0627\u0647\u06CC\u0645 \u067E\u06CC\u0634\u0631\u0641\u062A\u0647 \u062F\u0627\u06A9\u0631",
      picture: "/img/illustrations/layouts/course-12.jpg",
      category: "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628",
      difficulty: 5,
      price: 35,
      skill: {
        icon: "simple-icons:docker",
        name: "\u062F\u0627\u06A9\u0631"
      },
      author: {
        id: 30,
        picture: "/img/avatars/30.jpg",
        username: "\u06A9\u0644\u0645\u0627\u0646\u062A \u062F.",
        initials: "CD",
        color: "info"
      }
    }
  ]);
}

export { courses as default };
