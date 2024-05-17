<script lang="ts" setup>
import { getEpisodes } from '@/services/episodesService'

import List from '@/components/list/List.vue'
import { formatEpisode } from '@/utils/formatters'
</script>

<template>
  <List
    type="episode"
    :params="{}"
    :fetchable="getEpisodes"
    :formatter="formatEpisode"
  />
</template>
