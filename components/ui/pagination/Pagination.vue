<template>
  <ul class="pagination">
    <li
      v-for="(count, index) in pageCount"
      :key="index"
      class="pagination-item"
    >
      <pagination-button :count="count" @click="$emit('changePage', count)" />
    </li>
  </ul>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PaginationComponent'
})

import PaginationButton from '../buttons/PaginationButton.vue'

defineProps<{
  pageCount: number,
}>()
</script>

<style scoped>
.pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.pagination-item {
  display: block;
  margin: 2px;
}
</style>
