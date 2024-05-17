import defaultProvider from '@/providers/defaultProvider'
import type { Paginated } from '@/types/defaultProvider'
import type { GetLocationsParams, Location } from '@/types/locationsService'

export async function getLocations(params?: Partial<GetLocationsParams>) {
  return Promise.resolve(defaultProvider.get<Paginated<Location>>('location', params))
}

export async function getLocation(id: number) {
  return Promise.resolve(defaultProvider.get<Location>(`location/${id}`))
}
