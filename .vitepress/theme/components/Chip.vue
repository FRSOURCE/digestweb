<script lang="ts" setup>
import {
  type PropType,
  type InputHTMLAttributes,
  useId,
  toRefs,
  computed,
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

const onSelected = computed({
  get: () => modelValue?.value,
  set: (value) => {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <input
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
      'cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline',
    ]"
    size="sm"
    v-bind="$attrs"
  >
    <slot v-if="$slots.prefix" name="prefix" />
    <slot />
    <slot v-if="$slots.suffix" name="suffix" />
  </Button>
</template>
