<script setup lang="ts">
import { useBaseStore } from '@/stores/base'
import { useAccountStore } from '@/stores/account'
import formUserName from '@/components/molecules/forms/userName.vue'

const baseStore = useBaseStore()
const accountStore = useAccountStore()

const isUserNameError = ref(true)
const setUserNameError = (isError: boolean) => {
  isUserNameError.value = isError
}

const hasErrors = computed((): boolean => {
  return isUserNameError.value
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
