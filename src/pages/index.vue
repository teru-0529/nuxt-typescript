<script setup lang="ts">
import { useBaseStore } from '@/stores/base'

definePageMeta({
  layout: false,
})

onMounted((): void => {
  const baseStore = useBaseStore()
  setPageLayout(baseStore.baseLayout)
})
</script>

<template>
  <div>index.vue</div>
</template>
