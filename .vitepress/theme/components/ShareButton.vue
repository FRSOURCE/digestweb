<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';

const props = defineProps<{
  url?: string;
  title?: string;
}>();

const showToast = ref(false);
let timer: ReturnType<typeof setTimeout>;

async function share() {
  if (typeof window === 'undefined') return;
  const href = props.url
    ? new URL(props.url, window.location.origin).href
    : window.location.href;

  // when mobile, try to use share API, otherwise use clipboard
  if (matchMedia('(pointer:coarse)').matches) {
    if (navigator.share) {
      try {
        await navigator.share({ title: props.title, url: href });
      } catch {
        /* cancelled */
      }
      return;
    }
  }
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(href);
    clearTimeout(timer);
    showToast.value = true;
    timer = setTimeout(() => {
      showToast.value = false;
    }, 2000);
  }
}
</script>

<template>
  <Button
    v-bind="$attrs"
    @click="share"
    :aria-label="`Share: ${title ?? 'this article'}`"
    size="sm"
  >
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
    Share
  </Button>
  <Teleport to="body">
    <Transition name="toast">
      <div
        v-if="showToast"
        class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-dw-bg raised-5 text-dw-primary text-[.85rem] font-medium px-5 py-2 rounded-full pointer-events-none z-[600]"
        role="status"
      >
        Link copied!
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.toast-enter-active,
.toast-leave-active {
  transition:
    opacity 0.22s ease,
    translate 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
  translate: -50% 0;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  translate: -50% 6px;
}
</style>
