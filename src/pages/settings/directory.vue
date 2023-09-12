<script setup lang="ts">
import { useBaseStore } from '@/stores/base'

const baseStore = useBaseStore()
baseStore.setActiveContents('保存フォルダ編集', true)
</script>

<template>
  <div>{{ $route.fullPath }}</div>
</template>
