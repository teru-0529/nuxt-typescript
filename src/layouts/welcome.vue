<script setup lang="ts">
import welAppBar from '@/components/welcome/welAppBar.vue'
import welAbout from '@/components/welcome/welAbout.vue'
import befLoginFooter from '@/components/beforeLogin/beforeLoginFooter.vue'
</script>

<template>
  <div class="flex">
    <div class="flex-initial flex border-1 border-dotted border-pink-200 p-2">
      <wel-app-bar />
    </div>
  </div>
  <div class="flex">
    <div class="flex-initial flex border-1 border-dotted border-pink-200 m-2 p-2 w-24rem">
      <wel-about />
    </div>
  </div>
  <befLoginFooter />
</template>
