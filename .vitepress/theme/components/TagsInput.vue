<script setup lang="ts">
import { ref, computed, nextTick, useTemplateRef } from 'vue';
import { TAG_VOCABULARY } from '../../../tools/tags.ts';

const props = defineProps<{ modelValue: string[]; id?: string }>();
const emit = defineEmits<{ 'update:modelValue': [value: string[]] }>();
defineOptions({
  inheritAttrs: false,
});

const inputRef = ref<HTMLInputElement | null>(null);
const query = ref('');
const activeIndex = ref(-1);
const open = ref(false);
const containerRef = useTemplateRef('containerRef');

const suggestions = computed(() => {
  const q = query.value.toLowerCase().trim();
  return TAG_VOCABULARY.filter(
    (t) => !props.modelValue.includes(t) && (q === '' || t.includes(q)),
  );
});

const scrollSuggestionIntoView = (index: number) => {
  const suggestion = containerRef.value?.querySelector<HTMLElement>(
    `[data-suggestion-index="${index}"]`,
  );
  (
    suggestion as unknown as { scrollIntoViewIfNeeded: () => void } | null
  )?.scrollIntoViewIfNeeded();
};

function addTag(tag: string) {
  const trimmed = tag.trim();
  if (!trimmed || props.modelValue.includes(trimmed)) return;
  emit('update:modelValue', [...props.modelValue, trimmed]);
  query.value = '';
  activeIndex.value = -1;
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
    scrollSuggestionIntoView(activeIndex.value);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    activeIndex.value = Math.max(activeIndex.value - 1, -1);
    scrollSuggestionIntoView(activeIndex.value);
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
  <div class="relative" @focusout="onContainerFocusOut" ref="containerRef">
    <!-- Well -->
    <div
      class="w-full flex flex-wrap py-2 px-2 gap-2 -raised-1 rounded-xl text-sm text-dw-text bg-dw-bg placeholder:text-dw-muted/50 outline-none focus:-raised-3 transition-shadow"
      @click="inputRef?.focus()"
    >
      <!-- Chips -->
      <span
        v-for="(tag, i) in modelValue"
        :key="tag"
        class="raised-1 rounded-md inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-dw-primary"
      >
        {{ tag }}
        <button
          type="button"
          :aria-label="`Remove ${tag}`"
          tabindex="0"
          class="tags-input-chip-btn text-dw-muted hover:text-dw-primary leading-none focus:outline-none cursor-pointer -m-3 p-3 ps-4"
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
        class="flex-1 min-w-[6rem] bg-transparent text-sm text-dw-text placeholder:text-dw-muted/50 outline-none border-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-dw-primary rounded-xl"
        :class="
          modelValue.length > 0
            ? 'px-4 py-1 -m-1.5 -outline-offset-4'
            : 'px-3 py-2 -m-2'
        "
        :placeholder="
          modelValue.length > 0 ? '' : 'javascript, design, ai, tutorial, etc.'
        "
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
      class="bg-dw-bg raised-5 rounded-xl absolute z-10 top-full left-0 right-0 mt-1 py-1 max-h-[300px] overflow-auto"
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
        :data-suggestion-index="i"
      >
        {{ tag }}
      </li>
    </ul>
  </div>

  <p class="mt-1.5 text-xs text-dw-muted">
    Type something to see suggestions. Press <kbd>Enter</kbd> to add a tag,
    <kbd>Arrow Up</kbd> or <kbd>Arrow Down</kbd> to navigate, and
    <kbd>Escape</kbd> to close.
  </p>
</template>
