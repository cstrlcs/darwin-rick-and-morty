import defaultProvider from '@/providers/defaultProvider'
import type { Paginated } from '@/types/defaultProvider'
import type { Episode, GetEpisodesParams } from '@/types/episodesService'

export async function getEpisodes(params?: Partial<GetEpisodesParams>) {
  return Promise.resolve(defaultProvider.get<Paginated<Episode>>('episode', params))
}

export async function getEpisode(id: number) {
  return Promise.resolve(defaultProvider.get<Episode>(`episode/${id}`))
}
