import defaultProvider from '@/providers/defaultProvider'
import type { Character, GetCharactersParams } from '@/types/charactersService'
import type { Paginated } from '@/types/defaultProvider'

export async function getCharacters(params?: Partial<GetCharactersParams>) {
  return Promise.resolve(defaultProvider.get<Paginated<Character>>('character', params))
}

export async function getCharacter(id: number) {
  return Promise.resolve(defaultProvider.get<Character>(`character/${id}`))
}
