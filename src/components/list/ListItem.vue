<script setup lang="ts">
import type { LucideIcon } from 'lucide-vue-next'

import Card from '@/components/ui/Card.vue'

interface ListItemInfo {
  label: string
  value: unknown
  variant?: string
  icon?: LucideIcon
}

export interface Props {
  id: number
  name: string
  items: ListItemInfo[]
  image?: string
}

defineProps<Props>()
</script>

<template>
  <Card :title="name">
    <ul>
      <img v-if="image" :src="image" alt="Image" class="mx-auto rounded w-full h-32 object-cover bg-gray-100 my-4 group-only-of-type:object-contain group-only-of-type:h-64">

      <li v-for="item in items" :key="item.label">
        <div class="flex justify-between gap-4">
          <span class="text-slate-950">
            {{ item.label }}
          </span>

          <span
            :data-variant="item.variant"
            class="text-gray-500 max-w-full whitespace-nowrap overflow-hidden text-ellipsis data-[variant]:font-bold data-[variant=success]:text-green-500 data-[variant=danger]:text-red-500"
          >
            {{ item.value }}
          </span>
        </div>
      </li>
    </ul>
  </Card>
</template>
