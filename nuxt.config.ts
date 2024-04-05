export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/image'
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/shared/ui'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  router: {
    options: {
      linkActiveClass: 'bg-red-300 block w-full',
      linkExactActiveClass: 'bg-green-400 block w-full'
    }
  }
})
