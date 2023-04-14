<script setup lang="ts">
import appInfo from '@/assets/appInfo.json'

const appSet = computed(() => {
  return appInfo
})

interface Props {
  isLoggedIn: boolean
}
defineProps<Props>()
</script>

<template>
  <NuxtLink to="/">
    <Avatar
      v-bind:label="appSet.logo"
      class="mr-2 text-white"
      v-bind:class="{ 'bg-bluegray-700': !isLoggedIn, 'bg-primary-600': isLoggedIn }"
      size="large"
    />
  </NuxtLink>
  <div class="my-1">
    <span
      class="text-3xl vertical-align-middle"
      v-bind:class="{ 'text-bluegray-600': !isLoggedIn, 'text-primary-700': isLoggedIn }"
    >
      {{ appSet.name }}
    </span>
  </div>
</template>
