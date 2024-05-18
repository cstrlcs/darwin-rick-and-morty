import type { UnwrapRef } from 'vue'
import { ref } from 'vue'

/**
 * O composable useFetch é inspirado no hook useQuery do React Query.
 * A ideia é abstrair a lógica da chamada de APIs e retornar diretamente
 * os dados, estado da requisição e possíveis erros.
 *
 * Obviamente é um exemplo bem simplificado e não possui features comuns
 * de bibliotecas stale-while-revalidate, como caching, polling, etc.
 *
 * Uma implementação mais robusta de uso no mundo real seria o `useFetch` do vue-use
 * https://vueuse.org/core/useFetch/
 */
export default function useFetch<T>(fn: () => Promise<T>) {
  const data = ref<T | null>(null)
  const error = ref<unknown | null>(null)
  const pending = ref(false)

  const refresh = async () => {
    pending.value = true
    error.value = null

    try {
      data.value = <UnwrapRef<T>>(await fn())
    }
    catch (err) {
      error.value = err
    }
    finally {
      pending.value = false
    }
  }

  refresh()

  return {
    data,
    error,
    pending,
    refresh,
  }
}
