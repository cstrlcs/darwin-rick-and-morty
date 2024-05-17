import type { FetchableParams } from '@/types/defaultProvider'

export interface GetLocationsParams extends FetchableParams {
  type: string
  dimension: string
}

export interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: Date
}
