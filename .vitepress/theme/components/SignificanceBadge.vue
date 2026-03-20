<script setup lang="ts">
const props = defineProps<{
  significance?: number;
}>();

const sigLabel: Record<number, string> = {
  2: 'Worth Reading',
  3: 'Must Read',
  4: "Editor's Pick",
};
</script>

<template>
  <div
    v-if="significance && significance >= 2"
    class="text-[0.68rem] font-bold tracking-[0.1em] uppercase mb-2 justify-self-start rounded-md px-2 raised-0 whitespace-nowrap"
    :class="{
      'bg-dw-primary text-white': significance === 2,
      'bg-dw-primary-mid text-white': significance === 3,
      'bg-dw-primary-light text-white': significance === 4,
    }"
  >
    {{ sigLabel[significance] }}
  </div>
</template>
