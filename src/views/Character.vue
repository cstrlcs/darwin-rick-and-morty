<script lang="ts" setup>
import { useRoute } from 'vue-router'

import Unique from '@/components/list/Unique.vue'
import { getCharacter } from '@/services/charactersService'
import { formatCharacter } from '@/utils/formatters'

const route = useRoute()
const id = Number(route.params.id)
</script>

<template>
  <Unique
    :id="id"
    :fetchable="getCharacter"
    :formatter="formatCharacter"
  />
</template>
