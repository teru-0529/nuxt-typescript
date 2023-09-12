<script setup lang="ts">
import history from '@/components/organisms/base/changeHistory.vue'
import { useBaseStore } from '@/stores/base'

const baseStore = useBaseStore()
baseStore.setActiveContents('', true)

definePageMeta({
  layout: false,
})
setPageLayout(baseStore.isLogin ? 'default' : 'welcome')
</script>

<template>
  <div class="p-2"><history /></div>
</template>
