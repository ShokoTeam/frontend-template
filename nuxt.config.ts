export default defineNuxtConfig({
  ssr: false,
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
      linkActiveClass: 'block w-full text-accent',
      linkExactActiveClass: 'block w-full text-accent'
    }
  }
})
