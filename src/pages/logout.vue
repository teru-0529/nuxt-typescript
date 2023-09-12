<script setup lang="ts">
import { useBaseStore } from '@/stores/base'

const baseStore = useBaseStore()

onBeforeMount((): void => {
  baseStore.logout()
  navigateTo({ path: '/' })
})
</script>

<template>
  <div />
</template>
