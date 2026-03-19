<template>
  <div class="flex items-center gap-3">
    <Button
      size="sm"
      :disabled="!prevDate"
      @click="prevDate && setDate(prevDate)"
    >
      ← Earlier
      <span v-if="prevDate" class="block text-[.65rem] opacity-60">{{
        formatDate(prevDate)
      }}</span>
    </Button>
    <Filter />
    <Button
      size="sm"
      :disabled="!nextDate"
      @click="nextDate && setDate(nextDate)"
      class="ml-auto"
    >
      Later →
      <span v-if="nextDate" class="block text-[.65rem] opacity-60">{{
        formatDate(nextDate)
      }}</span>
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { data as articles } from '../../../articles.data.ts';
import Filter from './Filter.vue';
import { useFilter } from '../composables/useFilter';
import Button from './Button.vue';

const { activeDate, setDate } = useFilter();

const sortedDates = computed(() => {
  const s = new Set<string>();
  articles.forEach((a) => {
    const iso = String(a.date).slice(0, 10);
    if (iso) s.add(iso);
  });
  return [...s].sort().reverse();
});

const effectiveDate = computed(
  () => activeDate.value ?? sortedDates.value[0] ?? null,
);

const currentIndex = computed(() =>
  effectiveDate.value ? sortedDates.value.indexOf(effectiveDate.value) : -1,
);

const prevDate = computed(() =>
  currentIndex.value >= 0 && currentIndex.value < sortedDates.value.length - 1
    ? sortedDates.value[currentIndex.value + 1]
    : null,
);

const nextDate = computed(() =>
  currentIndex.value > 0 ? sortedDates.value[currentIndex.value - 1] : null,
);

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(iso + 'T12:00:00'));
}
</script>
