import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BS Data Science Master Notes',
  tagline: 'Master notes for the IIT Madras BS Data Science programme',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://bs-data-science-master-notes.vercel.app',
  baseUrl: '/',

  onBrokenLinks: 'throw',

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
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'BS Data Science Master Notes',
      logo: {
        alt: 'BS Data Science Master Notes Logo',
        src: 'img/logo.svg',
      },
      items: [],
    },

    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} BS Data Science Master Notes.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;