<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const name = ref('たくみ')
const counterStore = useCounterStore()
const count = computed((): number => {
  return counterStore.counter
})
const doubleCount = computed((): number => {
  return counterStore.doubleCount
})
const onIncrementClick = () => {
  counterStore.incrementCount()
}
</script>

<template>
  <div>
    <p>現在のポイント:{{ count }}</p>
    <p>倍のポイント{{ doubleCount }}</p>
    <div class="m-4">
      <Button v-on:click="onIncrementClick">加算</Button>
    </div>
    <!-- <NuxtWelcome /> -->
  </div>
</template>
