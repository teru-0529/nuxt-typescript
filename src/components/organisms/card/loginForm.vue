<script setup lang="ts">
import formUserName from '@/components/molecules/forms/userName.vue'
import { useBaseStore } from '@/stores/base'
import { useAccountStore } from '@/stores/account'
import appInfo from '@/assets/appInfo.json'

const baseStore = useBaseStore()
const accountStore = useAccountStore()

const appName = computed(() => {
  return appInfo.name
})

const isUserNameError = ref(true)
const setUserNameError = (isError: boolean) => {
  isUserNameError.value = isError
}

// 複数の入力コンポーネントのいずれかがエラーの場合にtrue
const hasErrors = computed((): boolean => {
  return isUserNameError.value || false
})

onBeforeMount((): void => {
  // ローカルストレージからアカウント名を取得
  accountStore.prepareAccount()
  setUserNameError(accountStore.emptyName)
})

const onLoginClick = () => {
  // ローカルストレージにアカウント名を登録
  accountStore.setName()
  baseStore.login()
  return navigateTo({ path: '/' })
}
</script>

<template>
  <Card style="width: 30em">
    <template #title>
      <div>{{ appName }}にログイン</div>
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
