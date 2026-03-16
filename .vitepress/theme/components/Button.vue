<script lang="ts">
export type SizeWithPrefix =
  `${'' | 'sm:' | 'md:' | 'lg:' | 'xl:' | '2xl:'}${'sm' | 'md' | 'lg'}`;
export type AlmostInfinitelyDeepSizeProp =
  | SizeWithPrefix
  | `${SizeWithPrefix} ${string}`;

const sizeClassesMap = {
  sm: (active: boolean) => [
    'px-2 py-[.45rem] gap-1 rounded-md text-xs',
    active
      ? '-raised-1 hover:raised-0 focus-visible:raised-0 active:raised-1'
      : 'raised-1 hover:raised-0 focus-visible:raised-0 active:-raised-1',
  ],
  md: (active: boolean) => [
    'px-4 py-[.45rem] gap-2 rounded-lg text-sm',
    active
      ? '-raised-3 hover:raised-0 focus-visible:raised-0 active:raised-3'
      : 'raised-3 hover:raised-0 focus-visible:raised-0 active:-raised-3',
  ],
  lg: (active: boolean) => [
    'px-4 py-[.45rem] gap-3 rounded-xl',
    active
      ? '-raised-5 hover:raised-0 focus-visible:raised-0 active:raised-5'
      : 'raised-5 hover:raised-0 focus-visible:raised-0 active:-raised-5',
  ],
  'sm:sm': (active: boolean) => [
    'sm:px-2 sm:py-[.45rem] sm:gap-1 sm:rounded-md sm:text-xs',
    active
      ? 'sm:-raised-1 sm:hover:raised-0 sm:focus-visible:raised-0 sm:active:raised-1'
      : 'sm:raised-1 sm:hover:raised-0 sm:focus-visible:raised-0 sm:active:-raised-1',
  ],
  'sm:md': (active: boolean) => [
    'sm:px-4 sm:py-[.45rem] sm:gap-2 sm:rounded-lg sm:text-sm',
    active
      ? 'sm:-raised-3 sm:hover:raised-0 sm:focus-visible:raised-0 sm:active:raised-3'
      : 'sm:raised-3 sm:hover:raised-0 sm:focus-visible:raised-0 sm:active:-raised-3',
  ],
  'sm:lg': (active: boolean) => [
    'sm:px-4 sm:py-[.45rem] sm:gap-3 sm:rounded-xl',
    active
      ? 'sm:-raised-5 sm:hover:raised-0 sm:focus-visible:raised-0 sm:active:raised-5'
      : 'sm:raised-5 sm:hover:raised-0 sm:focus-visible:raised-0 sm:active:-raised-5',
  ],
  'md:sm': (active: boolean) => [
    'md:px-2 md:py-[.45rem] md:gap-1 md:rounded-md md:text-xs',
    active
      ? 'md:-raised-1 md:hover:raised-0 md:focus-visible:raised-0 md:active:raised-1'
      : 'md:raised-1 md:hover:raised-0 md:focus-visible:raised-0 md:active:-raised-1',
  ],
  'md:md': (active: boolean) => [
    'md:px-4 md:py-[.45rem] md:gap-2 md:rounded-lg md:text-sm',
    active
      ? 'md:-raised-3 md:hover:raised-0 md:focus-visible:raised-0 md:active:raised-3'
      : 'md:raised-3 md:hover:raised-0 md:focus-visible:raised-0 md:active:-raised-3',
  ],
  'md:lg': (active: boolean) => [
    'md:px-4 md:py-[.45rem] md:gap-3 md:rounded-xl',
    active
      ? 'md:-raised-5 md:hover:raised-0 md:focus-visible:raised-0 md:active:raised-5'
      : 'md:raised-5 md:hover:raised-0 md:focus-visible:raised-0 md:active:-raised-5',
  ],
  'lg:sm': (active: boolean) => [
    'lg:px-2 lg:py-[.45rem] lg:gap-1 lg:rounded-md lg:text-xs',
    active
      ? 'lg:-raised-1 lg:hover:raised-0 lg:focus-visible:raised-0 lg:active:raised-1'
      : 'lg:raised-1 lg:hover:raised-0 lg:focus-visible:raised-0 lg:active:-raised-1',
  ],
  'lg:md': (active: boolean) => [
    'lg:px-4 lg:py-[.45rem] lg:gap-2 lg:rounded-lg lg:text-sm',
    active
      ? 'lg:-raised-3 lg:hover:raised-0 lg:focus-visible:raised-0 lg:active:raised-3'
      : 'lg:raised-3 lg:hover:raised-0 lg:focus-visible:raised-0 lg:active:-raised-3',
  ],
  'lg:lg': (active: boolean) => [
    'lg:px-4 lg:py-[.45rem] lg:gap-3 lg:rounded-xl',
    active
      ? 'lg:-raised-5 lg:hover:raised-0 lg:focus-visible:raised-0 lg:active:raised-5'
      : 'lg:raised-5 lg:hover:raised-0 lg:focus-visible:raised-0 lg:active:-raised-5',
  ],
};
</script>

<script lang="ts" setup>
import { computed, useAttrs, VNode } from 'vue';

const props = defineProps<{
  href?: string;
  size?: AlmostInfinitelyDeepSizeProp;
  active?: boolean;
  disabled?: boolean;
  tag?: 'a' | 'button' | 'label';
}>();
defineSlots<{
  default: () => VNode;
}>();
const attrs = useAttrs();

const Tag = computed(() => {
  return props.tag ?? (props.href ? 'a' : 'button');
});
const tagAwareProps = computed(() => {
  return props.href
    ? { href: props.href }
    : props.tag === 'button'
      ? { type: attrs.type ?? 'button' }
      : {};
});

const defaultSize = computed(() => {
  if (props.size && !props.size?.includes(' ')) return props.size;
  return props.size?.split(' ').find((size) => !size.includes(':')) || 'md';
});

const sizeClasses = computed(() => {
  const classes = [sizeClassesMap[defaultSize.value](props.active)];
  props.size?.split(' ').forEach((size) => {
    if (size === defaultSize.value) return;
    classes.push(sizeClassesMap[size](props.active));
  });
  return classes;
});
</script>

<template>
  <Tag
    v-bind="tagAwareProps"
    class="inline-flex items-center bg-dw-bg font-bold text-dw-primary transition-all delay-50 ease-in no-underline"
    :class="[
      sizeClasses,
      disabled
        ? 'cursor-not-allowed text-dw-muted! opacity-60 pointer-events-none'
        : 'cursor-pointer',
    ]"
    :disabled="disabled"
  >
    <slot />
  </Tag>
</template>
