<script setup lang="ts">
import { useBaseStore } from '@/stores/base'

const baseStore = useBaseStore()
baseStore.setActiveContents('項目定義', false)
</script>

<template>
  <div>{{ $route.fullPath }}</div>
</template>
