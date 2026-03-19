<template>
  <div class="flex items-center gap-3">
    <Button
      size="md lg:sm"
      :disabled="!prevDate"
      @click="prevDate && navigateToDate(prevDate)"
      class="hidden! lg:inline-flex!"
    >
      ← Earlier
      <span v-if="prevDate" class="block text-[.65rem] text-dw-muted">{{
        formatDate(prevDate)
      }}</span>
    </Button>
    <Filter class="mr-auto lg:mr-0 ea" />
    <div>
      <span class="hidden lg:inline text-[.8rem] text-dw-muted pr-2 lg:ml-6"
        >Feed for the day of:</span
      >
      <DatePicker
        :available-dates="sortedDates"
        :active-date="effectiveDate"
        @update:activeDate="navigateToDate"
      />
    </div>
    <Button
      size="md lg:sm"
      :disabled="!nextDate"
      @click="nextDate && navigateToDate(nextDate)"
      class="ml-auto hidden! lg:inline-flex!"
    >
      Later →
      <span v-if="nextDate" class="block text-[.65rem] text-dw-muted">{{
        formatDate(nextDate)
      }}</span>
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useData } from 'vitepress';
import { data as articles } from '../../../articles.data.ts';
import Filter from './Filter.vue';
import DatePicker from './DatePicker.vue';
import Button from './Button.vue';

const { params } = useData();

const sortedDates = computed(() => {
  const s = new Set<string>();
  articles.forEach((a) => {
    const iso = String(a.date).slice(0, 10);
    if (iso) s.add(iso);
  });
  return [...s].sort().reverse();
});

const effectiveDate = computed(
  () =>
    (params.value?.date as string | undefined) ?? sortedDates.value[0] ?? null,
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

function navigateToDate(date: string | null) {
  const base = import.meta.env.BASE_URL as string;
  const url = new URL(window.location.href);
  const tagsParam = url.searchParams.get('tags');
  const newPath = date ? base + date + '/' : base;
  window.location.href = tagsParam ? newPath + '?tags=' + tagsParam : newPath;
}
</script>
