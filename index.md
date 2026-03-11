---
title: digestweb.dev
---

<script setup>
import { computed } from 'vue'
import { data as articles } from './articles.data.ts'
import ArticleCard from './.vitepress/theme/components/ArticleCard.vue'

const today = computed(() =>
  new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  }).toUpperCase()
)
</script>

<!-- TODO: implement calendar picker -->
<!-- <div class="text-center pb-10 max-w-[780px] mx-auto">
  <div class="inline-flex items-center  gap-2 bg-dw-bg neu-inset-sm rounded-full px-4 py-1.5 text-[.78rem] font-bold tracking-[.08em] text-dw-muted uppercase">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    {{ today }}
  </div>
</div> -->

<div class="flex flex-col gap-4 sm:gap-6">
  <ArticleCard
    v-for="(article, i) in articles"
    :key="article.url"
    :title="article.frontmatter.title"
    :description="article.frontmatter.description ?? ''"
    :date="String(article.frontmatter.date)"
    :photo="article.frontmatter.photo ?? '/images/placeholder.svg'"
    :original-url="article.frontmatter.original_url ?? '#'"
    :url="article.url"
  />
</div>
