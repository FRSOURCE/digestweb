<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { attach } from '@frsource/autoresize-textarea';
import Label from './Label.vue';

const props = defineProps<{
  id: string;
  label: string;
  modelValue: string;
  placeholder: string;
  required?: boolean;
  submitted: boolean;
  errorLabel?: string;
  type?: 'text' | 'email' | 'textarea' | 'url';
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const InputTag = computed(() => {
  return props.type === 'textarea' ? 'textarea' : 'input';
});

const inputEl = ref<HTMLElement | null>(null);
let detach: (() => void) | undefined;

onMounted(() => {
  if (
    props.type === 'textarea' &&
    inputEl.value instanceof HTMLTextAreaElement
  ) {
    detach = attach(inputEl.value)?.detach;
  }
});

onBeforeUnmount(() => {
  detach?.();
});
</script>

<template>
  <div>
    <Label :required="required" :for="id">
      {{ label }}
    </Label>
    <component
      :is="InputTag"
      ref="inputEl"
      :id="id"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      :type="type ?? 'text'"
      :required="required"
      :placeholder="placeholder"
      :aria-invalid="submitted && !!errorLabel"
      :aria-describedby="errorLabel ? `${id}-err` : undefined"
      class="w-full -raised-1 rounded-xl px-4 py-2.5 text-sm text-dw-text bg-dw-bg placeholder:text-dw-muted/50 outline-none focus:-raised-3 transition-shadow focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-dw-primary"
      :class="{
        'outline outline-2 outline-red-400': submitted && errorLabel,
      }"
    />
    <p
      v-if="submitted && errorLabel"
      :id="`${id}-err`"
      class="mt-1.5 text-xs text-red-500"
      role="alert"
    >
      {{ errorLabel }}
    </p>
  </div>
</template>
