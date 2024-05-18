const BASE_URL = 'https://rickandmortyapi.com/api'

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
}

export default {
  get: async<T>(url: string, params?: Record<string, string>) => {
    const filteredParams = Object.fromEntries(
      Object.entries(params || {}).filter(([_, value]) => value),
    )

    const query = new URLSearchParams(filteredParams)

    const response = await fetch(`${BASE_URL}/${url}?${query}`, {
      headers: DEFAULT_HEADERS,
      signal: AbortSignal.timeout(5000),
    })

    return response.json() as T
  },
}
