import type { TLoginBody, TUserAuth } from './types'
import { apiFetch } from '~/extensions/fetch'

export const login = async (body: TLoginBody): Promise<string> => {
  return await apiFetch('/api/auth/login', {
    method: 'post',
    body
  }) as Promise<string>
}

export const register = async (body: TLoginBody): Promise<string> => {
  return await apiFetch('/api/auth/register', {
    method: 'post',
    body
  }) as Promise<string>
}
export const logout = async (): Promise<{ status: boolean }> => {
  return await apiFetch('/api/auth/logout', {
    method: 'delete'
  }) as Promise<{ status: boolean }>
}

export const authenticated = async (): Promise<{ user: TUserAuth }> => {
  return await apiFetch('/api/user/authenticated') as Promise<{ user: TUserAuth }>
}
