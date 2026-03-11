<script setup lang="ts">
import { ref, computed } from 'vue';
import { useData, Content } from 'vitepress';

const { frontmatter } = useData();

const displayDate = computed(() =>
  new Date(String(frontmatter.value.date)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
);

const pageUrl = computed(() =>
  typeof window !== 'undefined' ? window.location.href : '',
);
const tweetUrl = computed(
  () =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(frontmatter.value.title)}&url=${encodeURIComponent(pageUrl.value)}`,
);
const linkedinUrl = computed(
  () =>
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl.value)}`,
);

const copied = ref(false);
let copyTimer: ReturnType<typeof setTimeout>;

async function copyLink() {
  if (typeof navigator === 'undefined') return;
  await navigator.clipboard.writeText(pageUrl.value);
  clearTimeout(copyTimer);
  copied.value = true;
  copyTimer = setTimeout(() => {
    copied.value = false;
  }, 2200);
}
</script>

<template>
  <div class="max-w-[740px] mx-auto">
    <!-- Back link -->
    <a
      href="/"
      class="inline-flex items-center gap-1.5 text-[.9rem] text-dw-primary font-medium mb-6 hover:text-dw-primary-mid no-underline transition-colors"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
      Back to Daily Feed
    </a>

    <!-- Title -->
    <h1
      class="text-[1.9rem] font-extrabold tracking-tight text-dw-text leading-tight mb-3"
    >
      {{ frontmatter.title }}
    </h1>

    <!-- Attribution -->
    <p
      v-if="frontmatter.source_name || frontmatter.source_author"
      class="text-[.9rem] text-dw-muted mb-4"
    >
      Originally published on
      <a
        v-if="frontmatter.original_url"
        :href="frontmatter.original_url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-dw-primary-light font-semibold hover:underline"
        >{{ frontmatter.source_name ?? 'original source' }}</a
      >
      <span v-else>{{ frontmatter.source_name }}</span>
      <template v-if="frontmatter.source_author">
        by
        <a
          v-if="frontmatter.source_author_url"
          :href="frontmatter.source_author_url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-dw-primary-light font-semibold hover:underline"
          >{{ frontmatter.source_author }}</a
        >
        <span v-else>{{ frontmatter.source_author }}</span>
      </template>
    </p>

    <!-- View original button -->
    <div class="mb-7">
      <a
        :href="frontmatter.original_url"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center px-4 py-[.45rem] rounded-xl bg-dw-bg neu-raised-sm font-mono font-bold text-[.8rem] text-dw-primary neu-hover-inset transition-all no-underline"
      >
        [ View Original Article ]
      </a>
    </div>

    <!-- Photo -->
    <div
      v-if="frontmatter.photo"
      class="w-full rounded-2xl overflow-hidden mb-8 neu-inset"
    >
      <img
        :src="frontmatter.photo"
        :alt="frontmatter.title"
        class="w-full max-h-[400px] object-cover block"
      />
    </div>

    <!-- Summary content (prose) -->
    <div class="dw-prose prose prose-neutral max-w-none mb-2">
      <Content />
    </div>

    <!-- Social share row -->
    <div class="flex items-center gap-2.5 pt-6 mt-6">
      <span class="text-[.85rem] text-dw-muted font-medium mr-1"
        >Share this summary:</span
      >

      <a
        :href="tweetUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-dw-bg neu-raised-sm text-dw-text no-underline transition-all duration-200 neu-hover-inset"
        title="Share on X"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </svg>
      </a>

      <a
        :href="linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-dw-bg neu-raised-sm text-dw-primary-light no-underline transition-all duration-200 neu-hover-inset"
        title="Share on LinkedIn"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>

      <button
        @click="copyLink"
        :class="[
          'inline-flex items-center justify-center w-9 h-9 rounded-xl bg-dw-bg transition-all duration-200 cursor-pointer',
          copied
            ? 'neu-inset text-dw-primary'
            : 'neu-raised-sm text-dw-muted neu-hover-inset',
        ]"
        :title="copied ? 'Copied!' : 'Copy link'"
      >
        <svg
          v-if="!copied"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        <svg
          v-else
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </button>
    </div>
  </div>
</template>
