import { defineConfig } from 'vitepress';
import { Feed } from 'feed';
import matter from 'gray-matter';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';

const siteUrl = 'https://.frsource.org';
const lang = 'en-US';

export default defineConfig({
  title: 'digestweb.dev',
  description: 'Daily curated web dev news by FRSOURCE',
  srcDir: '.',
  outDir: './dist',
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
  vite: { plugins: [tailwindcss()] },
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
  sitemap: {
    hostname: siteUrl,
  },
});
