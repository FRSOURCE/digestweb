---
title: digestweb.dev
---

<script setup>
import { computed } from 'vue'
import { data as articles } from './articles.data.ts'
import ArticleCard from './.vitepress/theme/components/ArticleCard.vue'
import Filter from './.vitepress/theme/components/Filter.vue'
import FilterPanel from './.vitepress/theme/components/FilterPanel.vue'
import { useFilter } from './.vitepress/theme/composables/useFilter'

const { activeTags, activeDate, toggleTag } = useFilter()

const sorted = computed(() =>
  [...articles].sort((a, b) => {
    const sigDiff = (b.frontmatter.significance ?? 1) - (a.frontmatter.significance ?? 1)
    if (sigDiff !== 0) return sigDiff
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
)

const filtered = computed(() => {
  let result = sorted.value
  if (activeDate.value)
    result = result.filter(a => String(a.date).slice(0, 10) === activeDate.value)
  if (activeTags.value.length)
    result = result.filter(a => (a.frontmatter.tags ?? []).some(t => activeTags.value.includes(t)))
  return result
})
</script>

<Filter />

<div class="flex flex-col gap-4 sm:gap-6">
  <p v-if="!filtered.length" class="text-dw-muted text-[0.9rem] py-8 text-center">
    No articles match the selected filters.
  </p>
  <ArticleCard
    v-for="article in filtered"
    :key="article.url"
    :title="article.frontmatter.title"
    :description="article.frontmatter.description ?? ''"
    :date="String(article.frontmatter.date)"
    :photo="article.frontmatter.photo ?? '/images/placeholder.svg'"
    :original-url="article.frontmatter.original_url ?? '#'"
    :url="article.url"
    :significance="article.frontmatter.significance ?? 1"
    :tags="article.frontmatter.tags ?? []"
    @tag-click="toggleTag"
  />
</div>
