<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Button from './Button.vue';
import AdPlaceholder from './AdPlaceholder.vue';

const visible = ref(false);

onMounted(() => {
  visible.value = sessionStorage.getItem('dw:ad-dismissed') !== '1';
});

function dismiss() {
  sessionStorage.setItem('dw:ad-dismissed', '1');
  visible.value = false;
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      v-bind="$attrs"
      class="fixed bottom-2 right-2 w-[230px] bg-dw-bg raised-5 rounded-2xl z-[500] overflow-hidden"
      role="complementary"
    >
      <div
        class="flex items-center justify-between -raised-1 px-3 py-1.5 pe-1.5"
      >
        <span
          class="text-[.62rem] font-bold uppercase tracking-[.08em] text-dw-subtle"
          >Advertisement</span
        >
        <Button
          @click="dismiss"
          aria-label="Close ad"
          size="md"
          class="w-8 leading-4 justify-center"
        >
          &#215;
        </Button>
      </div>
      <div class="p-3 pb-0 text-[.875rem] text-dw-text leading-relaxed">
        <slot>
          <AdPlaceholder />
        </slot>
      </div>
    </div>
  </Teleport>
</template>
