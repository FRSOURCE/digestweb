<script setup lang="ts">
import Button from './Button.vue';
</script>

<template>
  <div
    class="flex flex-col items-center justify-center text-center py-4 lg:py-20 gap-6 relative"
  >
    <!-- Broken browser icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 80"
      class="w-64 h-48 opacity-80"
      aria-hidden="true"
    >
      <!-- Browser chrome -->
      <rect
        x="4"
        y="4"
        width="112"
        height="72"
        rx="7"
        class="fill-dw-bg"
        stroke="#0B3D3F"
        stroke-width="2.5"
      />
      <!-- Title bar -->
      <rect x="4" y="4" width="112" height="18" rx="7" fill="#0B3D3F" />
      <rect x="4" y="15" width="112" height="7" fill="#0B3D3F" />
      <!-- Traffic lights -->
      <circle cx="17" cy="13" r="4" fill="#B87333" />
      <circle cx="30" cy="13" r="4" fill="#18797D" />
      <circle cx="43" cy="13" r="4" fill="#0F5457" />
      <!-- Address bar -->
      <rect x="55" y="8" width="54" height="10" rx="3" fill="#0F5457" />
      <text
        x="82"
        y="15"
        font-size="5"
        fill="#F2EDE4"
        text-anchor="middle"
        font-family="monospace"
      >
        404.html
      </text>
    </svg>

    <div class="space-y-2 absolute top-20 lg:top-36">
      <h1 class="text-6xl font-bold text-dw-primary tracking-tight">404</h1>
      <h2 class="text-xl font-medium text-dw-text">Page not found</h2>
    </div>

    <blockquote
      class="raised-0 rounded-2xl bg-dw-bg-card px-6 py-4 max-w-md text-dw-muted italic text-sm leading-relaxed"
    >
      "The best 404 page is the one you never see."
      <span class="block mt-1 text-xs not-italic text-dw-subtle">
        — Every web developer, at 2&thinsp;am
      </span>
    </blockquote>

    <Button href="/">← Back to the feed</Button>
  </div>
</template>
