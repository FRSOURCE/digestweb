import { defineConfig } from 'vitepress';
import { Feed } from 'feed';
import matter from 'gray-matter';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

const siteUrl = 'https://digestweb.dev';
const lang = 'en-US';

const base = '/';
const isIncremental = process.env.VITEPRESS_INCREMENTAL === '1';
const skipArticles =
  process.env.VITEPRESS_SKIP_ARTICLES?.split('|').filter(Boolean) ?? [];

process.env.VITE_EXTRA_EXTENSIONS = 'rss,atom';

type ArticleFrontmatterData = {
  title: string;
  description: string;
  photo: string;
  original_url: string;
  source_name: string;
  source_author: string;
  tags: string[];
  significance: number;
};

export default defineConfig({
  title: 'digestweb.dev',
  description: 'Daily curated web dev news by FRSOURCE',
  base: undefined,
  cleanUrls: true,
  srcDir: '.',
  outDir: './dist',
  metaChunk: true,
  locales: {
    root: {
      label: 'English',
      lang,
    },
    pl: {
      label: 'Polski',
      lang: 'pl-PL',
      description: 'Codzienna porcja wiadomości o web devie od FRSOURCE.',
    },
  },
  srcExclude: skipArticles,
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
          navigateFallback: null,
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
          ],
        },
        manifest: {
          name: 'digestweb.dev',
          short_name: 'digestweb',
          description: 'Daily curated web dev news by FRSOURCE',
          theme_color: '#0B3D3F',
          background_color: '#F2EDE4',
          display: 'standalone',
          start_url: '/',
          icons: [
            { src: 'pwa-64x64.png', sizes: '64x64', type: 'image/png' },
            { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
            {
              src: 'maskable-icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
      }),
    ],
    ...(isIncremental && { build: { emptyOutDir: false } }),
  },
  head: [
    ['link', { rel: 'preconnect', href: 'https://challenges.cloudflare.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'true',
      },
    ],
    [
      'script',
      {
        async: '',
        defer: '',
        src: 'https://challenges.cloudflare.com/turnstile/v0/api.js',
      },
    ],
    [
      'link',
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        href: base + 'feed.rss',
        title: 'dailyweb RSS',
      },
    ],
    [
      'link',
      {
        rel: 'alternate',
        type: 'application/atom+xml',
        href: base + 'feed.atom',
        title: 'dailyweb Atom',
      },
    ],
    [
      'link',
      {
        rel: 'alternate',
        type: 'application/feed+json',
        href: base + 'feed.json',
        title: 'dailyweb JSON Feed',
      },
    ],
    ['link', { rel: 'icon', href: base + 'favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: base + 'logo.svg' }],
    [
      'link',
      { rel: 'apple-touch-icon', href: base + 'apple-touch-icon-180x180.png' },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap',
        rel: 'stylesheet',
      },
    ],
    ['meta', { property: 'og:site_name', content: 'digestweb.dev' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: siteUrl }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Daily curated web dev news by FRSOURCE',
      },
    ],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],
  themeConfig: {
    nav: [{ text: 'RSS', link: '/feed.rss' }],
  },
  async buildEnd(siteConfig) {
    const feed = new Feed({
      title: siteConfig.site.title,
      description: siteConfig.site.description,
      id: siteUrl + '/',
      link: siteUrl + '/',
      language: lang,
      copyright: `Copyright ${new Date().getFullYear()} FRSOURCE`,
      feedLinks: {
        rss2: `${siteUrl}/feed.rss`,
        atom: `${siteUrl}/feed.atom`,
        json: `${siteUrl}/feed.json`,
      },
      author: {
        name: 'Jakub Freisler',
        email: 'jakub@frsource.org',
        link: 'https://www.frsource.org/',
      },
      updated: new Date(),
      ttl: 60 * 12, // 12 hours
      image: `${siteUrl}/logo.svg`,
    });

    const articlesDir = resolve(siteConfig.srcDir, 'articles');
    type ArticleEntry = {
      data: ArticleFrontmatterData;
      content: string;
      slug: string;
      dateDir: string;
      date: Date;
    };
    const entries: ArticleEntry[] = [];
    try {
      const dateDirs = readdirSync(articlesDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
      for (const dateDir of dateDirs) {
        const dayPath = resolve(articlesDir, dateDir);
        for (const file of readdirSync(dayPath).filter((f) =>
          f.endsWith('.md'),
        )) {
          const { data, content } = matter(
            readFileSync(resolve(dayPath, file), 'utf-8'),
          );
          const typedData = data as ArticleFrontmatterData;
          entries.push({
            data: typedData,
            content,
            slug: file.replace(/\.md$/, ''),
            dateDir,
            date: new Date(dateDir),
          });
        }
      }
    } catch {
      /* articles dir not yet populated */
    }

    entries
      .sort((a, b) => +b.date - +a.date)
      .forEach(({ data, content, slug, dateDir, date }) => {
        const link = `${siteUrl}/articles/${dateDir}/${slug}`;
        content = content.trim() + '\n\nOriginal Link: ' + data.original_url;
        feed.addItem({
          title: (data.title as string) ?? slug,
          id: link,
          link,
          description: data.description.trim(),
          content,
          image: data.photo,
          date,
          author: data.source_author
            ? [{ name: data.source_author }]
            : undefined,
        });
      });

    writeFileSync(resolve(siteConfig.outDir, 'feed.rss'), feed.rss2());
    writeFileSync(resolve(siteConfig.outDir, 'feed.atom'), feed.atom1());
    writeFileSync(resolve(siteConfig.outDir, 'feed.json'), feed.json1());
  },
  transformPageData(pageData) {
    pageData.frontmatter.head ??= [];

    const isArticle = pageData.frontmatter.layout === 'article';
    const canonical = isArticle
      ? `${siteUrl}/${pageData.relativePath.replace(/\.md$/, '').replace(/\/index$/, '')}`
      : `${siteUrl}/${pageData.relativePath.replace(/(index)?\.md$/, '')}`;

    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonical },
    ]);

    if (!isArticle) {
      pageData.frontmatter.head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'digestweb.dev',
          url: siteUrl,
          description: 'Daily curated web dev news by FRSOURCE',
        }),
      ]);
      return;
    }

    const { title, description, photo, source_author } = pageData.frontmatter;
    const dateMatch = pageData.relativePath.match(
      /articles\/(\d{4}-\d{2}-\d{2})\//,
    );
    const publishedDate = dateMatch
      ? new Date(dateMatch[1]).toISOString()
      : undefined;

    pageData.frontmatter.head.push(
      ['meta', { property: 'og:type', content: 'article' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { property: 'og:site_name', content: 'digestweb.dev' }],
      ...(photo
        ? [
            ['meta', { property: 'og:image', content: photo }] as [
              string,
              Record<string, string>,
            ],
          ]
        : []),
      ...(publishedDate
        ? [
            [
              'meta',
              { property: 'article:published_time', content: publishedDate },
            ] as [string, Record<string, string>],
          ]
        : []),
      ...(source_author
        ? [
            [
              'meta',
              { property: 'article:author', content: source_author },
            ] as [string, Record<string, string>],
          ]
        : []),
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ...(photo
        ? [
            ['meta', { name: 'twitter:image', content: photo }] as [
              string,
              Record<string, string>,
            ],
          ]
        : []),
    );

    pageData.frontmatter.head.push([
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: title,
        description,
        url: canonical,
        ...(publishedDate ? { datePublished: publishedDate } : {}),
        ...(photo ? { image: photo } : {}),
        ...(source_author
          ? { author: { '@type': 'Person', name: source_author } }
          : {}),
        publisher: {
          '@type': 'Organization',
          name: 'digestweb.dev',
          url: siteUrl,
        },
      }),
    ]);
  },
  sitemap: {
    hostname: siteUrl,
    transformItems(items) {
      return items.map((item) => ({
        ...item,
        changefreq: item.url === '' ? 'daily' : 'monthly',
        priority: item.url === '' ? 1.0 : 0.7,
      }));
    },
  },
});
