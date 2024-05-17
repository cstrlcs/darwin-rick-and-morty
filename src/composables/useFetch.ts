import type { UnwrapRef } from 'vue'
import { ref } from 'vue'

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
