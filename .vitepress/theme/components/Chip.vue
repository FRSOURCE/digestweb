<script lang="ts" setup>
import {
  type PropType,
  type InputHTMLAttributes,
  useId,
  toRefs,
  computed,
  ref,
} from 'vue';
import Button from './Button.vue';

const props = defineProps({
  modelValue: {
    type: [String, Array, Boolean] as PropType<InputHTMLAttributes['checked']>,
    default: false,
  },
  inputProps: {
    type: Object as PropType<InputHTMLAttributes>,
    default: null,
  },
});
defineOptions({
  inheritAttrs: false,
});

const { modelValue } = toRefs(props);
const emit = defineEmits<{
  (event: 'update:modelValue', param: InputHTMLAttributes['checked']): void;
}>();
const inputId = useId();
const inputRef = ref<HTMLInputElement | null>(null);

const onSelected = computed({
  get: () => modelValue?.value,
  set: (value) => {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <input
    ref="inputRef"
    :id="inputId"
    v-model="onSelected"
    class="absolute w-0 outline-hidden appearance-none peer"
    type="checkbox"
    v-bind="inputProps"
  />
  <Button
    tag="label"
    :for="inputId"
    :class="[
      'cursor-pointer items-center justify-center peer-next-focus-visible:outline-2',
    ]"
    size="sm"
    v-bind="$attrs"
    :active="inputRef?.checked"
    :disabled="inputRef?.disabled"
  >
    <slot v-if="$slots.prefix" name="prefix" />
    <slot />
    <slot v-if="$slots.suffix" name="suffix" />
  </Button>
</template>
