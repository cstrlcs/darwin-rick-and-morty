<script lang="ts" setup  generic="T">
import { computed } from 'vue'

import ListItem, { type Props as ListItemProps } from '@/components/list/ListItem.vue'
import ErrorCard from '@/components/ui/ErrorCard.vue'
import Skeleton from '@/components/ui/Skeleton.vue'
import useFetch from '@/composables/useFetch'

interface Props {
  id: number
  fetchable: (id: number) => Promise<T>
  formatter: (item: T) => ListItemProps
}

const props = defineProps<Props>()

const { data, pending, error } = useFetch(() => props.fetchable(props.id))

const computedItem = computed<ListItemProps | null>(() => {
  if (!data.value)
    return null

  return props.formatter(data.value as T)
})
</script>

<template>
  <div class="group">
    <Transition mode="out-in">
      <Skeleton v-if="pending || !computedItem" />
      <ErrorCard v-else-if="error" :error="error" />
      <ListItem v-else v-bind="computedItem" />
    </Transition>
  </div>
</template>
