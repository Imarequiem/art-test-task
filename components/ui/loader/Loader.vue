<template>
  <div v-if="usePostsStore().loading" class="loading-overlay">
    <svg class="loading-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a8 8 0 018-8v0a8 8 0 018 8v0a8 8 0 01-8 8v0a8 8 0 01-8-8z" />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LoaderComponent'
})

import { usePostsStore } from '~/store/post'
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
}

.loading-spinner {
  animation: spin 1s linear infinite;
  height: 40px;
  width: 40px;
  color: #3b82f6;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>