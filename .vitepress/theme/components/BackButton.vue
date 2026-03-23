<script setup lang="ts">
import { withBase } from 'vitepress';
import Button, { type AlmostInfinitelyDeepSizeProp } from './Button.vue';
import ArrowIcon from './ArrowIcon.vue';

withDefaults(
  defineProps<{
    href?: string;
    size?: AlmostInfinitelyDeepSizeProp;
    variant?: 'primary' | 'secondary';
    active?: boolean;
    disabled?: boolean;
    badge?: number | string;
  }>(),
  {
    href: withBase('/'),
    size: 'md lg:sm',
  },
);
</script>

<template>
  <Button v-bind="$props">
    <ArrowIcon class="size-4" />
    <slot />
  </Button>
</template>
