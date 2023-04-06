<script setup lang="ts">
import { useBaseStore } from '@/stores/base'

const baseStore = useBaseStore()
const appName = computed((): string => {
  return baseStore.appName
})
</script>

<template>
  <NuxtLink to="/">
    <Avatar label="PH" class="mr-2 text-white bg-bluegray-700" size="large" />
  </NuxtLink>
  <div class="my-1">
    <span class="text-3xl text-bluegray-600 vertical-align-middle">{{ appName }}</span>
  </div>
</template>
