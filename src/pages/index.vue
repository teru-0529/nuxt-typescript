<script setup lang="ts">
import { useBaseStore } from '@/stores/base'

definePageMeta({
  layout: false,
})

const baseStore = useBaseStore()

// const isli: boolean = baseStore.isLogin
// const isLogin = computed((): boolean => {
//   return baseStore.isLogin
// })

// const layout: string = baseStore.isLogin ? 'default' : 'welcome'
const layout: string = baseStore.baseLayout
console.log(layout)

setPageLayout(layout)
</script>

<template>
  <div>index.vue</div>
</template>
