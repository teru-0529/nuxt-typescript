<script setup lang="ts">
import { useBaseStore } from '@/stores/base'

const baseStore = useBaseStore()

definePageMeta({
  layout: false,
})
setPageLayout(baseStore.isLogin ? 'default' : 'welcome')
</script>

<template>
  <div>index.vue</div>
</template>
