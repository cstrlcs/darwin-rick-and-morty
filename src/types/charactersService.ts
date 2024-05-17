import type { FetchableParams } from '@/types/defaultProvider'

export interface GetCharactersParams extends FetchableParams {
  status: ChraracterStatus
  species: string
  type: string
  gender: CharacterGender
}

export enum ChraracterStatus {
  None = 'None',
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

enum CharacterGender {
  Female = 'Female',
  Male = 'Male',
  Genderless = 'Genderless',
  Unknown = 'unknown',
}

interface CharacterLocationReference {
  name: string
  url: string
}

export interface Character {
  id: number
  name: string
  status: ChraracterStatus
  species: string
  type: string
  gender: CharacterGender
  origin: CharacterLocationReference
  location: CharacterLocationReference
  image: string
  episode: string[]
  url: string
  created: Date
}
