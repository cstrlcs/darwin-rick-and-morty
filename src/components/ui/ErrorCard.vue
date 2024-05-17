<script lang="ts" setup>
import errorImage from '@/assets/error.png'
import Card from '@/components/ui/Card.vue'

interface Props {
  error: unknown
}

defineProps<Props>()
</script>

<template>
  <Card class="text-center">
    <img :src="errorImage" alt="Error" class="w-full h-52 object-contain">
    <h3 class="mt-4 text-xl text-slate-950 font-medium">
      Rick... I think something went wrong.
    </h3>
    <code class="text-red-500">
      {{ (error as any).message }}
    </code>
  </Card>
</template>
