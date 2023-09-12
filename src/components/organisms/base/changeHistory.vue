<script setup lang="ts">
import histories from '@/assets/releaseNote.json'

const releases = computed(() => {
  const dist = histories.map((e) => {
    e.versionInfo = `version ${e.version} (released ${e.releasedate})`
    return e
  })
  return dist
})
</script>

<template>
  <p class="text-2xl text-bluegray-600 underline">リリースノート</p>
  <div>
    <Card v-for="release in releases" v-bind:key="release.version" class="m-3 p-1 border-round-lg">
      <template #title> {{ release.title }} </template>
      <template #subtitle> {{ release.versionInfo }} </template>
      <template #content>
        <p>{{ release.note }}</p>
      </template>
    </Card>
  </div>
</template>
