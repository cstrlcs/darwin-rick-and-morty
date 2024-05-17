export interface GetLocationsParams {
  name: string
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
