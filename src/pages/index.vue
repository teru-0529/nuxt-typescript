<script setup lang="ts">
import { useBaseStore } from '@/stores/base'

definePageMeta({
  layout: false,
})

const baseStore = useBaseStore()
const layout: string = baseStore.baseLayout
setPageLayout(baseStore.baseLayout)
</script>

<template>
  <div>index.vue</div>
</template>
