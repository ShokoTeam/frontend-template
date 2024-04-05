// import type { TTask, TCalendarParams, TTaskStatusPayload } from './types'
import { apiFetch } from '~/extensions/fetch'

export const getAllProjets = async () => {
  return await apiFetch('/api/project/all', {
    method: 'get'
    // body
  })
}

// export const getCalendar = async (body: TCalendarParams) => {
//   return await apiFetch('/api/admin/tasks/calendar', {
//     method: 'post',
//     body
//   })
// }
