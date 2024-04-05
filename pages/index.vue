<template>
  <div
    class="flex flex-col w-full h-screen bg-zinc-950 items-center justify-center"
  >
    <h1 class="text-green-400 font-bold text-6xl italic">
      Hello index page!
    </h1>
    <div class="flex flex-col gap-y-4">
      <UiButton variant="outline">
        outline
      </UiButton>
      <UiButton variant="default">
        default
      </UiButton>
      <UiButton variant="secondary">
        secondary
      </UiButton>
      <UiButton variant="ghost">
        ghots
      </UiButton>
      <UiSwitch />
      <UiInput v-model="data" />
      Hello
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    'data-theme': 'default'
  }
})
const data = ref<string>('')
</script>
