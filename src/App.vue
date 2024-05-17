<script lang="ts" setup>
import Header from '@/components/ui/Header.vue'
</script>

<template>
  <main class="relative w-full min-h-screen p-16 pb-24 bg-gray-100">
    <div class="max-w-3xl mx-auto">
      <Header />
      <RouterView />
    </div>
  </main>
</template>
