<script setup lang="ts">
interface Props {
  appLogo: string
  appName: string

  isLoggedIn: boolean
}
defineProps<Props>()
</script>

<template>
  <NuxtLink to="/">
    <Avatar
      v-bind:label="appLogo"
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
      {{ appName }}
    </span>
  </div>
</template>
