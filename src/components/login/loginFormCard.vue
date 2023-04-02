<script setup lang="ts">
import { useBaseStore } from '@/stores/base'
import { useAccountStore } from '@/stores/account'
import formName from '@/components/login/loginFormName.vue'

const baseStore = useBaseStore()
const accountStore = useAccountStore()
const appName = computed((): string => {
  return baseStore.appName
})
const existName = computed((): boolean => {
  return accountStore.existName
})
const onLoginClick = () => {
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
      <form-name />
      <div>
        <p>
          ※ユーザー名を指定することで登録時の項目として利用します。<br />
          一度登録するとユーザー名はブラウザのLocalstrageに保存され、次回以降は登録作業を挟むことなくログインすることができます。
        </p>
      </div>
    </template>
    <template #footer>
      <Button
        icon="pi pi-check"
        label="登録してログイン"
        :disabled="existName"
        v-on:click="onLoginClick"
      />
    </template>
  </Card>
</template>
