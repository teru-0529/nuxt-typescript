<script setup lang="ts">
import { useBaseStore } from '@/stores/base'

const baseStore = useBaseStore()
const appName = computed((): string => {
  return baseStore.appName
})
</script>

<template>
  <div class="card bg-bluegray-900 m-0 p-2">
    <div class="card">
      <div class="flex card-container blue-container overflow-hidden">
        <div class="flex-grow-1 flex">
          <Avatar label="PH" class="mr-2 text-white bg-indigo-500" size="large" />
          <div class="my-1">
            <span class="text-3xl text-white vertical-align-middle">{{ appName }}</span>
          </div>
        </div>
        <div class="flex-none flex align-items-center mx-3">
          <Button label="ログイン" aised />
        </div>
      </div>
    </div>
  </div>
</template>
