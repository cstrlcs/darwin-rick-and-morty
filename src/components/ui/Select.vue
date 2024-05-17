<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'radix-vue'

interface Props {
  options: string[]
  placeholder?: string
}

defineProps<Props>()
const model = defineModel<string>()
</script>

<template>
  <SelectRoot v-model="model">
    <SelectTrigger
      class="inline-flex items-center gap-2 h-10 shrink-0 bg-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      aria-label="Options"
    >
      <SelectValue :placeholder="placeholder" />
      <ChevronDown :size="14" />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="min-w-[160px] bg-white rounded shadow will-change-[opacity,transform] z-[100]"
        :side-offset="5"
      >
        <SelectViewport class="p-2">
          <SelectGroup>
            <SelectItem
              v-for="(option, index) in options"
              :key="index"
              class="text-sm leading-none rounded flex items-center py-2 px-4 relative select-none hover:bg-gray-200 hover:outline-none cursor-pointer"
              :value="option"
            >
              <SelectItemText>
                {{ option }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
