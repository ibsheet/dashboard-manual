import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'IBDashboard',
  tagline: 'IBDashboard: Turning Data into Insights, Insights into Success',
  favicon: 'img/favicon.ico',

  url: 'https://ibsheet.github.io',
  baseUrl: '/ibdashboard-manual/', // 저장소 이름 기준
  organizationName: 'ibsheet', // GitHub 조직/사용자 이름
  projectName: 'ibdashboard-manual', // 저장소 이름

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'IBDashboard',
      logo: {
        alt: 'IBDashboard Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'right',
          label: 'Guide',
        },
        {
          position: 'right',
          label: `IBSheet`,
          href : `https://docs.ibsheet.com/ibsheet/v8/manual/#docs/intro/1introduce`,
        },
        {
          position: 'right',
          label: `IBChart`,
          href : `https://docs.ibsheet.com/ibchart/v1/manual/#docs/intro/feature`,
        },
        {
          position: 'right',
          label: `IBMap`,
          href : `https://docs.ibsheet.com/ibmap/v1/manual/#docs/intro/feature`,
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guide',
              to: '/docs/intro',
            },
          ],
        },
      ],
      copyright: `@ 2025 IBDashboard Team`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: 'W980SQF4DH',
      apiKey: '0ee28e648abb74fcb76f3b21d9c3a9a3',
      indexName: 'ibdashboardManual',
      contextualSearch: true,
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
