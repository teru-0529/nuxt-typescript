<script setup lang="ts">
import { useBaseStore } from '@/stores/base'

onMounted((): void => {
  definePageMeta({
    // layout: false,
    layout: 'welcome',
  })
  const baseStore = useBaseStore()
  setPageLayout(baseStore.baseLayout)
})
</script>

<template>
  <div>index.vue</div>
</template>
