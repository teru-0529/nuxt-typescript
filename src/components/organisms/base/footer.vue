<script setup lang="ts">
import { useBaseStore } from '@/stores/base'
interface Props {
  isLoggedIn: boolean
}
defineProps<Props>()

const baseStore = useBaseStore()

const copyRightYear = computed((): string => {
  const beginningYear = 2022
  const thisYear = new Date().getFullYear()
  return beginningYear < thisYear ? `${beginningYear} - ${thisYear}` : String(beginningYear)
})
</script>

<template>
  <div
    class="m-0 p-2 text-center"
    v-bind:class="{ 'bg-bluegray-600': !isLoggedIn, 'bg-primary-600': isLoggedIn }"
  >
    <span class="text-1xl text-white">
      &copy;{{ copyRightYear }} <strong>{{ baseStore.appName }} Project</strong>
    </span>
  </div>
</template>
