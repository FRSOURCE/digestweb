import * as cheerio from 'cheerio';
import type { FeedItem } from './fetch-news.ts';

const fetchPage = async (url: string) => {
  const response = await fetch(url);
  const html = await response.text();
  return cheerio.load(html);
};

export type SourceCategory =
  | 'framework'
  | 'build-tool'
  | 'language-runtime'
  | 'css-styling'
  | 'testing'
  | 'web-platform'
  | 'person-blog'
  | 'general'
  | 'ai';

export interface Source {
  id: string;
  name: string;
  category: SourceCategory;
  tags: string[];
  feed: string | ((homeUrl: string) => Promise<FeedItem[]>) | null;
  homeUrl: string;
  authorName?: string;
}

export const sources: Source[] = [
  // Frameworks / Libraries
  {
    id: 'react-blog',
    name: 'React Blog',
    category: 'framework',
    tags: ['react', 'frameworks'],
    feed: 'https://react.dev/rss.xml',
    homeUrl: 'https://react.dev/blog',
  },
  {
    id: 'vuejs-blog',
    name: 'Vue.js Blog',
    category: 'framework',
    tags: ['vue', 'frameworks'],
    feed: 'https://blog.vuejs.org/feed.rss',
    homeUrl: 'https://blog.vuejs.org',
  },
  {
    id: 'angular-blog',
    name: 'Angular Blog',
    category: 'framework',
    tags: ['angular', 'frameworks'],
    feed: 'https://blog.angular.dev/feed',
    homeUrl: 'https://blog.angular.dev',
  },
  {
    id: 'svelte-blog',
    name: 'Svelte Blog',
    category: 'framework',
    tags: ['svelte', 'frameworks'],
    feed: 'https://svelte.dev/blog/rss.xml',
    homeUrl: 'https://svelte.dev/blog',
  },
  {
    id: 'solidjs-releases',
    name: 'SolidJS Releases',
    category: 'framework',
    tags: ['solidjs', 'release'],
    feed: 'https://github.com/solidjs/solid/releases.atom',
    homeUrl: 'https://solidjs.com',
  },
  {
    id: 'astro-blog',
    name: 'Astro Blog',
    category: 'framework',
    tags: ['astro', 'frameworks'],
    feed: 'https://astro.build/rss.xml',
    homeUrl: 'https://astro.build/blog',
  },
  {
    id: 'qwik-blog',
    name: 'Qwik Blog',
    category: 'framework',
    tags: ['qwik', 'frameworks'],
    homeUrl: 'https://qwik.dev/blog/',
    feed: async (homeUrl) => {
      const $ = await fetchPage(homeUrl);
      const latestArticle = $('main section article a').first();

      const link = new URL(latestArticle.attr('href') ?? '', homeUrl).href;
      const title = latestArticle.find('h2').text();

      const $details = await fetchPage(link);
      const dateString = $details('h1 + div h4').first().text();
      const isoDate = new Date(dateString).toISOString();
      const content = $details('main article').html() ?? undefined;

      if (!title || !link || !dateString || !content) {
        // eslint-disable-next-line no-console -- logging for debugging
        console.error(
          'Qwik blog: No title, link, date, or content found, skipping',
        );
        return [];
      }

      return [{ title, link, isoDate, content }];
    },
  },
  {
    id: 'nextjs-blog',
    name: 'Next.js Blog',
    category: 'framework',
    tags: ['react', 'frameworks'],
    feed: 'https://nextjs.org/feed.xml',
    homeUrl: 'https://nextjs.org/blog',
  },
  {
    id: 'nuxt-releases',
    name: 'Nuxt Releases',
    category: 'framework',
    tags: ['vue', 'frameworks', 'release'],
    feed: 'https://github.com/nuxt/nuxt/releases.atom',
    homeUrl: 'https://nuxt.com',
  },
  {
    id: 'remix-blog',
    name: 'Remix Blog',
    category: 'framework',
    tags: ['react', 'frameworks'],
    feed: 'https://remix.run/blog/rss.xml',
    homeUrl: 'https://remix.run/blog',
  },
  {
    id: 'tanstack-blog',
    name: 'TanStack Blog',
    category: 'framework',
    tags: ['react', 'frameworks', 'dx'],
    feed: 'https://tanstack.com/rss.xml',
    homeUrl: 'https://tanstack.com',
  },

  // Build Tools
  {
    id: 'vite-blog',
    name: 'Vite Blog',
    category: 'build-tool',
    tags: ['tooling', 'build-tools'],
    feed: 'https://github.com/vitejs/vite/releases.atom',
    homeUrl: 'https://vite.dev',
  },
  {
    id: 'vite-releases',
    name: 'Vite Releases',
    category: 'build-tool',
    tags: ['tooling', 'build-tools', 'release'],
    feed: 'https://vite.dev/blog.rss',
    homeUrl: 'https://vite.dev',
  },
  {
    id: 'voidzero-blog',
    name: 'VoidZero Blog',
    category: 'build-tool',
    tags: ['tooling', 'build-tools'],
    feed: 'https://voidzero.dev/feed.xml',
    homeUrl: 'https://voidzero.dev',
  },
  {
    id: 'rollup-releases',
    name: 'Rollup Releases',
    category: 'build-tool',
    tags: ['tooling', 'build-tools', 'release'],
    feed: 'https://github.com/rollup/rollup/releases.atom',
    homeUrl: 'https://rollupjs.org',
  },
  {
    id: 'esbuild-releases',
    name: 'esbuild Releases',
    category: 'build-tool',
    tags: ['tooling', 'build-tools', 'release', 'performance'],
    feed: 'https://github.com/evanw/esbuild/releases.atom',
    homeUrl: 'https://esbuild.github.io',
  },
  {
    id: 'bun-blog',
    name: 'Bun Blog',
    category: 'build-tool',
    tags: ['bun', 'tooling', 'build-tools'],
    feed: 'https://bun.sh/rss.xml',
    homeUrl: 'https://bun.sh/blog',
    authorName: 'Jarred Sumner',
  },
  {
    id: 'biome-blog',
    name: 'Biome Blog',
    category: 'build-tool',
    tags: ['tooling', 'dx'],
    feed: 'https://biomejs.dev/blog/rss.xml',
    homeUrl: 'https://biomejs.dev/blog',
  },
  {
    id: 'pnpm-releases',
    name: 'pnpm Releases',
    category: 'build-tool',
    tags: ['tooling', 'release'],
    feed: 'https://github.com/pnpm/pnpm/releases.atom',
    homeUrl: 'https://pnpm.io',
  },
  {
    id: 'github-blog',
    name: 'GitHub Blog',
    category: 'build-tool',
    tags: ['tooling', 'dx'],
    feed: 'https://github.blog/feed',
    homeUrl: 'https://github.blog',
  },

  // Languages / Runtimes
  {
    id: 'typescript-blog',
    name: 'TypeScript Blog',
    category: 'language-runtime',
    tags: ['typescript'],
    feed: 'https://devblogs.microsoft.com/typescript/feed/',
    homeUrl: 'https://devblogs.microsoft.com/typescript',
  },
  {
    id: 'nodejs-blog',
    name: 'Node.js Blog',
    category: 'language-runtime',
    tags: ['nodejs'],
    feed: 'https://nodejs.org/en/feed/blog.xml',
    homeUrl: 'https://nodejs.org/en/blog',
  },
  {
    id: 'deno-releases',
    name: 'Deno Releases',
    category: 'language-runtime',
    tags: ['deno', 'release'],
    feed: 'https://github.com/denoland/deno/releases.atom',
    homeUrl: 'https://deno.com',
  },
  {
    id: 'wasm-blog',
    name: 'WebAssembly Blog',
    category: 'language-runtime',
    tags: ['wasm', 'web-platform'],
    feed: 'https://webassembly.org/feed.xml',
    homeUrl: 'https://webassembly.org/blog',
  },

  // CSS / Styling
  {
    id: 'tailwind-blog',
    name: 'Tailwind CSS Blog',
    category: 'css-styling',
    tags: ['css', 'tooling'],
    feed: 'https://tailwindcss.com/feeds/feed.xml',
    homeUrl: 'https://tailwindcss.com/blog',
  },
  {
    id: 'postcss-releases',
    name: 'PostCSS Releases',
    category: 'css-styling',
    tags: ['css', 'tooling', 'release'],
    feed: 'https://github.com/postcss/postcss/releases.atom',
    homeUrl: 'https://postcss.org',
  },
  {
    id: 'lightningcss-releases',
    name: 'Lightning CSS Releases',
    category: 'css-styling',
    tags: ['css', 'tooling', 'build-tools', 'release'],
    feed: 'https://github.com/parcel-bundler/lightningcss/releases.atom',
    homeUrl: 'https://lightningcss.dev',
  },
  {
    id: 'csswg-blog',
    name: 'CSS Working Group Blog',
    category: 'css-styling',
    tags: ['css', 'web-platform'],
    feed: 'https://www.w3.org/blog/CSS/feed/',
    homeUrl: 'https://www.w3.org/blog/CSS',
  },

  // Testing
  {
    id: 'vitest-releases',
    name: 'Vitest Releases',
    category: 'testing',
    tags: ['testing', 'release'],
    feed: 'https://github.com/vitest-dev/vitest/releases.atom',
    homeUrl: 'https://vitest.dev',
  },
  {
    id: 'playwright-releases',
    name: 'Playwright Releases',
    category: 'testing',
    tags: ['testing', 'release'],
    feed: 'https://github.com/microsoft/playwright/releases.atom',
    homeUrl: 'https://playwright.dev',
  },
  {
    id: 'cypress-blog',
    name: 'Cypress Blog',
    category: 'testing',
    tags: ['testing'],
    feed: 'https://www.cypress.io/blog/rss.xml',
    homeUrl: 'https://www.cypress.io/blog',
  },
  {
    id: 'jest-releases',
    name: 'Jest Releases',
    category: 'testing',
    tags: ['testing', 'release'],
    feed: 'https://github.com/jestjs/jest/releases.atom',
    homeUrl: 'https://jestjs.io',
  },

  // Web Platform / Browsers
  {
    id: 'chrome-developers',
    name: 'Chrome Developers',
    category: 'web-platform',
    tags: ['browser', 'web-platform'],
    feed: 'https://developer.chrome.com/static/blog/feed.xml',
    homeUrl: 'https://developer.chrome.com/blog',
  },
  {
    id: 'web-dev',
    name: 'web.dev',
    category: 'web-platform',
    tags: ['web-platform', 'performance', 'accessibility'],
    feed: 'https://web.dev/feed.xml',
    homeUrl: 'https://web.dev',
  },
  {
    id: 'mdn-blog',
    name: 'MDN Blog',
    category: 'web-platform',
    tags: ['web-platform', 'browser', 'html'],
    feed: 'https://developer.mozilla.org/en-US/blog/rss.xml',
    homeUrl: 'https://developer.mozilla.org/en-US/blog',
  },
  {
    id: 'firefox-blog',
    name: 'Firefox Hacks',
    category: 'web-platform',
    tags: ['browser', 'web-platform'],
    feed: 'https://hacks.mozilla.org/feed/',
    homeUrl: 'https://hacks.mozilla.org',
  },
  {
    id: 'webkit-blog',
    name: 'WebKit Blog',
    category: 'web-platform',
    tags: ['browser', 'web-platform'],
    feed: 'https://webkit.org/feed/',
    homeUrl: 'https://webkit.org/blog',
  },
  {
    id: 'tc39-proposals',
    name: 'TC39 Proposals (commits)',
    category: 'web-platform',
    tags: ['javascript', 'web-platform'],
    feed: 'https://github.com/tc39/proposals/commits.atom',
    homeUrl: 'https://github.com/tc39/proposals',
  },

  // Influential People
  {
    id: 'overreacted',
    name: 'Overreacted',
    category: 'person-blog',
    tags: ['react', 'javascript'],
    feed: 'https://overreacted.io/rss.xml',
    homeUrl: 'https://overreacted.io',
    authorName: 'Dan Abramov',
  },
  {
    id: 'antfu-blog',
    name: 'Anthony Fu Blog',
    category: 'person-blog',
    tags: ['vue', 'tooling', 'javascript'],
    feed: 'https://antfu.me/feed.xml',
    homeUrl: 'https://antfu.me',
    authorName: 'Anthony Fu',
  },
  {
    id: 'joshwcomeau',
    name: 'Josh W. Comeau',
    category: 'person-blog',
    tags: ['css', 'react', 'tutorial'],
    feed: 'https://www.joshwcomeau.com/rss.xml',
    homeUrl: 'https://www.joshwcomeau.com',
    authorName: 'Josh W. Comeau',
  },
  {
    id: 'total-typescript',
    name: 'Total TypeScript',
    category: 'person-blog',
    tags: ['typescript', 'tutorial'],
    feed: 'https://www.totaltypescript.com/rss.xml',
    homeUrl: 'https://www.totaltypescript.com',
    authorName: 'Matt Pocock',
  },
  {
    id: 'kentcdodds',
    name: 'Kent C. Dodds',
    category: 'person-blog',
    tags: ['react', 'testing', 'javascript'],
    feed: 'https://kentcdodds.com/blog/rss.xml',
    homeUrl: 'https://kentcdodds.com/blog',
    authorName: 'Kent C. Dodds',
  },
  {
    id: 'jake-archibald',
    name: 'Jake Archibald',
    category: 'person-blog',
    tags: ['web-platform', 'javascript', 'performance'],
    feed: 'https://jakearchibald.com/posts.rss',
    homeUrl: 'https://jakearchibald.com',
    authorName: 'Jake Archibald',
  },
  {
    id: 'addy-osmani',
    name: 'Addy Osmani',
    category: 'person-blog',
    tags: ['performance', 'javascript'],
    feed: 'https://addyosmani.com/rss.xml',
    homeUrl: 'https://addyosmani.com',
    authorName: 'Addy Osmani',
  },
  {
    id: 'una-kravets',
    name: 'Una Kravets',
    category: 'person-blog',
    tags: ['css', 'web-platform', 'design'],
    feed: 'https://una.im/rss.xml',
    homeUrl: 'https://una.im',
    authorName: 'Una Kravets',
  },

  // AI / LLM
  {
    id: 'anthropic-engineering',
    name: 'Anthropic Engineering',
    category: 'ai',
    tags: ['ai', 'llm', 'anthropic'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_anthropic_engineering.xml',
    homeUrl: 'https://www.anthropic.com/engineering',
  },
  {
    id: 'anthropic-research',
    name: 'Anthropic Research',
    category: 'ai',
    tags: ['ai', 'llm', 'anthropic'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_anthropic_research.xml',
    homeUrl: 'https://www.anthropic.com/research',
  },
  {
    id: 'claude-blog',
    name: 'Claude Blog',
    category: 'ai',
    tags: ['ai', 'llm', 'claude', 'developer-tools'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_claude.xml',
    homeUrl: 'https://claude.com/blog',
  },
  {
    id: 'openai-research',
    name: 'OpenAI Research',
    category: 'ai',
    tags: ['ai', 'llm', 'openai'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_openai_research.xml',
    homeUrl: 'https://openai.com/news/research',
  },
  {
    id: 'openai-blog',
    name: 'OpenAI Blog',
    category: 'ai',
    tags: ['ai', 'llm', 'openai'],
    feed: 'https://openai.com/news/rss.xml',
    homeUrl: 'https://openai.com/news',
  },
  {
    id: 'ollama-blog',
    name: 'Ollama Blog',
    category: 'ai',
    tags: ['ai', 'llm', 'open-source'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_ollama.xml',
    homeUrl: 'https://ollama.com/blog',
  },
  {
    id: 'xai-news',
    name: 'xAI News',
    category: 'ai',
    tags: ['ai', 'llm'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_xainews.xml',
    homeUrl: 'https://x.ai/news',
  },
  {
    id: 'huggingface-blog',
    name: 'Hugging Face Blog',
    category: 'ai',
    tags: ['ai', 'llm', 'open-source'],
    feed: 'https://huggingface.co/blog/feed.xml',
    homeUrl: 'https://huggingface.co/blog',
  },
  {
    id: 'deepmind-blog',
    name: 'Google DeepMind Blog',
    category: 'ai',
    tags: ['ai', 'research', 'google'],
    feed: 'https://deepmind.com/blog/feed/basic',
    homeUrl: 'https://deepmind.google/blog',
  },
  {
    id: 'google-ai-developers',
    name: 'Google Developers Blog – AI',
    category: 'ai',
    tags: ['ai', 'research', 'google'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_google_ai.xml',
    homeUrl: 'https://developers.googleblog.com',
  },
  {
    id: 'cursor-blog',
    name: 'Cursor Blog',
    category: 'ai',
    tags: ['ai', 'developer-tools', 'coding'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_cursor.xml',
    homeUrl: 'https://cursor.com/blog',
  },
  {
    id: 'windsurf-blog',
    name: 'Windsurf Blog',
    category: 'ai',
    tags: ['ai', 'developer-tools', 'coding'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_windsurf_blog.xml',
    homeUrl: 'https://windsurf.com/blog',
  },
  {
    id: 'the-batch',
    name: 'The Batch',
    category: 'ai',
    tags: ['ai', 'newsletter'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_the_batch.xml',
    homeUrl: 'https://www.deeplearning.ai/the-batch',
  },
  {
    id: 'ahead-of-ai',
    name: 'Ahead of AI',
    category: 'ai',
    tags: ['ai', 'research', 'newsletter'],
    feed: 'https://magazine.sebastianraschka.com/feed',
    homeUrl: 'https://magazine.sebastianraschka.com',
    authorName: 'Sebastian Raschka',
  },
  {
    id: 'import-ai',
    name: 'Import AI',
    category: 'ai',
    tags: ['ai', 'research', 'newsletter'],
    feed: 'https://importai.substack.com/feed',
    homeUrl: 'https://importai.substack.com',
    authorName: 'Jack Clark',
  },
  {
    id: 'surge-ai-blog',
    name: 'Surge AI Blog',
    category: 'ai',
    tags: ['ai', 'data'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_blogsurgeai.xml',
    homeUrl: 'https://www.surgehq.ai/blog',
  },
  {
    id: 'dagster-blog',
    name: 'Dagster Blog',
    category: 'ai',
    tags: ['ai', 'data', 'tooling'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_dagster.xml',
    homeUrl: 'https://dagster.io/blog',
  },
  {
    id: 'thinking-machines-lab',
    name: 'Thinking Machines Lab',
    category: 'ai',
    tags: ['ai', 'ml'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_thinkingmachines.xml',
    homeUrl: 'https://thinkingmachines.ai/blog',
  },
  {
    id: 'simonwillison-blog',
    name: "Simon Willison's Weblog",
    category: 'person-blog',
    tags: ['ai', 'web-dev', 'llm'],
    feed: 'https://simonwillison.net/atom/everything/',
    homeUrl: 'https://simonwillison.net',
    authorName: 'Simon Willison',
  },
  {
    id: 'karpathy-blog',
    name: "Andrej Karpathy's Blog",
    category: 'person-blog',
    tags: ['ai', 'deep-learning'],
    feed: 'https://karpathy.bearblog.dev/feed/',
    homeUrl: 'https://karpathy.bearblog.dev',
    authorName: 'Andrej Karpathy',
  },
  {
    id: 'eugene-yan',
    name: 'Eugene Yan',
    category: 'person-blog',
    tags: ['ai', 'ml'],
    feed: 'https://eugeneyan.com/rss/',
    homeUrl: 'https://eugeneyan.com',
    authorName: 'Eugene Yan',
  },
  {
    id: 'one-useful-thing',
    name: 'One Useful Thing',
    category: 'person-blog',
    tags: ['ai', 'productivity'],
    feed: 'https://www.oneusefulthing.org/feed',
    homeUrl: 'https://www.oneusefulthing.org',
    authorName: 'Ethan Mollick',
  },
  {
    id: 'hamel-husain',
    name: "Hamel Husain's Blog",
    category: 'person-blog',
    tags: ['ai', 'llm', 'developer-tools'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_hamel.xml',
    homeUrl: 'https://hamel.dev',
    authorName: 'Hamel Husain',
  },
  {
    id: 'paul-graham',
    name: "Paul Graham's Articles",
    category: 'person-blog',
    tags: ['essays', 'startups', 'technology'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_paulgraham.xml',
    homeUrl: 'https://www.paulgraham.com/articles.html',
    authorName: 'Paul Graham',
  },
  {
    id: 'chander-ramesh',
    name: 'Chander Ramesh',
    category: 'person-blog',
    tags: ['ai', 'engineering'],
    feed: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_chanderramesh.xml',
    homeUrl: 'https://chanderramesh.com/writing',
    authorName: 'Chander Ramesh',
  },
  {
    id: 'pragmatic-engineer',
    name: 'The Pragmatic Engineer',
    category: 'general',
    tags: ['engineering', 'ai', 'newsletter'],
    feed: 'https://blog.pragmaticengineer.com/feed/',
    homeUrl: 'https://blog.pragmaticengineer.com',
    authorName: 'Gergely Orosz',
  },

  // General Web Dev
  {
    id: 'css-tricks',
    name: 'CSS-Tricks',
    category: 'general',
    tags: ['css', 'javascript', 'tutorial'],
    feed: 'https://css-tricks.com/feed/',
    homeUrl: 'https://css-tricks.com',
  },
  {
    id: 'smashing-magazine',
    name: 'Smashing Magazine',
    category: 'general',
    tags: ['design', 'css', 'javascript', 'tutorial'],
    feed: 'https://www.smashingmagazine.com/feed/',
    homeUrl: 'https://www.smashingmagazine.com',
  },
  {
    id: 'a-list-apart',
    name: 'A List Apart',
    category: 'general',
    tags: ['design', 'accessibility', 'web-platform'],
    feed: 'https://alistapart.com/main/feed/',
    homeUrl: 'https://alistapart.com',
  },
  {
    id: 'js-weekly',
    name: 'JavaScript Weekly',
    category: 'general',
    tags: ['javascript', 'typescript'],
    feed: 'https://javascriptweekly.com/rss/',
    homeUrl: 'https://javascriptweekly.com',
  },
  {
    id: 'this-week-in-react',
    name: 'This Week in React',
    category: 'general',
    tags: ['react', 'frameworks'],
    feed: 'https://thisweekinreact.com/newsletter/rss.xml',
    homeUrl: 'https://thisweekinreact.com',
  },
];
