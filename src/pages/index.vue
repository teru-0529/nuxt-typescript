<script setup lang="ts">
import { useBaseStore } from '@/stores/base'

const baseStore = useBaseStore()

definePageMeta({
  layout: false,
})
setPageLayout(baseStore.baseLayout)
</script>

<template>
  <div>index.vue</div>
</template>
