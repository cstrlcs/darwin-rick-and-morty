<script setup lang="ts">
interface Props {
  title?: string
}

defineProps<Props>()
</script>

<template>
  <article class="rounded-lg space-y-2 border p-4 border-slate-200 bg-white text-slate-950 shadow-sm">
    <header v-if="title">
      <h3 class="group-hover:underline text-lg font-semibold leading-none tracking-tight overflow-hidden max-w-full whitespace-nowrap text-ellipsis">
        {{ title }}
      </h3>
    </header>

    <div class="text-sm text-slate-500">
      <p>
        <slot />
      </p>
    </div>
  </article>
</template>
