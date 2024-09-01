<template>
  <table class="post-table">
    <thead>
      <tr>
        <th class="post-table__head-el" @click="changeIdSort" >
          ID
        </th>
        <th class="post-table__head-el">
          Title
        </th>
        <th class="post-table__head-el">
          Body
        </th>
      </tr>
    </thead>

    <tbody class="post-table__body">
      <tr
        v-for="(post, index) in posts"
        :key="index"
        class=""
      >
        <td class="post-table__body-el">
          {{ post.id }}
        </td>
        <td class="post-table__body-el">
          {{ post.title }}
        </td>
        <td class="post-table__body-el">
          {{ post.body }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { PostsService } from './service/post.service'

import type Post from './types/post.interface'

defineProps<{
  posts: Array<Post>
}>()

const toSmallestId: Ref<boolean> = ref(true)
const changeIdSort = () => {
  toSmallestId.value = !toSmallestId.value

  PostsService.get().sortedPosts('id', toSmallestId.value)
}
</script>

<style scoped>
.post-table {
  width: 100%;
  border-collapse: collapse;
}

.post-table__head-el,
.post-table__body-el {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.post-table__head-el {
  background-color: #eaeaea;
  font-weight: bold;
  text-transform: uppercase;
}

.post-table__head-el:hover:first-child {
  background-color: #cdcdcd;
  cursor: pointer;
}

.post-table__body-el {
  width: auto;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

tr:hover .post-table__body-el {
  background-color: #f9f9f9;
}

.post-table__body tr .post-table__body-el {
  position: relative;
}

.post-table__body tr:nth-child(even) {
  background-color: #f0f0f0;
}

.post-table__body tr .post-table__body-el:hover {
  overflow: auto;
  white-space: normal;
  max-height: 150px;
}

.post-table__body tr .post-table__body-el::-webkit-scrollbar {
  height: 5px;
}

.post-table__body tr .post-table__body-el::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}

.post-table__body tr .post-table__body-el::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>