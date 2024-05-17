<script lang="ts" setup generic="T extends FetchableParams, U">
import { computed, ref, watch } from 'vue'

import ListItem, { type Props as ListItemProps } from '@/components/list/ListItem.vue'
import ErrorCard from '@/components/ui/ErrorCard.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Skeleton from '@/components/ui/Skeleton.vue'
import useFetch from '@/composables/useFetch'
import type { FetchableParams, Paginated } from '@/types/defaultProvider'

interface Props {
  type: string
  params: Partial<T>
  fetchable: (params?: Partial<T> | undefined) => Promise<Paginated<U>>
  formatter: (item: U) => ListItemProps
}

const props = defineProps<Props>()
const page = ref(1)

const { data, pending, error, refresh } = useFetch(() => props.fetchable({ ...props.params, page: `${page.value}` } as Partial<T>))

const computedItems = computed<ListItemProps[]>(() => {
  if (!data.value)
    return []

  return data.value.results.map(item => props.formatter(item as U))
})

watch(() => props.params, () => {
  page.value = 1
  refresh()
})

watch(page, refresh)
</script>

<template>
  <div>
    <Transition mode="out-in">
      <Skeleton v-if="pending" />
      <ErrorCard v-else-if="error" :error="error" />
      <div v-else>
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <li v-for="item in computedItems" :key="item.id" class="group">
            <router-link :to="{ path: `${type}/${item.id}` }" class="hover:scale-105 block active:scale-[0.95] transition-transform">
              <ListItem v-bind="item" />
            </router-link>
          </li>
        </ul>
      </div>
    </Transition>

    <Pagination
      v-if="data"
      v-model="page"
      :total="data.info.count"
      :items-per-page="20"
      :disabled="pending"
    />
  </div>
</template>
