<script lang="ts" setup generic="T extends FetchableParams, U">
/**
 * A ideia deste componente é que ele seja um componente de listagem genérica.
 * O endpoint (service) chamado é passado através de uma prop (fetchable).
 * E o resultado dessa chamada é formatada para um padrão de lista através de outra prop (formatter).
 *
 * Os benefícios de se ter um componente genérico são:
 *  1. Reutilização de código:
 *  - As 3 telas (Personagens, Locais e Episódios) usam exatamente o mesmo componente,
 *   mudando apenas o endpoint e a formatação dos dados.
 *    Graças ao uso de genéricos do Vue 3.3, a tipagem continua forte e podemos identificar
 *   problemas emm cada uma das telas.
 *
 * 2. Flexibilidade
 * - Apesar de termos um componente genérico para as 3 telas, as telas ainda são separadas
 *   e podemos acrescentar comportamentos específicos para cada uma delas.
 *    Um exemplo é a tela de Personagens que tem um filtro de status.
 */
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
