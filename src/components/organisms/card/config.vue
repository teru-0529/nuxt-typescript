<script setup lang="ts">
import { useAccountStore } from '@/stores/account'

const accountStore = useAccountStore()

const menu = ref()
const items = ref([
  {
    label: 'ログインユーザー',
    items: [{ label: accountStore.name + ' さん' }],
  },
  { separator: true },
  {
    label: '編集',
    items: [
      { label: 'プロファイル', icon: 'pi pi-fw pi-user', to: '/settings/profile' },
      { label: '保存フォルダ', icon: 'pi pi-fw pi-folder-open', to: '/settings/directory' },
    ],
  },
  { separator: true },
  {
    items: [
      {
        label: 'ログアウト',
        icon: 'pi pi-sign-out',
        to: '/logout',
      },
    ],
  },
])

const toggle = (event: any) => {
  menu.value.toggle(event)
}
</script>

<template>
  <div>
    <i
      class="pi pi-cog text-primary-700"
      style="font-size: 1.5rem"
      v-on:click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_menu"
    ></i>
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
  </div>
</template>
