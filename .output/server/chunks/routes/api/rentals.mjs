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

const rentals = defineEventHandler(async (event) => {
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
      return [item.name, item.location].some((item2) => item2.match(filterRe));
    }).slice(offset, offset + perPage)
  };
});
async function getDemoData() {
  return Promise.resolve([
    {
      id: "1",
      picture: "/img/illustrations/layouts/rental-1.svg",
      name: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0631\u062F\u200C\u0645\u0648\u0646\u062F \u06F1\u06F3\u06F9\u06F6",
      location: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0631\u062F\u0645\u062F\u060C \u0634\u0645\u0627\u0631\u0647 1396\u060C \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 12\u060C \u0648\u0627\u062D\u062F H 102\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633\u060C CA",
      rating: 4,
      details: {
        rooms: 5,
        beds: 3,
        bathrooms: 1
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true
      }
    },
    {
      id: "2",
      picture: "/img/illustrations/layouts/rental-2.svg",
      name: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0645\u0644\u0628\u0631\u06CC \u0634\u0645\u0627\u0631\u0647 \u06F2\u06F4",
      location: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0645\u0644\u0628\u0631\u06CC \u0634\u0645\u0627\u0631\u0647 \u06F2\u06F4\u060C \u0648\u0627\u062D\u062F \u06F4\u06F3\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      rating: 5,
      details: {
        rooms: 3,
        beds: 2,
        bathrooms: 1
      },
      amenities: {
        wifi: true,
        cleaning: true
      }
    },
    {
      id: "3",
      picture: "/img/illustrations/layouts/rental-3.svg",
      name: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u06F6\u06F2 \u062C\u0627\u0646 \u0648\u0627\u0644\u0628\u0631\u06AF",
      location: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u06F6\u06F2 \u062C\u0627\u0646 \u0648\u0627\u0644\u0628\u0650\u0631\u06AF\u060C \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 \u06F1\u06F0\u060C \u0633\u0648\u0626\u06CC\u062A \u06F2\u06F4\u060C \u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      rating: 5,
      details: {
        rooms: 4,
        beds: 2,
        bathrooms: 2
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true
      }
    },
    {
      id: "4",
      picture: "/img/illustrations/layouts/rental-4.svg",
      name: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0645\u0646\u0647\u0627\u062A\u0646 \u0634\u0645\u0627\u0631\u0647 \u06F4\u06F8",
      location: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0645\u0646\u0647\u0627\u062A\u0646 \u0634\u0645\u0627\u0631\u0647 \u06F4\u06F8\u060C \u0648\u0627\u062D\u062F G12\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      rating: 5,
      details: {
        rooms: 5,
        beds: 4,
        bathrooms: 3
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true
      }
    },
    {
      id: "5",
      picture: "/img/illustrations/layouts/rental-5.svg",
      name: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u062E\u06CC\u0631\u06CC\u0647 \u06F1\u06F2",
      location: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0686\u0631\u06CC\u062A\u06CC \u06F1\u06F2\u060C \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 \u06F4\u06F9\u060C \u0628\u0631\u0648\u06A9\u0644\u06CC\u0646\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      rating: 4,
      details: {
        rooms: 3,
        beds: 2,
        bathrooms: 1
      },
      amenities: {
        parking: true,
        wifi: true,
        cleaning: true
      }
    },
    {
      id: "6",
      picture: "/img/illustrations/layouts/rental-6.svg",
      name: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0646\u0627\u0646\u0648\u0627\u06CC\u06CC \u0634\u0645\u0627\u0631\u0647 \u06F2\u06F3",
      location: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0646\u0627\u0646\u0648\u0627\u06CC\u06CC \u0634\u0645\u0627\u0631\u0647 \u06F2\u06F3\u060C \u0648\u0627\u062D\u062F \u06F1\u06F2\u06F1\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      rating: 5,
      details: {
        rooms: 3,
        beds: 2,
        bathrooms: 1
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true,
        otherGreatCoolThing: true
      }
    },
    {
      id: "7",
      picture: "/img/illustrations/layouts/rental-7.svg",
      name: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u067E\u0627\u0633\u0627\u062F\u0646\u0627 \u06F1\u06F0\u06F2\u06F8",
      location: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u067E\u0627\u0633\u0627\u062F\u0646\u0627 \u06F1\u06F0\u06F2\u06F8\u060C \u0633\u0648\u0626\u06CC\u062A F \u06F2\u06F4\u060C \u0644\u0633 \u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      rating: 5,
      details: {
        rooms: 7,
        beds: 5,
        bathrooms: 3
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true,
        otherCoolThing: true
      }
    },
    {
      id: "8",
      picture: "/img/illustrations/layouts/rental-8.svg",
      name: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u06A9\u0644\u06CC\u0633\u0627 \u0634\u0645\u0627\u0631\u0647 \u06F5\u06F4",
      location: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u06A9\u0644\u06CC\u0633\u0627 \u0634\u0645\u0627\u0631\u0647 \u06F5\u06F4\u060C \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 \u06F2\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      rating: 5,
      details: {
        rooms: 2,
        beds: 1,
        bathrooms: 1
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true
      }
    },
    {
      id: "9",
      picture: "/img/illustrations/layouts/rental-9.svg",
      name: "\u0645\u0646\u0637\u0642\u0647 \u0634\u0647\u0631 \u0642\u062F\u06CC\u0645\u06CC \u0634\u0645\u0627\u0631\u0647 \u06F1\u06F1\u06F2",
      location: "\u0645\u0646\u0637\u0642\u0647 \u0634\u0647\u0631 \u0642\u062F\u06CC\u0645\u06CC \u0634\u0645\u0627\u0631\u0647 \u06F1\u06F1\u06F2\u060C \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 \u06F5 \u0648\u0627\u062D\u062F \u06F4\u06F2\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      rating: 5,
      details: {
        rooms: 3,
        beds: 2,
        bathrooms: 1
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true
      }
    },
    {
      id: "10",
      picture: "/img/illustrations/layouts/rental-10.svg",
      name: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0633\u0646\u062A \u0644\u0626\u0648\u0646\u0627\u0631\u062F \u0634\u0645\u0627\u0631\u0647 \u06F5\u06F1",
      location: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0633\u0646\u062A \u0644\u0626\u0648\u0646\u0627\u0631\u062F \u0634\u0645\u0627\u0631\u0647 \u06F5\u06F1\u060C \u0648\u0627\u062D\u062F \u06F2\u06F3\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      rating: 5,
      details: {
        rooms: 4,
        beds: 2,
        bathrooms: 1
      },
      amenities: {
        parking: true,
        wifi: true,
        heater: true,
        cleaning: true,
        other: true,
        otherThing: true
      }
    }
  ]);
}

export { rentals as default };
