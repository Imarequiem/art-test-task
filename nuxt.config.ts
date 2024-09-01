// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  vite: {
    server: {
      hmr: {
        clientPort: 3000
      },
    },
  },

  modules: ['@pinia/nuxt'],
})