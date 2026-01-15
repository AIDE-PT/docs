import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AIDE',
  tagline: 'O futuro do cuidado é conectado.',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.aide.pt',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AIDE-PT', // Usually your GitHub org/user name.
  projectName: 'AIDE', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-PT',
    locales: ['pt-PT'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AIDE-PT/docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["pt"],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: "/docs",
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/cover_aide.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'AIDE Logo',
        src: 'img/aide_FULLblack.svg',
        srcDark: 'img/aide_FULLwhite.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          href: 'https://github.com/AIDE-PT/docs',
          label: 'Contribuir para documentação',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
        
        {
          title: 'AIDE',
          items: [
            {
              label: 'Website',
              to: 'https://aide.pt',
            },
            {
              label: 'Universidade de Aveiro',
              to: 'https://ua.pt',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AIDE. Documentação construída com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
