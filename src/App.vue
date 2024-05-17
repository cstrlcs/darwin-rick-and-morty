<script lang="ts" setup>
import Header from '@/components/ui/Header.vue'
</script>

<template>
  <main class="relative w-full min-h-screen p-16 pb-24 bg-gray-100">
    <div class="max-w-3xl mx-auto">
      <Header />

      <RouterView v-slot="{ Component }">
        <Transition mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </main>
</template>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 0.1s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
