<script setup lang="ts">
import formUserName from '@/components/molecules/forms/userName.vue'
import { useBaseStore } from '@/stores/base'
import { useAccountStore } from '@/stores/account'

const baseStore = useBaseStore()
const accountStore = useAccountStore()

const isUserNameError = ref(true)
const setUserNameError = (isError: boolean) => {
  isUserNameError.value = isError
}

// 複数の入力コンポーネントのいずれかがエラーの場合にtrue
const hasErrors = computed((): boolean => {
  return isUserNameError.value || false
})

const onLoginClick = () => {
  baseStore.login()
  return navigateTo({ path: '/' })
}
</script>

<template>
  <Card style="width: 30em">
    <template #title>
      <div>{{ baseStore.appName }}にログイン</div>
    </template>
    <template #content>
      <form-user-name v-model:user-name="accountStore.name" v-on:set-is-error="setUserNameError" />
      <div>
        <p>※指定した名称は項目登録時のユーザーとして利用します。</p>
      </div>
    </template>
    <template #footer>
      <Button icon="pi pi-check" label="ログイン" :disabled="hasErrors" v-on:click="onLoginClick" />
    </template>
  </Card>
</template>
