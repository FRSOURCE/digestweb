<script setup lang="ts">
import { withBase } from 'vitepress';
</script>

<template>
  <a
    :href="withBase('/')"
    class="flex items-center gap-2.5 no-underline hover:opacity-50 active:opacity-70 transition-opacity shrink-0"
    aria-label="digestweb.dev — click to go to homepage"
  >
    <span class="text-[1.15rem] font-bold text-dw-text tracking-[-0.02em]"
      >digestweb<span class="text-dw-primary-light font-normal"
        >.dev</span
      ></span
    >
  </a>
</template>
