<script lang="ts" setup>
import ErrorCard from '@/components/ui/ErrorCard.vue'
</script>

<template>
  <ErrorCard :error="{ message: 404 }" />
</template>
