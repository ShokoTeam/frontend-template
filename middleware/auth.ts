import { useAuthStore } from '../entities/auth/model'

export default defineNuxtRouteMiddleware(async () => {
  const { authenticated, user } = useAuthStore()

  await authenticated()

  if (!user.value) {
    return navigateTo('/auth')
  }
})
