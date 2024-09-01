<template>
  <div v-if="modalIsOpen" class="modal-overlay">
    <div class="modal-container">
      <h2 class="modal-title">
        Создать новый пост
      </h2>

      <form @submit.prevent="PostsService.set().setNewPost(form)">
        <div class="form-group">
          <label for="title" class="form-label">
            Заголовок
          </label>
          <form-input v-model="form.title" id="title" />
        </div>

        <div class="form-group">
          <label for="body" class="form-label">
            Контент
          </label>
          <textarea
            v-model="form.body"
            id="body"
            class="form-textarea"
            required
          />
        </div>

        <div class="form-actions">
          <cancel-button @click="handleCancel" />
          <create-button @click="submitForm" />
        </div>

      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostsService } from '../posts/service/post.service'

import CancelButton from '../ui/buttons/CancelButton.vue'
import CreateButton from '../ui/buttons/CreateButton.vue'
import FormInput from '../ui/inputs/FormInput.vue';

defineProps({
  modalIsOpen: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['showModal'])

const form = reactive({
  title:  '',
  body : '',
  id: 1,
  userId: 1,
})

const submitForm = async () => {
  try {
    await PostsService.set().setNewPost(form)
    resetForm();

    emit('showModal')
  } catch (error) {
    console.error('Ошибка при создании поста:', error)
  }
};

const handleCancel = () => {
  resetForm()

  emit('showModal')
};

const resetForm = () => {
  form.title = ''
  form.body = ''
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.modal-container {
  background-color: #ffffff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 384px;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
}

.form-input,
.form-textarea {
  margin-top: 4px;
  display: block;
  width: calc(100% - 16px);
  border-radius: 4px;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 8px;
}

.form-textarea {
  resize: vertical;
  max-height: 400px;
  min-height: 49px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}
</style>