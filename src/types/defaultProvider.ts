export interface PaginatedInfo {
  count: number
  pages: number
  next: string
  prev: string
}

export interface Paginated<T> {
  info: PaginatedInfo
  results: T[]
}
