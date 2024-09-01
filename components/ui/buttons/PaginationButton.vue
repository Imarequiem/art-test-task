<template>
  <button class="pagination-button">
    {{ count }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  count: { type: Number, required: true }
})
</script>

<style scoped>
.pagination-button {
  cursor: pointer;
  border: transparent;
  border-radius: 20%;
  width: 35px;
  height: 35px;
}
.pagination-button:hover {
  background-color: #d0d0d0;
}
</style>