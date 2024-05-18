const BASE_URL = 'https://rickandmortyapi.com/api'

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
}

/**
 * Normalmente utilizaria Axios para gerar uma instância padrão
 * com as configurações base de URL, Headers, Timeout e interceptors.
 * A ideia é que o provider já abstraia toda a lógica de injetar JWT,
 * interceptar responses, tratar erros de rede, etc.
 *
 * Mas por questões de simplicidade, resolvi implementar meu próprio
 * provider utilizando fetch nativo.
 *
 * O método GET foi o único implementado, mas poderiamos facilmente
 * implementar os métodos POST, PUT, DELETE, etc. Axios já faria tudo isso por padrão.
 *
 * O GET é uma função genérica pois podemos esperar uma resposta já tipada da promise.
 */
export default {
  get: async<T>(url: string, params?: Record<string, string>) => {
    // Parametros undefined/vazios podem interferir na query
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
