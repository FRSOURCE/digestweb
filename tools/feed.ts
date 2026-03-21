import Parser from 'rss-parser';
import type { FeedItem } from './types.ts';

export async function fetchFeed(url: string): Promise<FeedItem[]> {
  const parser = new Parser({
    timeout: 10000,
    headers: { 'User-Agent': 'digestweb.dev-fetcher/1.0' },
  });
  const feed = await parser.parseURL(url);
  return feed.items.map((item) => ({
    title: item.title ?? '',
    link: item.link ?? item.guid ?? '',
    isoDate: item.isoDate ?? item.pubDate ?? new Date().toISOString(),
    contentSnippet: item.contentSnippet,
    content: item.content,
  }));
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
