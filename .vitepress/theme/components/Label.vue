<script setup lang="ts">
withDefaults(
  defineProps<{
    required?: boolean;
    tag?: string;
  }>(),
  {
    tag: 'label',
  },
);
</script>

<template>
  <component
    :is="tag"
    class="block text-[.8rem] font-bold uppercase tracking-[.06em] text-dw-muted mb-1.5"
  >
    <slot />
    <span class="text-dw-accent align-text-bottom" v-if="required">*</span>
    <span
      v-else
      class="ms-1 normal-case font-normal tracking-normal align-text-bottom"
      >(optional)</span
    >
  </component>
</template>
