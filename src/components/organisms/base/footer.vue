<script setup lang="ts">
import { useBaseStore } from '@/stores/base'

const baseStore = useBaseStore()

const copyRightYear = computed((): string => {
  const beginningYear = 2022
  const thisYear = new Date().getFullYear()
  return beginningYear < thisYear ? `${beginningYear} - ${thisYear}` : String(beginningYear)
})
</script>

<template>
  <div class="bg-bluegray-600 m-0 p-2 text-center">
    <span class="text-1xl text-white">
      &copy;{{ copyRightYear }} <strong>{{ baseStore.appName }} Project</strong>
    </span>
  </div>
</template>
