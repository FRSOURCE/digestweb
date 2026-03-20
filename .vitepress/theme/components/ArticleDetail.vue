<script setup lang="ts">
import { computed } from 'vue';
import { useData, Content, withBase } from 'vitepress';
import Button from './Button.vue';
import ShareBox from './ShareBox.vue';
import SignificanceBadge from './SignificanceBadge.vue';

const { frontmatter } = useData();

const pageUrl = computed(() =>
  typeof window !== 'undefined' ? window.location.href : '',
);
</script>

<template>
  <div>
    <!-- Back link -->
    <a
      :href="withBase('/')"
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

    <SignificanceBadge :significance="frontmatter.significance" />

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
    <div class="mb-7 flex justify-between">
      <Button
        :href="frontmatter.original_url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-dw-primary-light!"
        size="sm sm:md"
        >View Original Article</Button
      >
      <ShareBox :url="pageUrl" :title="frontmatter.title" />
    </div>

    <!-- Photo -->
    <div
      v-if="frontmatter.photo"
      class="w-full rounded-2xl overflow-hidden mb-8 neu-inset"
    >
      <img
        :src="frontmatter.photo"
        :alt="frontmatter.title"
        class="w-full max-h-[min(400px,60dvh)] object-cover block"
      />
    </div>

    <!-- Summary content (prose) -->
    <div class="dw-prose prose prose-neutral max-w-none mb-2">
      <Content />
    </div>

    <!-- Social share row -->
    <ShareBox
      :url="pageUrl"
      :title="frontmatter.title"
      class="flex items-center gap-2.5 lg:gap-4 pt-6 mt-6"
    />
  </div>
</template>
