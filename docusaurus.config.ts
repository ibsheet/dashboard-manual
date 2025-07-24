import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DashBuilder',
  tagline: 'DashBuilder: Turning Data into Insights, Insights into Success',
  favicon: 'img/favicon.ico',

  url: 'https://ibsheet.github.io',
  baseUrl: '/dashboard-manual/', // 저장소 이름 기준
  organizationName: 'ibsheet', // GitHub 조직/사용자 이름
  projectName: 'dashboard-manual', // 저장소 이름

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
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    description: 'DashBuilder Guide',
    navbar: {
      title: 'DashBuilder',
      logo: {
        alt: 'DashBuilder Logo',
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
      copyright: `@ 2025 Dashboard Team`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // algolia: {
    //   appId: 'W980SQF4DH',
    //   apiKey: '0ee28e648abb74fcb76f3b21d9c3a9a3',
    //   indexName: 'dashBuilderManual',
    //   contextualSearch: true,
    // }
  } satisfies Preset.ThemeConfig,
};

export default config;
