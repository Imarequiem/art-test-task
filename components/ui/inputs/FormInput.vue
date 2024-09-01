<template>
  <input
    v-model="model"
    type="text"
    class="form-input"
    required
  />
</template>

<script setup lang="ts">
const model = defineModel()
</script>