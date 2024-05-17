import type { FetchableParams } from '@/types/defaultProvider'

export interface GetEpisodesParams extends FetchableParams {
  episode: string
}

type EpisodeCode = `S${number}E${number}`

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: EpisodeCode
  characters: string[]
  url: string
  created: Date
}
