import { useLocalStorage } from '@vueuse/core'
import * as UserApi from './api'
import type { TLoginBody, TRegisterBody } from './types'

export const useAuthStore = defineStore('auth', () => {
  const DEFAULT_STATE = ''
  const token = useLocalStorage('token', DEFAULT_STATE)

  const login = async (body: TLoginBody) => {
    const res = await UserApi.login(body)
    token.value = res

    return res
  }
  const register = async (body: TRegisterBody) => {
    const res = await UserApi.register(body)
    token.value = res

    return res
  }

  //   const logout = async () => {
  //     const res = await UserApi.logout()
  //     // user.value = null

  //     return res
  //   }

  return {
    token: computed(() => token),
    login,
    register
    // logout,
  }
})
