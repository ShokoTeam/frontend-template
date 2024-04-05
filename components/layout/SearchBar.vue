<template>
  <div class="w-full py-7 px-4 flex flex-col">
    <UiInput
      v-model="model"
      class="w-full"
      :placeholder="placeholder"
    />
    <div class="mt-2 flex items-center justify-between">
      <slot name="options" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  placeholder: string
  modelValue: string | null
}

const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const model = computed({
  get () {
    return props.modelValue
  },
  set (newValue) {
    emits('update:modelValue', newValue)
  }
})
</script>
