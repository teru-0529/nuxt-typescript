<script setup lang="ts">
import req from '@/components/molecules/items/required.vue'

interface Props {
  userName: string
}
const prop = defineProps<Props>()

interface Emits {
  (event: 'update:user-name', userName: string): void
  (event: 'setIsError', isError: boolean): void
}
const emit = defineEmits<Emits>()

const onInput = (event: Event): void => {
  const element = event.target as HTMLInputElement
  emit('update:user-name', element.value)
}

const errMessage = ref('')

const onFocusIn = (): void => {
  errMessage.value = ''
}

const validate = (event: Event): void => {
  const element = event.target as HTMLInputElement
  const value = element.value
  if (value.length < 2) {
    errMessage.value = 'ユーザー名は2文字以上必要です。'
    emit('setIsError', true)
  } else {
    emit('setIsError', false)
  }
}
</script>

<template>
  <div class="flex flex-column gap-1">
    <label for="userName"><req />ユーザー名</label>
    <InputText
      id="userName"
      v-bind:value="userName"
      v-on:input="onInput"
      v-on:focus="onFocusIn"
      v-on:blur="validate"
      :class="{ 'p-invalid': errMessage }"
      aria-describedby="text-error"
    />
    <small class="p-error" id="text-error">{{ errMessage || '　' }}</small>
  </div>
</template>
