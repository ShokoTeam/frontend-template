<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  meta: [
    {
      'http-equiv': 'Content-Security-Policy',
      content: 'upgrade-insecure-requests'
    }
  ]
})
</script>
