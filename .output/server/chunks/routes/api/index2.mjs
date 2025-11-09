import { PrismaClient } from '@prisma/client';
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

const prisma = new PrismaClient();
const index = defineEventHandler(async (event) => {
  const baseData = await getDemoData();
  const query = getQuery(event);
  const userIdRaw = query.userId;
  const userId = userIdRaw ? Number.parseInt(userIdRaw, 10) : void 0;
  try {
    if (!userId || Number.isNaN(userId)) {
      return baseData;
    }
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        referredBy: {
          select: { referralCode: true }
        }
      }
    });
    if (!user) {
      return baseData;
    }
    const baseProfile = baseData.profile ?? {};
    const userRecord = user;
    const referralCode = userRecord.referralCode ?? baseProfile.referralCode ?? "";
    const credit = userRecord.credit ?? baseProfile.credit ?? 0;
    const referredByCode = userRecord.referredBy?.referralCode ?? baseProfile.referredByCode ?? null;
    return {
      ...baseData,
      personalInfo: {
        ...baseData.personalInfo,
        firstName: user.firstName ?? baseData.personalInfo?.firstName ?? "",
        lastName: user.lastName ?? baseData.personalInfo?.lastName ?? "",
        role: user.role ?? baseData.personalInfo?.role ?? "",
        picture: user.profilePicture ?? baseData.personalInfo?.picture ?? null,
        referralCode,
        credit,
        referredByCode
      },
      profile: {
        ...baseProfile,
        firstName: user.firstName ?? baseProfile.firstName ?? baseData.personalInfo?.firstName ?? "",
        lastName: user.lastName ?? baseProfile.lastName ?? baseData.personalInfo?.lastName ?? "",
        role: user.role ?? baseProfile.role ?? baseData.personalInfo?.role ?? "",
        location: user.location ?? baseProfile.location ?? null,
        bio: user.bio ?? baseProfile.bio ?? null,
        referralCode,
        credit,
        referredByCode
      }
    };
  } catch (error) {
    console.warn("[profile] Falling back to demo data due to error:", error);
    return baseData;
  } finally {
    await prisma.$disconnect();
  }
});
async function getDemoData() {
  return Promise.resolve({
    personalInfo: {
      firstName: "\u0645\u0627\u06CC\u0627",
      lastName: "\u0631\u0648\u0633\u0650\u0644\u06CC\u0646\u06CC",
      picture: "/img/avatars/2.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      role: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
      referralCode: "",
      credit: 0,
      referredByCode: null,
      shortBio: "\u0633\u0644\u0627\u0645 \u0628\u0647 \u0647\u0645\u0647\u060C \u0645\u0646 \u06CC\u06A9 \u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644 \u0627\u0632 \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9 \u0647\u0633\u062A\u0645 \u0648 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u0641\u0631\u0635\u062A\u200C\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F \u062F\u0631 \u0635\u0646\u0639\u062A \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 \u0645\u06CC\u200C\u06AF\u0631\u062F\u0645.",
      longBio: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0641\u0627\u0644\u06CC \u0627\u06CC\u06AF\u06CC\u062A\u0648\u0631 \u067E\u0648\u0632\u0633\u06CC\u0645\u0648\u0633. \u067E\u0631\u0627\u062A\u0631\u0627\u06CC\u062A\u06CC\u0633\u060C \u0627\u06CC\u0646\u06A9\u0648\u06CC\u060C \u06AF\u0627\u0626\u0648\u062F\u0626\u0648. \u062F\u0648\u0648 \u0631\u06AF\u0633: \u06A9\u0646\u0633\u062A\u0631\u0627\u06A9\u0633\u06CC\u0648\u0646 \u0627\u06CC\u0646\u062A\u0631\u0646\u062A\u0647. \u0627\u06CC\u062F\u0645\u200C\u0646\u0647\u060C \u06A9\u0648\u0627\u062F \u0627\u06CC\u0648\u06A9\u0646\u062F\u061F \u06A9\u0648\u06CC\u0633 \u0627\u06CC\u0646\u06CC\u0645 \u0631\u062F\u0622\u0631\u06AF\u0648\u0631\u06CC\u062A\u061F \u0646\u0648\u0646 \u0633\u0645\u067E\u0631\u060C \u0627\u06CC\u0646\u06A9\u0648\u06CC\u061B \u06A9\u0648\u06CC\u062F \u0646\u0627\u0646\u06A9 \u0647\u0648\u0646\u0633\u062A\u0647 \u062F\u06CC\u06A9\u06CC\u062A\u061F \u0627\u06CC\u0627\u0645 \u062A\u0648\u0645 \u0622\u062F\u0633\u060C \u06A9\u0645 \u062F\u0648\u0644\u0648\u0631 \u0627\u0648\u0645\u0646\u06CC\u0633 \u0622\u0628\u0633\u06CC\u062A\u061B \u0646\u062C\u0627\u062A \u0627\u06CC\u0646\u06CC\u0645 \u0633\u0648\u0645\u0648 \u0628\u0648\u0646\u0648 \u0622\u0641\u0631\u0647 \u0627\u06CC\u0646\u06A9\u0631\u06CC\u0645\u0646\u062A\u0648\u0645 \u062F\u06CC\u200C\u0627\u0645.",
      projects: 59,
      relations: 500,
      socials: [
        {
          name: "facebook",
          url: "https://facebook.com",
          icon: "fa6-brands:facebook-f"
        },
        {
          name: "twitter",
          url: "https://twitter.com",
          icon: "fa6-brands:twitter"
        },
        {
          name: "linkedin",
          url: "https://linkedin.com",
          icon: "fa6-brands:linkedin-in"
        }
      ],
      experiences: [
        {
          company: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
          logo: "/img/logos/brands/github.svg",
          period: "\u0622\u0630\u0631 \u06F1\u06F4\u06F0\u06F1 \u062A\u0627 \u0627\u0645\u0631\u0648\u0632"
        },
        {
          company: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
          logo: "/img/logos/brands/facebook.svg",
          period: "\u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F0 \xB7 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1"
        },
        {
          company: "\u0622\u062A\u0644\u0633\u06CC\u0627\u0646",
          position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
          logo: "/img/logos/brands/atlassian.svg",
          period: "\u0622\u0628\u0627\u0646 \u06F1\u06F3\u06F9\u06F9 \xB7 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F0"
        },
        {
          company: "\u0627\u06CC\u0631\u200C\u0628\u06CC\u200C\u0627\u0646\u200C\u0628\u06CC",
          position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
          logo: "/img/logos/brands/airbnb.svg",
          period: "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F3\u06F9\u06F7 \xB7 \u0645\u0647\u0631 \u06F1\u06F3\u06F9\u06F9"
        },
        {
          company: "\u0627\u0633\u0644\u06A9",
          position: "\u0645\u0627\u0644\u06A9 \u0645\u062D\u0635\u0648\u0644",
          logo: "/img/logos/brands/slack.svg",
          period: "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F3\u06F9\u06F6 \xB7 \u062F\u06CC \u06F1\u06F3\u06F9\u06F6"
        },
        {
          company: "\u06AF\u06CC\u062A\u200C\u0644\u0628",
          position: "\u0645\u0627\u0644\u06A9 \u0645\u062D\u0635\u0648\u0644",
          logo: "/img/logos/brands/gitlab.svg",
          period: "\u0645\u0631\u062F\u0627\u062F \u06F1\u06F3\u06F9\u06F5 \xB7 \u0628\u0647\u0645\u0646 \u06F1\u06F3\u06F9\u06F5"
        }
      ],
      languages: [
        {
          name: "\u0641\u0627\u0631\u0633\u06CC",
          mastery: "\u06AF\u0648\u06CC\u0646\u062F\u0647 \u0628\u0648\u0645\u06CC\u060C \u0645\u0633\u0644\u0637",
          level: 100,
          icon: "/img/icons/flags/iran.svg"
        },
        {
          name: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
          mastery: "\u06AF\u0648\u06CC\u0646\u062F\u0647 \u0628\u0648\u0645\u06CC\u060C \u0645\u0633\u0644\u0637",
          level: 100,
          icon: "/img/icons/flags/united-states-of-america.svg"
        },
        {
          name: "\u0641\u0631\u0627\u0646\u0633\u0648\u06CC",
          mastery: "\u0633\u0644\u06CC\u0633\u060C \u0646\u0648\u0634\u062A\u0627\u0631\u06CC \u0648 \u06AF\u0641\u062A\u0627\u0631\u06CC",
          level: 85,
          icon: "/img/icons/flags/france.svg"
        },
        {
          name: "\u0622\u0644\u0645\u0627\u0646\u06CC",
          mastery: "\u0633\u0637\u062D \u0645\u0628\u062A\u062F\u06CC",
          level: 25,
          icon: "/img/icons/flags/germany.svg"
        },
        {
          name: "\u0627\u0633\u067E\u0627\u0646\u06CC\u0627\u06CC\u06CC",
          mastery: "\u0633\u0637\u062D \u0645\u0628\u062A\u062F\u06CC",
          level: 35,
          icon: "/img/icons/flags/spain.svg"
        }
      ],
      tools: [
        {
          name: "\u0627\u062F\u0648\u0628\u06CC \u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631",
          mastery: "\u0633\u0637\u062D \u067E\u06CC\u0634\u0631\u0641\u062A\u0647",
          level: 82,
          logo: "/img/stacks/illustrator.svg"
        },
        {
          name: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 \u062C\u064A\u0631\u0627",
          mastery: "\u0633\u0637\u062D \u0645\u062A\u0648\u0633\u0637",
          level: 56,
          logo: "/img/logos/brands/jira.svg"
        },
        {
          name: "\u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A \u0622\u0641\u06CC\u0633",
          mastery: "\u0633\u0637\u062D \u062D\u0631\u0641\u0647\u200C\u0627\u06CC",
          level: 95,
          logo: "/img/logos/brands/office.svg"
        }
      ],
      viewed: [
        {
          name: "\u0622\u0631\u062A\u0648\u0631 \u0628.",
          role: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
          badge: "/img/icons/flags/united-states-of-america.svg",
          src: "/img/avatars/8.svg",
          text: "AB"
        },
        {
          name: "\u0645\u0644\u0627\u0646\u06CC \u0627\u0644.",
          role: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
          badge: "/img/icons/flags/united-states-of-america.svg",
          src: "/img/avatars/25.svg",
          text: "ML"
        },
        {
          name: "\u062C\u0627\u0646 \u0627\u0686.",
          role: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
          badge: "/img/icons/flags/united-states-of-america.svg",
          src: "",
          text: "JH"
        },
        {
          name: "\u0647\u0627\u0648\u0627\u0631\u062F \u062F.",
          role: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
          badge: "/img/icons/flags/united-states-of-america.svg",
          src: "/img/avatars/20.svg",
          text: "HD"
        }
      ],
      skills: [
        {
          name: "\u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A",
          experience: 7,
          level: 95,
          logo: "/img/stacks/js.svg",
          related: {
            total: "2K",
            people: [
              {
                name: "\u06A9\u0644\u0627\u0631\u06A9 \u06AF.",
                src: "/img/avatars/3.svg",
                text: "CG"
              },
              {
                name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645.",
                src: "/img/avatars/5.svg",
                text: "CM"
              },
              {
                name: "\u062C\u0627\u0646 \u0627\u0686.",
                src: void 0,
                text: "JH"
              },
              {
                name: "\u0628\u062A\u06CC \u062F.",
                src: "/img/avatars/24.svg",
                text: "BD"
              }
            ]
          }
        },
        {
          name: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062D\u0635\u0648\u0644",
          experience: 4,
          level: 95,
          icon: "ph:archive-duotone",
          related: {
            total: "2K",
            people: [
              {
                name: "\u06A9\u0646\u0634\u06CC\u0631\u0648 \u0648\u0627\u06CC.",
                text: "KY"
              },
              {
                name: "\u0622\u0631\u062A\u0648\u0631 \u0628.",
                src: "/img/avatars/8.svg",
                text: "AB"
              },
              {
                name: "\u06A9\u0646\u062F\u0631\u0627 \u0648.",
                src: "/img/avatars/10.svg",
                text: "KW"
              }
            ]
          }
        },
        {
          name: "Vue",
          experience: 10,
          level: 75,
          logo: "/img/stacks/vuejs.svg",
          related: {
            total: "2K",
            people: [
              {
                name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0646.",
                src: "/img/avatars/21.svg",
                text: "EN"
              },
              {
                name: "\u0647\u0627\u0648\u0627\u0631\u062F \u0627\u0641.",
                src: "/img/avatars/20.svg",
                text: "HF"
              }
            ]
          }
        },
        {
          name: "\u0631\u06CC\u200C\u0627\u06A9\u062A",
          experience: 10,
          level: 68,
          logo: "/img/stacks/reactjs.svg",
          related: {
            total: "2K",
            people: [
              {
                name: "\u0647\u0631\u0645\u0627\u0646 \u0645.",
                src: "/img/avatars/16.svg",
                text: "HM"
              },
              {
                name: "\u0645\u0627\u0631\u062C\u0648\u0631\u06CC \u0627\u0644.",
                src: "/img/avatars/25.svg",
                text: "ML"
              },
              {
                name: "\u06AF\u0631\u062A\u0627 \u06A9.",
                src: "/img/avatars/22.svg",
                text: "GK"
              },
              {
                name: "\u0645\u0631\u06CC \u0648.",
                text: "MW"
              }
            ]
          }
        }
      ],
      recommandations: [
        {
          name: "\u06A9\u0644\u0627\u0631\u06A9 \u06AF.",
          role: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
          src: "/img/avatars/3.svg",
          badge: "/img/icons/flags/united-states-of-america.svg",
          text: "\u0645\u0627\u06CC\u0627 \u06CC\u06A9 \u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644 \u0639\u0627\u0644\u06CC \u0627\u0633\u062A. \u0627\u0648 \u0628\u0633\u06CC\u0627\u0631 \u0628\u0647 \u06A9\u0627\u0631\u0634 \u0639\u0644\u0627\u0642\u0647\u200C\u0645\u0646\u062F \u0627\u0633\u062A \u0648 \u0647\u0645\u06CC\u0634\u0647 \u06A9\u0627\u0631\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0645\u0648\u0642\u0639 \u062A\u062D\u0648\u06CC\u0644 \u0645\u06CC\u200C\u062F\u0647\u062F. \u0645\u0646 \u0627\u0648 \u0631\u0627 \u0628\u0647 \u0647\u0631 \u0634\u0631\u06A9\u062A\u06CC \u062A\u0648\u0635\u06CC\u0647 \u0645\u06CC\u200C\u06A9\u0646\u0645.",
          date: "\u06F8 \u062F\u06CC \u06F1\u06F4\u06F0\u06F2"
        },
        {
          name: "\u0628\u062A\u06CC \u0633\u06CC.",
          role: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
          src: "/img/avatars/24.svg",
          badge: "/img/icons/flags/united-states-of-america.svg",
          text: "\u0645\u0627\u06CC\u0627 \u06CC\u06A9 \u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644 \u0639\u0627\u0644\u06CC \u0627\u0633\u062A. \u0627\u0648 \u0628\u0633\u06CC\u0627\u0631 \u0628\u0647 \u06A9\u0627\u0631\u0634 \u0639\u0644\u0627\u0642\u0647\u200C\u0645\u0646\u062F \u0627\u0633\u062A \u0648 \u0647\u0645\u06CC\u0634\u0647 \u06A9\u0627\u0631\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0645\u0648\u0642\u0639 \u062A\u062D\u0648\u06CC\u0644 \u0645\u06CC\u200C\u062F\u0647\u062F. \u0645\u0646 \u0627\u0648 \u0631\u0627 \u0628\u0647 \u0647\u0631 \u0634\u0631\u06A9\u062A\u06CC \u062A\u0648\u0635\u06CC\u0647 \u0645\u06CC\u200C\u06A9\u0646\u0645.",
          date: "\u06F1\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1"
        }
      ]
    },
    profile: {
      firstName: "U.OUOO",
      lastName: "O\xB5U^O3U?U,UOU+UO",
      role: "U.O_UOO U.O-O\xB5U^U,",
      location: "U?OO?U^UOU,UO",
      bio: "",
      referralCode: "",
      credit: 0,
      referredByCode: null
    },
    notifications: true
  });
}

export { index as default };
