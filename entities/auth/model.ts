import * as UserApi from './api'
import type { TUserAuth, TLoginBody } from './types'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<TUserAuth | null>(null)

  const login = async (body: TLoginBody) => {
    const res = await UserApi.login(body)
    user.value = res.user

    return res
  }

  const logout = async () => {
    const res = await UserApi.logout()
    user.value = null

    return res
  }

  const authenticated = async () => {
    const res = await UserApi.authenticated()
    user.value = res.user || null

    return res
  }

  return {
    user: computed(() => user),
    login,
    logout,
    authenticated
  }
})