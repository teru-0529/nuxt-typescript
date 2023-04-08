<script setup lang="ts">
interface Props {
  userPassword: string
  feedback: boolean
}
defineProps<Props>()

interface Emits {
  (event: 'update:user-password', userPassword: string): void
}
const emit = defineEmits<Emits>()

const onInput = (event: Event): void => {
  const element = event.target as HTMLInputElement
  console.log(element.value)
  emit('update:user-password', element.value)
}
</script>

<template>
  <div class="flex flex-column">
    <label for="userPassword">パスワード</label>
    <Password
      id="userPassword"
      v-bind:value="userPassword"
      v-bind:feedback="feedback"
      v-on:input="onInput"
      toggleMask
    />
    {{ userPassword }}
  </div>
</template>
v-model="userPassword"
<!-- {{ userPassword }} -->
