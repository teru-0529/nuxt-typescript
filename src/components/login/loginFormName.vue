<script setup lang="ts">
import { useAccountStore } from '@/stores/account'

const accountStore = useAccountStore()
</script>

<template>
  <span class="p-float-label">
    <InputText id="username" v-model="accountStore.name" />
    <label for="username">ログイン名</label>
  </span>
</template>
