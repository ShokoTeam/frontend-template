// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		"@nuxtjs/eslint-module",
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt'
	],
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: '',
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: './components/shared/ui'
	},
	postcss: {
		plugins: {
		  tailwindcss: {},
		  autoprefixer: {},
		}
	}
})
