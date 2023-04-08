<script setup lang="ts">
interface Props {
  address: string
}
defineProps<Props>()

interface Emits {
  (event: 'update:address', address: string): void
}
const emit = defineEmits<Emits>()

const onInput = (event: Event): void => {
  const element = event.target as HTMLInputElement
  emit('update:address', element.value)
}
</script>

<template>
  <div class="flex flex-column gap-1">
    <label for="address">メールアドレス</label>
    <InputText id="address" v-bind:value="address" v-on:input="onInput" />
  </div>
</template>
