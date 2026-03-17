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

const sigLabel: Record<number, string> = {
  2: 'Worth Reading',
  3: 'Must Read',
  4: "Editor's Pick",
};
</script>

<template>
  <article
    class="group bg-dw-bg rounded-2xl transition-all duration-300 raised-3 hover:raised-1 block"
    :class="{ 'sm:flex': !featured }"
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
        <header class="flex items-baseline gap-2.5">
          <div
            v-if="significance && significance >= 2"
            class="text-[0.68rem] font-bold tracking-[0.1em] uppercase mb-2 justify-self-start rounded-md px-2 raised-0 whitespace-nowrap"
            :class="{
              'bg-dw-primary text-white': significance === 2,
              'bg-dw-primary-mid text-white': significance === 3,
              'bg-dw-primary-light text-white': significance === 4,
            }"
          >
            {{ sigLabel[significance] }}
          </div>

          <ul
            v-if="tags?.length"
            class="flex flex-wrap gap-1 mb-2 text-xs text-dw-muted font-bold"
          >
            <li v-for="tag in tags" :key="tag">#{{ tag }}</li>
          </ul>
        </header>
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
