import { usePostsStore } from "~/store/post";

import type Post from "../types/post.interface"

class PostsService {
  private constructor() {}

  public static get() {
    return {
      fromServer: async () => {
        return await usePostsStore().fromServer()
      },

      allPosts: (currentPage: number, postsPerPage: number = 10): Array<Post> => {
        const start = (currentPage - 1) * postsPerPage;
        const end = start + postsPerPage;
        return usePostsStore().allPosts.slice(start, end)
      },

      pageCount: (items: number = 10): number => {
        return Math.ceil(usePostsStore().allPosts.length / items)
      },

      sortedPosts: <Key extends keyof Post>(key: Key, toSmallest: boolean = true) => {
        usePostsStore().allPosts.sort((a: Post, b: Post) => {
          if (toSmallest) {
            return a[key] > b[key] ? 1 : -1
          } else {
            return a[key] < b[key] ? 1 : -1
          }
        })
      }
    }
  }

  public static set() {
    return {
      setNewPost: async (newPost: Post) => {
        usePostsStore().createPost(newPost)
      }
    }
  }

}

export { PostsService };