<script setup lang="ts">
import { PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'radix-vue'

interface Props {
  itemsPerPage: number
  total: number
  disabled?: boolean
}

const props = defineProps<Props>()
const model = defineModel<number>()
</script>

<template>
  <PaginationRoot
    v-bind="props"
    v-model:page="model"
    show-edges
  >
    <PaginationList v-slot="{ items }" class="flex items-center gap-1 justify-center mt-4 fixed bottom-0 left-0 w-full p-2 bg-white">
      <PaginationPrev class="w-9 h-9 flex items-center justify-center mr-4 disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
        &lt;
      </PaginationPrev>

      <template v-for="(page, index) in items">
        <PaginationListItem v-if="page.type === 'page'" :key="index" class="w-9 h-9 border rounded  bg-white data-[selected]:bg-slate-950 data-[selected]:text-white hover:bg-white/10 transition focus-within:outline focus-within:outline-1 focus-within:outline-offset-1" :value="page.value">
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis v-else :key="page.type" :index="index" class="w-9 h-9 flex items-center justify-center">
          &#8230;
        </PaginationEllipsis>
      </template>

      <PaginationNext class="w-9 h-9  flex items-center justify-center ml-4 disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
        &gt;
      </PaginationNext>
    </PaginationList>
  </PaginationRoot>
</template>
