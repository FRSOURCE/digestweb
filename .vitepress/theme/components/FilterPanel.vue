<script setup lang="ts">
import { computed } from 'vue';
import { data as articles } from '../../../articles.data.ts';
import { useFilter } from '../composables/useFilter';
import Button from './Button.vue';
import Chip from './Chip.vue';

defineProps<{ horizontal?: boolean }>();
defineEmits<{
  (e: 'close'): void;
}>();

const {
  activeTags,
  minSignificance,
  hasFilters,
  clearAll,
  setMinSignificance,
} = useFilter();

const allTags = computed(() => {
  const s = new Set<string>();
  articles.forEach((a) =>
    (a.frontmatter.tags ?? []).forEach((t: string) => s.add(t)),
  );
  return [...s].sort();
});

const sigLevels = [1, 2, 3, 4] as const;
</script>
<template>
  <section
    class="text-left"
    :class="
      horizontal
        ? 'flex flex-row flex-wrap gap-6 items-start'
        : 'space-y-5 pb-2 lg:pb-0'
    "
  >
    <fieldset :class="horizontal ? 'shrink-0' : ''">
      <legend
        class="text-[0.62rem] font-bold uppercase tracking-[.08em] text-dw-subtle mb-2"
      >
        Min. article importance
      </legend>
      <ul class="flex flex-wrap gap-2">
        <li v-for="level in sigLevels" :key="level">
          <Button
            size="sm"
            :active="minSignificance === level"
            @click="setMinSignificance(level)"
          >
            {{ '★'.repeat(level) }}
          </Button>
        </li>
      </ul>
    </fieldset>
    <hr v-if="allTags.length && !horizontal" class="border-dw-border" />
    <fieldset
      v-if="allTags.length"
      :class="horizontal ? 'flex-1 min-w-[200px]' : ''"
    >
      <legend
        class="text-[0.62rem] font-bold uppercase tracking-[.08em] text-dw-subtle mb-2"
      >
        Tags
      </legend>
      <ul class="flex flex-wrap gap-2">
        <li v-for="item in allTags" :key="item">
          <Chip
            v-model="activeTags"
            name="tag"
            :input-props="{ value: item }"
            :active="activeTags.includes(item)"
            size="md lg:sm"
          >
            {{ item }}
          </Chip>
        </li>
      </ul>
    </fieldset>
    <div class="w-[calc(100%+0.75rem)] flex mt-10 -mx-1.5 gap-2">
      <Button
        size="md"
        @click="clearAll"
        :disabled="!hasFilters"
        variant="secondary"
        class="justify-center"
        :class="horizontal ? 'self-end' : ''"
      >
        Clear all filters
      </Button>
      <Button
        size="md"
        class="justify-center grow-1"
        :class="horizontal ? 'self-end' : ''"
        @click="$emit('close')"
      >
        Done
      </Button>
    </div>
  </section>
</template>
