<script setup lang="ts">
import Button from './Button.vue';
defineProps<{ modelValue: boolean; title: string }>();
defineEmits<{ 'update:modelValue': [value: boolean] }>();
</script>
<template>
  <Teleport to="body">
    <Transition name="modal-backdrop">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[900] bg-dw-bg/70 backdrop-blur-[2px]"
        @click.self="$emit('update:modelValue', false)"
      />
    </Transition>
    <Transition name="modal-slide">
      <section
        v-if="modelValue"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
        class="fixed bottom-0 inset-x-0 z-[901] bg-dw-bg rounded-t-3xl lg:bottom-2 lg:inset-x-2 lg:rounded-3xl raised-5 max-h-[85dvh] overflow-y-auto pb-[env(safe-area-inset-bottom,1rem)] lg:pb-2 lg:max-w-120 lg:mx-auto"
      >
        <header
          class="sticky top-0 bg-dw-bg flex items-center justify-between -raised-1 px-3 py-1.5 pe-1.5"
        >
          <h2
            class="text-[.62rem] font-bold uppercase tracking-[.08em] text-dw-muted"
          >
            {{ title }}
          </h2>
          <Button
            @click="$emit('update:modelValue', false)"
            aria-label="Close"
            size="md"
            class="w-8 leading-4 justify-center"
          >
            &#215;
          </Button>
        </header>
        <div class="p-3 pb-0 text-[.875rem] text-dw-text leading-relaxed">
          <slot />
        </div>
      </section>
    </Transition>
  </Teleport>
</template>

<style>
.modal-backdrop-enter-active,
.modal-backdrop-leave-active {
  transition: opacity 0.25s ease;
}
.modal-backdrop-enter-from,
.modal-backdrop-leave-to {
  opacity: 0;
}
.modal-slide-enter-active,
.modal-slide-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.25s ease;
}
.modal-slide-enter-from,
.modal-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
