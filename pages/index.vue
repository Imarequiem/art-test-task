<template>
  <div class="posts">
    <default-button
      @click="modalIsOpen = true"
      :title="'Создать новый пост'.toUpperCase()"
      style="margin-bottom: 20px;"
    />

    <loader />

    <posts-table :posts="posts" />

    <create-post-modal :modal-is-open="modalIsOpen" @showModal="modalIsOpen = !modalIsOpen" />

    <pagination :page-count="pageCount" @changePage="changePage" />
  </div>
</template>

<script setup lang="ts">
// не использую tailwind, тк была странная ошибка: Pre-transform error: [postcss] root.markClean is not a function
// гугл не помогает. Ответов буквально 0. И сам не решил проблему, как бы не плясал с бубном
import PostsTable from '~/components/posts/PostsTable.vue'
import CreatePostModal from '~/components/modals/CreatePostModal.vue'

import Loader from '~/components/ui/loader/Loader.vue'
import Pagination from '~/components/ui/pagination/Pagination.vue'
import DefaultButton from '~/components/ui/buttons/DefaultButton.vue'

import { PostsService } from '~/components/posts/service/post.service'

import type Post from '~/components/posts/types/post.interface'

const route = useRoute()
const router = useRouter()

const currentPage: Ref<number> = ref(Number(route.query.page) || 1)
const postsPerPage: number = 10

const modalIsOpen: Ref<boolean> = ref(false)

const pageCount = computed<number>((): number => PostsService.get().pageCount())
const posts = computed<Array<Post>>(() => PostsService.get().allPosts(currentPage.value, postsPerPage))

const changePage = (pageNumber: number) => {
  currentPage.value = pageNumber

  router.push({ query: { ...route.query, page: pageNumber } })
};

onBeforeMount(() => PostsService.get().fromServer())

onMounted(() => {
  if (!route.query.page) {
    router.replace({ query: { ...route.query, page: 1 } })
  }
});
</script>