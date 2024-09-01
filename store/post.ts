import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

import axios from 'axios'

import type Post from '~/components/posts/types/post.interface'

export const usePostsStore = defineStore('posts', () => {
  const postUrl = 'https://jsonplaceholder.typicode.com/posts'

  const loading: Ref<Boolean> = ref(false)

  const allPosts:Ref<Array<Post>> = ref([])

  const fromServer = async () => {
    loading.value = true

    try {
      const response = await axios.get<Post[]>(postUrl)

      allPosts.value = response.data

      return response.data
    } catch (error) {
      console.error(error)
    } finally {
      setTimeout(() => loading.value = false, 700) //TimeOut для наглядности
    }
  }

  const createPost = async (newPost: Post) => {
    loading.value = true
    try {
      const response = await axios.post(postUrl, {
        title: newPost.title,
        body: newPost.body,
        userId: 1
      })

      allPosts.value.push(response.data)
    } catch (error) {
      console.error('Ошибка при создании поста:', error)
    } finally {
      setTimeout(() => loading.value = false, 700) //TimeOut для наглядности
    }
  }

  return {
    fromServer,
    allPosts,
    loading,
    createPost
  }
})