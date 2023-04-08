<script setup lang="ts">
interface Props {
  userName: string
}
defineProps<Props>()

interface Emits {
  (event: 'update:user-name', appname: string): void
}
const emit = defineEmits<Emits>()

const onInput = (event: Event): void => {
  const element = event.target as HTMLInputElement
  emit('update:user-name', element.value)
}
</script>

<template>
  <div class="flex flex-column gap-1">
    <label for="userName">ユーザー名</label>
    <InputText id="userName" v-bind:value="userName" v-on:input="onInput" />
  </div>
</template>
