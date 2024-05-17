<script lang="ts" setup>
import { getLocations } from '@/services/locationsService'

import List from '@/components/list/List.vue'
import { formatLocation } from '@/utils/formatters'
</script>

<template>
  <List
    type="location"
    :params="{}"
    :fetchable="getLocations"
    :formatter="formatLocation"
  />
</template>
