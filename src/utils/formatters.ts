import type { Props as ListItemProps } from '@/components/list/ListItem.vue'
import type { Character, CharacterStatus } from '@/types/charactersService'
import type { Episode } from '@/types/episodesService'
import type { Location } from '@/types/locationsService'

function getCharacterVariant(status: CharacterStatus) {
  return {
    Alive: 'success',
    Dead: 'danger',
    None: undefined,
    unknown: undefined,
  }[status] || undefined
}

export function formatCharacter(item: Character): ListItemProps {
  return {
    ...item,
    items: [
      { label: 'Status', value: item.status, variant: getCharacterVariant(item.status) },
      { label: 'Species', value: item.species },
      { label: 'Gender', value: item.gender },
      { label: 'Location', value: item.location?.name || 'Unknown' },
    ],
  }
}

export function formatLocation(item: Location): ListItemProps {
  return {
    ...item,
    items: [
      { label: 'Dimension', value: item.dimension },
      { label: 'Type', value: item.type },
    ],
  }
}

export function formatEpisode(item: Episode): ListItemProps {
  return {
    ...item,
    items: [
      { label: 'Episode', value: item.episode },
      { label: 'Date', value: item.air_date },
    ],
  }
}
