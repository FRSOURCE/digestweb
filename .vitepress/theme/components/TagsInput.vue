<script setup lang="ts">
import { ref, computed, nextTick } from 'vue';
import { TAG_VOCABULARY } from '../../../tools/tags.ts';

const props = defineProps<{ modelValue: string[]; id?: string }>();
const emit = defineEmits<{ 'update:modelValue': [value: string[]] }>();

const inputRef = ref<HTMLInputElement | null>(null);
const query = ref('');
const activeIndex = ref(-1);
const open = ref(false);

const suggestions = computed(() => {
  const q = query.value.toLowerCase().trim();
  return TAG_VOCABULARY.filter(
    (t) => !props.modelValue.includes(t) && (q === '' || t.includes(q)),
  ).slice(0, 10);
});

function addTag(tag: string) {
  const trimmed = tag.trim();
  if (!trimmed || props.modelValue.includes(trimmed)) return;
  emit('update:modelValue', [...props.modelValue, trimmed]);
  query.value = '';
  activeIndex.value = -1;
  open.value = false;
  nextTick(() => inputRef.value?.focus());
}

function removeTag(index: number) {
  const next = [...props.modelValue];
  next.splice(index, 1);
  emit('update:modelValue', next);
}

function onContainerFocusOut(e: FocusEvent) {
  const container = e.currentTarget as HTMLElement;
  if (!container.contains(e.relatedTarget as Node | null)) {
    open.value = false;
    activeIndex.value = -1;
  }
}

function onInputKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (activeIndex.value >= 0 && suggestions.value[activeIndex.value]) {
      addTag(suggestions.value[activeIndex.value]);
    } else if (query.value.trim()) {
      addTag(query.value);
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    activeIndex.value = Math.min(
      activeIndex.value + 1,
      suggestions.value.length - 1,
    );
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    activeIndex.value = Math.max(activeIndex.value - 1, -1);
  } else if (
    (e.key === 'Backspace' || e.key === 'Delete') &&
    query.value === ''
  ) {
    e.preventDefault();
    removeTag(props.modelValue.length - 1);
  } else if (e.key === 'Escape') {
    open.value = false;
    activeIndex.value = -1;
  }
}

function onChipKeydown(e: KeyboardEvent, index: number) {
  if (
    e.key === 'Backspace' ||
    e.key === 'Delete' ||
    e.key === 'Enter' ||
    e.key === ' '
  ) {
    e.preventDefault();
    removeTag(index);
    nextTick(() => {
      const chips = document.querySelectorAll<HTMLElement>(
        '.tags-input-chip-btn',
      );
      const prev = chips[index - 1] ?? inputRef.value;
      prev?.focus();
    });
  }
}
</script>

<template>
  <div class="relative" @focusout="onContainerFocusOut">
    <!-- Well -->
    <div
      class="w-full -raised-1 rounded-xl px-4 py-2.5 text-sm text-dw-text bg-dw-bg placeholder:text-dw-muted/50 outline-none focus:-raised-3 transition-shadow"
      @click="inputRef?.focus()"
    >
      <!-- Chips -->
      <span
        v-for="(tag, i) in modelValue"
        :key="tag"
        class="raised-1 rounded-md inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-dw-primary"
      >
        {{ tag }}
        <button
          type="button"
          :aria-label="`Remove ${tag}`"
          tabindex="0"
          class="tags-input-chip-btn text-dw-muted hover:text-dw-primary leading-none focus:outline-none"
          @click.stop="removeTag(i)"
          @keydown="onChipKeydown($event, i)"
        >
          ×
        </button>
      </span>

      <!-- Text input -->
      <input
        ref="inputRef"
        :id="id"
        v-model="query"
        type="text"
        class="px-2 flex-1 w-12 min-w-[6rem] bg-transparent text-sm text-dw-text placeholder:text-dw-muted/50 outline-none border-none py-0.5 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-dw-primary rounded-sm"
        :placeholder="modelValue.length === 0 ? 'Type to add tags…' : ''"
        autocomplete="off"
        @focus="open = true"
        @input="
          open = true;
          activeIndex = -1;
        "
        @keydown="onInputKeydown"
      />
    </div>

    <!-- Dropdown -->
    <ul
      v-if="open && suggestions.length > 0"
      class="bg-dw-bg raised-5 rounded-xl absolute z-10 top-full left-0 right-0 mt-1 py-1 overflow-hidden"
      role="listbox"
    >
      <li
        v-for="(tag, i) in suggestions"
        :key="tag"
        role="option"
        :aria-selected="i === activeIndex"
        class="px-4 py-2 text-sm cursor-pointer text-dw-text"
        :class="
          i === activeIndex
            ? 'bg-dw-primary/10 text-dw-primary font-medium'
            : 'hover:bg-dw-primary/5'
        "
        @mousedown.prevent="addTag(tag)"
      >
        {{ tag }}
      </li>
    </ul>
  </div>
</template>
