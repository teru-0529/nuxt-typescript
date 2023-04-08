<script setup lang="ts">
interface Props {
  appLogo: string
  appName: string
}
defineProps<Props>()
</script>

<template>
  <NuxtLink to="/">
    <Avatar v-bind:label="appLogo" class="mr-2 text-white bg-bluegray-700" size="large" />
  </NuxtLink>
  <div class="my-1">
    <span class="text-3xl text-bluegray-600 vertical-align-middle">{{ appName }}</span>
  </div>
</template>
