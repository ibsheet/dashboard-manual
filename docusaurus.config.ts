import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// markdown 강조/링크 문법을 걷어낸 일반 텍스트
function toPlainText(str: string): string {
  return str
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// 문서 description 자동 생성 ("## 설명" 섹션 우선, 없으면 첫 본문 문단)
// 기본 동작은 제목 아래 첫 줄을 쓰기 때문에 "---", "타입" 같은 값이 들어감
function getDocDescription(content: string): string {
  let text = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/:::[\s\S]*?:::/g, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  const title = toPlainText((text.match(/^#\s+(.+)$/m) || ['', ''])[1]);
  const matched = text.match(/^##\s*\[?설명\]?.*$/m);
  if (matched) {
    text = text.slice(matched.index! + matched[0].length);
  }
  // 제목/표 줄을 제외한 첫번째 문단 (없으면 문서 제목)
  const block = text
    .split(/\r?\n\s*\r?\n/)
    .map(b => b.split(/\r?\n/).filter(line => !/^\s*(#|\|)/.test(line)).join('\n').trim())
    .find(b => b && !/^(---|!\[|<|import |export )/.test(b));
  const plain = block ? toPlainText(block) : title;
  return plain.length > 160 ? `${plain.slice(0, 157)}...` : plain;
}

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
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  // Google Search Console 소유권 확인
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'Ssdb6o4vJoH-FmxjlqB0KE54ifGIJNizkzq_VPMfG8o',
      },
    },
  ],

  markdown: {
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      if (!result.frontMatter.description && /[\\/]docs[\\/]/.test(params.filePath)) {
        const description = getDocDescription(result.content);
        if (description) {
          result.frontMatter.description = description;
        }
      }
      return result;
    },
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

  plugins: [
    require.resolve('docusaurus-lunr-search'),
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
