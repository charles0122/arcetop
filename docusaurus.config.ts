import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type {Options as BlogOptions} from '@docusaurus/plugin-content-blog';
// import type {Options as PageOptions} from '@docusaurus/plugin-content-pages';
import type {Options as IdealImageOptions} from '@docusaurus/plugin-ideal-image';
import type { Options as PwaOptions } from '@docusaurus/plugin-pwa';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import versions from './versions.json';
import path from 'path';


const DefaultLocale = 'zh-Hans';

function isPrerelease(version: string) {
  return (
    version.includes('alpha') ||
    version.includes('beta') ||
    version.includes('rc')
  );
}
function getLastVersion() {
  const firstStableVersion = versions.find((version) => !isPrerelease(version));
  return firstStableVersion ?? versions[0];
}

// This probably only makes sense for the alpha/beta/rc phase, temporary
function getNextVersionName() {
  //return 'Canary';

  const expectedPrefix = '2.0.0-rc.';

  const lastReleasedVersion = versions[0];
  if (!lastReleasedVersion || !lastReleasedVersion.includes(expectedPrefix)) {
    throw new Error(
      'this code is only meant to be used during the 2.0 alpha/beta/rc phase.',
    );
  }
  const version = parseInt(lastReleasedVersion.replace(expectedPrefix, ''), 10);
  return `${expectedPrefix}${version + 1}`;


}

