<script lang="ts" setup>
const items = [
  { label: 'Home', path: '/' },
  { label: 'Locations', path: '/locations' },
  { label: 'Episodes', path: '/episodes' },
] as const
</script>

<template>
  <header class="text-center">
    <h1 class="font-bold text-3xl">
      Rick and Morty
    </h1>
    <nav class="flex items-center justify-center gap-8 py-4">
      <router-link v-for="item in items" :key="item.label" :to="item.path" class="text-xl font-semibold">
        {{ item.label }}
      </router-link>
    </nav>
  </header>
</template>
