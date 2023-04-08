<script setup lang="ts">
import { useBaseStore } from '@/stores/base'
import { useAccountStore } from '@/stores/account'
import formUserName from '@/components/molecules/forms/userName.vue'
import formMailAddress from '@/components/molecules/forms/mailAddress.vue'

const baseStore = useBaseStore()
const accountStore = useAccountStore()

const existName = computed((): boolean => {
  return accountStore.existName
})

const aaa = computed((): string => {
  return accountStore.name + ' - ' + accountStore.address
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
      <form-user-name v-model:user-name="accountStore.name" />
      <form-mail-address v-model:address="accountStore.address" />
      <div>
        {{ aaa }}
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
