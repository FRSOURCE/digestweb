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
  variant?: 'primary' | 'secondary';
  active?: boolean;
  disabled?: boolean;
  badge?: number | string;
  tag?: 'a' | 'button' | 'label';
}>();
defineSlots<{
  default: () => VNode;
}>();
defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();
const attrs = useAttrs();

const Tag = computed(() => {
  return props.tag ?? (props.href ? 'a' : 'button');
});
const tagAwareProps = computed(() => {
  if (props.href) return { href: props.href };
  if (Tag.value === 'button')
    return { type: attrs.type ?? 'button', disabled: props.disabled };
  return {};
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

const colorClasses = computed(() => {
  if (props.variant === 'secondary')
    return 'text-dw-primary-light bg-dw-bg-dark';
  return 'text-dw-primary bg-dw-bg';
});
</script>

<template>
  <Tag
    v-bind="tagAwareProps"
    class="inline-flex items-center font-bold transition-all delay-50 ease-in no-underline outline-dw-primary outline-0 focus-visible:outline-2"
    :class="[
      sizeClasses,
      colorClasses,
      disabled
        ? 'cursor-not-allowed raised-0! text-dw-muted! opacity-80'
        : 'cursor-pointer',
      { relative: typeof badge !== 'undefined' },
    ]"
    @click="disabled ? undefined : $emit('click', $event)"
  >
    <slot />
    <span
      v-if="typeof badge !== 'undefined'"
      class="absolute -top-1.5 -right-1.5 min-w-[1.1rem] h-[1.1rem] rounded-full bg-dw-accent text-white text-[0.6rem] font-bold flex items-center justify-center px-[3px] leading-none"
    >
      {{ badge }}
    </span>
  </Tag>
</template>
