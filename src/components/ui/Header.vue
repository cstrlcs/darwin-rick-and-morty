<script lang="ts" setup>
import { CircleUser, Globe, Tv } from 'lucide-vue-next'

import logoImage from '@/assets/logo.svg'

const items = [
  { icon: CircleUser, label: 'Characters', path: '/' },
  { icon: Globe, label: 'Locations', path: '/locations' },
  { icon: Tv, label: 'Episodes', path: '/episodes' },
] as const
</script>

<template>
  <header class="text-center">
    <a href="/">
      <img :src="logoImage" class="w-full sm:w-1/2 mx-auto">
    </a>
    <nav class="flex flex-col gap-2 sm:flex-row items-center justify-center sm:gap-8 py-4 mt-4">
      <router-link
        v-for="item in items"
        :key="item.label"
        :to="item.path"
        class="text-xl flex items-center gap-2 font-semibold rounded px-4 py-2 transition-colors duration-300 hover:bg-gray-200 aria-[current]:bg-gray-300"
      >
        <component :is="item.icon" :size="20" class="text-gray-400" />
        {{ item.label }}
      </router-link>
    </nav>
  </header>
</template>