const config: Config = {
  title: '白日梦想家',
  // titleDelimiter: "-",
  tagline: 'Dinosaurs are cool',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.arce.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // baseUrl: '/arcetop/',
  // noIndex:true,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'charles0122', // Usually your GitHub org/user name.
  projectName: 'arcetop', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: DefaultLocale,
    locales: ["zh-Hans","en"],
    localeConfigs: {
      "zh-Hans": {
        label: "中文",
      },
      "en": {
        label: "English",
      },
      //日本語 (ja)
      // "ja":{
      //   label:"日本語"
      // }
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            // Link to Crowdin for French docs
            if (locale !== DefaultLocale) {
              return `https://crowdin.com/project/arcetop/${locale}`;
            }
            // Link to GitHub for English docs
            return `https://github.com/charles0122/arce.top/edit/main/arce.top/${versionDocsDirPath}/${docPath}`;
          },
          editLocalizedFiles: true,
          editCurrentVersion: true,
          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          // async sidebarItemsGenerator({
          //   defaultSidebarItemsGenerator,
          //   numberPrefixParser,
          //   item,
          //   version,
          //   docs,
          //   isCategoryIndex,
          // }) {
          //   // Use the provided data to generate a custom sidebar slice
          //   return [
          //     {type: 'doc', id: 'intro'},
          //     {
          //       type: 'category',
          //       label: 'Tutorials',
          //       items: [
          //         {type: 'doc', id: 'tutorial1'},
          //         {type: 'doc', id: 'tutorial2'},
          //       ],
          //     },
          //   ];
          // },
          // numberPrefixParser(filename) {
          //   // Implement your own logic to extract a potential number prefix
          //   const numberPrefix = findNumberPrefix(filename);
          //   // Prefix found: return it with the cleaned filename
          //   if (numberPrefix) {
          //     return {
          //       numberPrefix,
          //       filename: filename.replace(prefix, ''),
          //     };
          //   }
          //   // No number prefix found
          //   return {numberPrefix: undefined, filename};
          // },
          docsRootComponent: '@theme/DocsRoot',
          docVersionRootComponent: '@theme/DocVersionRoot',
          docRootComponent: '@theme/DocRoot',
          docItemComponent: '@theme/DocItem',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          disableVersioning: false,
          includeCurrentVersion: true,
          // onlyIncludeVersions: ['0.0.3','0.0.4','0.0.5','0.0.6','0.0.7',"current"],
          lastVersion:"current",
          versions: {
            current:{
              label: '当前版本',
              path:"",
              banner:"none"
            },
            "0.0.1": {
              label: 'v1',
              banner:"unmaintained"
            }
          },
        } satisfies DocsOptions,
        blog: {
          blogSidebarTitle: "近期文章",
          showReadingTime: true,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({locale, blogDirPath, blogPath}) => {
            // Link to Crowdin for French docs
            if (locale !== DefaultLocale) {
              return `https://crowdin.com/project/arcetop/${locale}`;
            }
            // Link to GitHub for English docs
            return `https://github.com/charles0122/arce.top/edit/main/arce.top/${blogDirPath}/${blogPath}`;
          },
          postsPerPage: 10,
          feedOptions: {
            type: "all",
            title: "白日梦想家",
            description: '',
            language: undefined,
            copyright: `Copyright © ${new Date().getFullYear()} Arce. All rights reserved.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">赣ICP备2021008942号-1</a></p>`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        } satisfies BlogOptions,
        gtag: {
          trackingID: 'G-999X9XX9XX',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },

        theme: {
          customCss: ['./src/css/custom.css',],
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: "announcementBar-arce",
      content:` ⭐️ 如有需要请联系我 `,
      // backgroundColor: '#fafbfc',
      // textColor: '#091E42',
      isCloseable: false,
    },
    colorMode: {
      defaultMode: "light",
    },

    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Arce',
      hideOnScroll:true,
      logo: {
        alt: 'Arce',
        src: 'img/logo.webp',
        srcDark: "img/logo.webp",
      },
      items: [
        {to: 'blog', label: '博客', position: 'left'},
        {
          sidebarId: 'tutorialSidebar',
          type: 'docSidebar',
          position: 'left',
          label: '学习',
        },
        {
          label: '作品',
          position: 'left',
          to: 'project',
        },
        {
          type:"docSidebar",
          to:"community",
          sidebarId: 'communitySidebar',
          position: 'right',
          label: '第九艺术',
          docsPluginId: 'community'
        },
        // {
        //   label:"community版本",
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        //   docsPluginId: 'community',
        //   dropdownItemsAfter: [],
        //   dropdownActiveClassDisabled: true,
        // },
        // {
        //   type:"docSidebar",
        //   to:"docs/api",
        //   sidebarId: 'apiSidebar',
        //   position: 'right',
        //   label: 'GameJamStarter',
        // },
        {
          label:"Doc版本",
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr class="dropdown-separator">',
            },
            {
              type: 'html',
              className: 'dropdown-archived-versions',
              value: '<b>Archived versions</b>',
            },
            // {to: '/versions', label: 'All Doc versions'},

            {
              type: 'html',
              value: '<hr class="dropdown-separator">',
            },
            // {
            //   to: '/versions',
            //   label: 'All versions',
            // },
          ],
          dropdownActiveClassDisabled: true,
        },

        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: 'https://github.com/facebook/docusaurus/issues/3526',
              label: 'Help Us Translate',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Intro',
        //       to: '/docs/',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: '作品',
              to: '/project',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/charles0122',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Arcetop.`,
    },
    algolia: {
      apiKey: "17f8103d7297de826216062f2fab401f",
      indexName: "arce",
      appId: "L8ERAJFKUJ",
      contextualSearch: true,
    },
    giscus: {
      repo: 'charles0122/discussions.arce.top',
      repoId: 'R_kgDOIeJrkw',
      category: 'General',
      categoryId: 'DIC_kwDOIeJrk84CSqrk',
      mapping: 'title',
      lang: 'zh-CN',
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['java', 'csharp', 'typescript', 'powershell','dart','java','python'],
      defaultLanguage: "javascript",
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {}
    },
  } satisfies Preset.ThemeConfig,
  plugins:[
    'docusaurus-plugin-sass',
    'image-zoom',
    [
      'content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: './sidebarsCommunity.ts',
        lastVersion: '1.0.0',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        versions: {
          "1.0.0": {
            label: 'v1_community',
            // path: '1.0.0',
          },
        },
        onlyIncludeVersions: ["1.0.0"],
      } satisfies DocsOptions,
    ],
    [
      'ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      } satisfies IdealImageOptions,
    ],
    [
      'pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      } satisfies PwaOptions
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],
};

export default config;
