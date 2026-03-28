<script setup lang="ts">
import { useData } from 'vitepress';
import { nextTick, onMounted, ref, watch } from 'vue';
import Button from './Button.vue';

const { isDark } = useData();

const showDarkIcon = ref(false);

onMounted(() => {
  showDarkIcon.value = isDark.value;
  watch(isDark, (newVal) => {
    showDarkIcon.value = newVal;
  });
});

const toggle = async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (
    !('startViewTransition' in document) ||
    !window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  ) {
    isDark.value = !isDark.value;
    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ];

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      fill: 'forwards',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  );
};
</script>

<template>
  <Button
    size="lg lg:md"
    @click="toggle($event)"
    :aria-label="showDarkIcon ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <svg
      v-if="showDarkIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      class="-m-0.5"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      class="-m-0.5"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  </Button>
</template>
