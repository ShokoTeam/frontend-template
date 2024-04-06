import { useAuthStore } from '../entities/auth/model'

export default defineNuxtRouteMiddleware(() => {
  const { token } = useAuthStore()

  // await authenticated()
  // console.log(token.value, 'TOKEN IN MIDDLEWARE')

  if (!token.value) {
    return navigateTo('/login')
  }
})
