<template>
  <button class="create-button">{{ title || 'Нажми' }}</button>
</template>

<script setup lang="ts">
defineProps({
  title: String
})
</script>

<style scoped>
.create-button {
  background-color: #1d4ed8;
  color: #ffffff;
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.create-button:hover {
  background-color: #2563eb;
}

.create-button:active {
  background-color: #1e40af;
}

.create-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.4);
}

.create-button:disabled {
  background-color: #d1d5db;
  cursor: not-allowed;
  opacity: 0.6;
}
</style>