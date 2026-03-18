import { defineConfig } from 'vitepress';
import { Feed } from 'feed';
import matter from 'gray-matter';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';

const siteUrl = 'https://.frsource.org';
const lang = 'en-US';

const isProd = process.env.PROD === 'true';
const isIncremental = process.env.VITEPRESS_INCREMENTAL === '1';
const skipArticles =
  process.env.VITEPRESS_SKIP_ARTICLES?.split('|').filter(Boolean) ?? [];

export default defineConfig({
  title: 'digestweb.dev',
  description: 'Daily curated web dev news by FRSOURCE',
  base: isProd ? '/digestweb/' : undefined,
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
    plugins: [tailwindcss()],
    ...(isIncremental && { build: { emptyOutDir: false } }),
  },
  head: [
    [
      'link',
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        href: '/feed.rss',
        title: 'dailyweb RSS',
      },
    ],
    [
      'link',
      {
        rel: 'alternate',
        type: 'application/atom+xml',
        href: '/feed.atom',
        title: 'dailyweb Atom',
      },
    ],
    [
      'link',
      {
        rel: 'alternate',
        type: 'application/feed+json',
        href: '/feed.json',
        title: 'dailyweb JSON Feed',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
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
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap',
        rel: 'stylesheet',
      },
    ],
    ['meta', { property: 'og:site_name', content: 'digestweb.dev' }],
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
        link: siteUrl,
      },
      updated: new Date(),
    });

    const articlesDir = resolve(siteConfig.srcDir, 'articles');
    let files: string[] = [];
    try {
      files = readdirSync(articlesDir).filter((f) => f.endsWith('.md'));
    } catch {
      /* articles dir not yet populated */
    }

    files
      .map((file) => {
        const { data, content } = matter(
          readFileSync(resolve(articlesDir, file), 'utf-8'),
        );
        return { data, content, slug: file.replace(/\.md$/, '') };
      })
      .sort((a, b) => +new Date(b.data.date) - +new Date(a.data.date))
      .forEach(({ data, content, slug }) => {
        const link = `${siteUrl}/articles/${slug}`;
        feed.addItem({
          title: data.title ?? slug,
          id: link,
          link,
          description: content.trim(),
          date: new Date(data.date),
        });
      });

    writeFileSync(resolve(siteConfig.outDir, 'feed.rss'), feed.rss2());
    writeFileSync(resolve(siteConfig.outDir, 'feed.atom'), feed.atom1());
    writeFileSync(resolve(siteConfig.outDir, 'feed.json'), feed.json1());
  },
  transformPageData(pageData) {
    if (pageData.frontmatter.layout !== 'article') return;
    const canonicalUrl = `${siteUrl}/${pageData.relativePath.replace(/\.md$/, '')}`;
    const { title, description, photo } = pageData.frontmatter;
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push(
      ['meta', { property: 'og:type', content: 'article' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { property: 'og:site_name', content: 'digestweb.dev' }],
      ...(photo
        ? [
            ['meta', { property: 'og:image', content: photo }] as [
              string,
              Record<string, string>,
            ],
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
  },
  sitemap: {
    hostname: siteUrl,
  },
});
