<script setup lang="ts">
import { ref, computed } from 'vue';
import Button from './Button.vue';
import Modal from './Modal.vue';

const props = defineProps<{
  availableDates: string[];
  activeDate: string | null;
}>();
const emit = defineEmits<{ 'update:activeDate': [date: string | null] }>();

const modalOpen = ref(false);
const availableSet = computed(() => new Set(props.availableDates));

function getInitialMonth() {
  if (props.availableDates.length) {
    const latest = props.availableDates.reduce((a, b) => (a > b ? a : b));
    const [y, m] = latest.split('-').map(Number);
    return { year: y, month: m };
  }
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
}

const currentMonth = ref(getInitialMonth());

const monthLabel = computed(() => {
  const { year, month } = currentMonth.value;
  return new Date(year, month - 1).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
});

const monthRange = computed(() => {
  if (!props.availableDates.length) return null;
  const sorted = [...props.availableDates].sort();
  const [minY, minM] = sorted[0].split('-').map(Number);
  const [maxY, maxM] = sorted[sorted.length - 1].split('-').map(Number);
  return { minYear: minY, minMonth: minM, maxYear: maxY, maxMonth: maxM };
});

const canGoPrev = computed(() => {
  if (!monthRange.value) return false;
  const { year, month } = currentMonth.value;
  const { minYear, minMonth } = monthRange.value;
  return year > minYear || (year === minYear && month > minMonth);
});

const canGoNext = computed(() => {
  if (!monthRange.value) return false;
  const { year, month } = currentMonth.value;
  const { maxYear, maxMonth } = monthRange.value;
  return year < maxYear || (year === maxYear && month < maxMonth);
});

function prevMonth() {
  if (!canGoPrev.value) return;
  const { year, month } = currentMonth.value;
  currentMonth.value =
    month === 1 ? { year: year - 1, month: 12 } : { year, month: month - 1 };
}

function nextMonth() {
  if (!canGoNext.value) return;
  const { year, month } = currentMonth.value;
  currentMonth.value =
    month === 12 ? { year: year + 1, month: 1 } : { year, month: month + 1 };
}

const calendarDays = computed(() => {
  const { year, month } = currentMonth.value;
  const firstDow = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells: Array<{ iso: string | null; day: number | null }> = [];
  for (let i = 0; i < firstDow; i++) cells.push({ iso: null, day: null });
  for (let d = 1; d <= daysInMonth; d++) {
    const iso = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    cells.push({ iso, day: d });
  }
  while (cells.length % 7 !== 0) cells.push({ iso: null, day: null });
  return cells;
});

function selectDay(iso: string) {
  if (!availableSet.value.has(iso)) return;
  if (props.activeDate !== iso) modalOpen.value = false;
  emit('update:activeDate', props.activeDate === iso ? null : iso);
}
</script>

<template>
  <Button
    class="inline-flex items-center justify-between gap-4"
    :aria-label="
      activeDate
        ? `Selected date: ${activeDate}. Open date picker`
        : 'Open date picker'
    "
    @click="modalOpen = true"
    size="md lg:sm"
  >
    {{ activeDate }}
    <span aria-hidden="true">📅</span>
  </Button>
  <Modal v-model="modalOpen" title="Select a date">
    <div class="select-none w-full min-w-[196px] max-w-80 mx-auto">
      <!-- Month navigation -->
      <div class="flex items-center justify-between mb-2">
        <Button
          :disabled="!canGoPrev"
          aria-label="Previous month"
          @click="prevMonth"
          size="md lg:sm"
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Button>
        <span class="text-[0.75rem] font-semibold text-dw-text">{{
          monthLabel
        }}</span>
        <Button
          :disabled="!canGoNext"
          aria-label="Next month"
          @click="nextMonth"
          size="md lg:sm"
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Button>
      </div>

      <!-- Day-of-week headers -->
      <div class="grid grid-cols-7 mb-1">
        <span
          v-for="d in ['S', 'M', 'T', 'W', 'T', 'F', 'S']"
          :key="d + '_h'"
          class="text-center text-[0.6rem] font-bold uppercase tracking-wider text-dw-subtle py-0.5"
          >{{ d }}</span
        >
      </div>

      <!-- Calendar grid -->
      <div class="grid grid-cols-7 gap-y-0.5">
        <div
          v-for="(cell, i) in calendarDays"
          :key="i"
          class="aspect-square p-[1px]"
        >
          <template v-if="cell.iso !== null">
            <Button
              v-if="availableSet.has(cell.iso)"
              size="sm"
              class="w-full h-full flex items-center justify-center rounded-full"
              :active="activeDate === cell.iso"
              @click="selectDay(cell.iso)"
            >
              {{ cell.day }}
            </Button>
            <span
              v-else
              aria-hidden="true"
              class="w-full h-full flex items-center justify-center text-[0.7rem] text-dw-subtle opacity-35 cursor-default"
              >{{ cell.day }}</span
            >
          </template>
        </div>
      </div>
    </div>
  </Modal>
</template>
