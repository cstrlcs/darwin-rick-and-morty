<script lang="ts" setup>
import { useRoute } from 'vue-router'

import Unique from '@/components/list/Unique.vue'
import { getLocation } from '@/services/locationsService'
import { formatLocation } from '@/utils/formatters'

const route = useRoute()
const id = Number(route.params.id)
</script>

<template>
  <Unique
    :id="id"
    :fetchable="getLocation"
    :formatter="formatLocation"
  />
</template>
