<script setup lang="ts">
import ShareBox from './ShareBox.vue';
import Button from './Button.vue';

defineProps<{
  title: string;
  description: string;
  date: string;
  photo: string;
  originalUrl: string;
  url: string;
  featured?: boolean;
  significance?: number;
  tags?: string[];
}>();

const emit = defineEmits<{ 'tag-click': [tag: string] }>();
</script>

<template>
  <article
    class="group bg-dw-bg rounded-2xl transition-all duration-300 raised-3 hover:raised-1 block"
    :class="{
      'sm:flex': !featured,
    }"
  >
    <div
      class="hidden sm:flex flex-col shrink-0 overflow-hidden rounded-2xl -raised-3 w-full h-[280px]"
      :class="{ 'sm:w-[20%] sm:min-w-36 sm:h-auto sm:-raised-1': !featured }"
    >
      <img
        :src="photo"
        :alt="title"
        :loading="featured ? 'eager' : 'lazy'"
        class="h-full w-full object-cover object-center block transition-transform duration-300 group-hover:scale-[1.01] mix-blend-color-burn"
        :class="{
          'sm:group-hover:scale-105 sm:h-0 sm:w-auto grow-1': !featured,
        }"
      />
    </div>
    <div
      class="flex-1 p-4 justify-between gap-3"
      :class="{ 'sm:flex flex-col': !featured, 'sm:p-6': featured }"
    >
      <div>
        <div
          v-if="significance === 4"
          class="text-[0.68rem] font-bold tracking-[0.1em] uppercase mb-2"
        >
          Featured
        </div>
        <h2
          class="font-bold leading-snug mb-2 text-[1.15rem]"
          :class="{ 'sm:text-[1.1rem]': !featured }"
        >
          <a
            :href="url"
            class="text-dw-text hover:text-dw-primary transition-colors no-underline"
            >{{ title }}</a
          >
        </h2>
        <p
          class="text-dw-muted leading-relaxed text-[.95rem] mb-3"
          :class="{ 'sm:text-[.875rem]': !featured }"
        >
          {{ description }}
        </p>
        <ul
          v-if="tags?.length"
          class="flex flex-wrap gap-1 mb-2 text-xs text-dw-muted font-bold"
        >
          <li v-for="tag in tags" :key="tag">#{{ tag }}</li>
        </ul>
      </div>
      <div class="flex items-center gap-2.5 flex-wrap">
        <Button :href="url" size="sm sm:md">Read Summary</Button>
        <Button
          :href="originalUrl"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="sm sm:md"
          >View Original Article</Button
        >
        <ShareBox :url="url" :title="title" class="sm:ml-auto" />
      </div>
    </div>
  </article>
</template>

<style scoped>
.sig-2 {
  border-left: 3px solid var(--color-dw-primary-dim);
}
.sig-3 {
  border-left: 4px solid var(--color-dw-primary);
}
.sig-4 {
  border-left: 4px solid var(--color-dw-accent);
  background-color: color-mix(
    in srgb,
    var(--color-dw-accent) 4%,
    var(--color-dw-bg)
  );
}
</style>
