<script setup lang="ts">
import { ref } from 'vue';
import { useFilter } from '../composables/useFilter';
import Modal from './Modal.vue';
import FilterPanel from './FilterPanel.vue';
import Button from './Button.vue';

const { filterCount, hasFilters, clearAll } = useFilter();
const open = ref(false);
</script>
<template>
  <div class="flex items-center gap-3 mb-5">
    <Button
      size="sm"
      class="relative"
      @click="open = true"
      :badge="filterCount > 0 ? filterCount : undefined"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="8" y1="12" x2="20" y2="12" />
        <line x1="12" y1="18" x2="20" y2="18" />
      </svg>
      Filters
    </Button>
    <button
      v-if="hasFilters"
      class="cursor-pointer text-[0.72rem] text-dw-accent font-medium hover:underline"
      @click="clearAll"
    >
      Clear
    </button>
  </div>
  <Modal v-model="open" title="Filters">
    <FilterPanel @close="open = false" />
  </Modal>
</template>
