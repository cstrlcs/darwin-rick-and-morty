<script lang="ts" setup>
import { computed, ref } from 'vue'

import { getCharacters } from '@/services/charactersService'

import List from '@/components/list/List.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'

import { CharacterStatus } from '@/types/charactersService'
import { formatCharacter } from '@/utils/formatters'

const options = [
  'None',
  'Alive',
  'Dead',
  'Unknown',
]

const name = ref('')
const status = ref(CharacterStatus.None)

const computedParams = computed(() => {
  return {
    name: name.value.trim(),
    status: status.value === CharacterStatus.None ? undefined : status.value,
  }
})
</script>

<template>
  <div>
    <div class="mb-8 flex gap-2">
      <Input v-model="name" placeholder="Search..." />
      <Select v-model="status" placeholder="Select status..." :options="options" />
    </div>

    <List
      type="character"
      :params="computedParams"
      :fetchable="getCharacters"
      :formatter="formatCharacter"
    />
  </div>
</template>
