import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SearchLight Documentation',
  tagline: 'Technical documentation for integrating with SearchLight.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.searchlightdigital.io',
  baseUrl: '/',

  organizationName: 'SearchLight-Advertising',
  projectName: 'searchlight-public-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
      navbar: {
        logo: {
          alt: 'SearchLight',
          src: 'img/logo-dark.svg',
          srcDark: 'img/logo-light.svg',
        },
        items: [
          {
            href: 'https://searchlightdigital.io',
            label: 'SearchLight',
            position: 'right',
          },
          {
            href: 'https://github.com/SearchLight-Advertising/searchlight-public-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} SearchLight Digital.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;