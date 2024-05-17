export interface GetCharactersParams {
  name: string
  status: ChraracterStatus
  species: string
  type: string
  gender: CharacterGender
}

enum ChraracterStatus {
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
