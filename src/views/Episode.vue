<script lang="ts" setup>
import { useRoute } from 'vue-router'

import Unique from '@/components/list/Unique.vue'
import { getEpisode } from '@/services/episodesService'
import { formatEpisode } from '@/utils/formatters'

const route = useRoute()
const id = Number(route.params.id)
</script>

<template>
  <Unique
    :id="id"
    :fetchable="getEpisode"
    :formatter="formatEpisode"
  />
</template>
