// import type { TTask, TCalendarParams, TTaskStatusPayload } from './types'
import { apiFetch } from '~/extensions/fetch'

export const getAllProjets = async (token: string) => {
  return await apiFetch('/api/project/all', {
    method: 'get'
    // body
  }, token)
}
export const getProject = async (id: string, token: string) => {
  return await apiFetch(`/api/project?uid=${id}`, {
    method: 'get'
  }, token)
}
