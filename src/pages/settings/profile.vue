<script setup lang="ts">
import { useBaseStore } from '@/stores/base'

const baseStore = useBaseStore()
baseStore.setActiveContents('プロフィール編集', true)
</script>

<template>
  <div>{{ $route.fullPath }}</div>
</template>
