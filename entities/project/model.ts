import { useAuthStore } from '../auth/model'
import * as ProjectApi from './api'
// import type { TCalendarParams, TTask, TTaskStatusPayload } from './types'

export const useProject = () => {
  const { token } = useAuthStore()
  const getAllProjets = async () => {
    return await ProjectApi.getAllProjets(token.value)
  }
  const getProject = async (uid: string) => {
    return await ProjectApi.getProject(uid, token.value)
  }

  //   const updateTaskStatus = async (body: TTaskStatusPayload) => {
  //     return await TaskApi.updateTaskStatus(body)
  //   }

  //   const getCalendar = async (body: TCalendarParams) => {
  //     return await TaskApi.getCalendar(body)
  //   }

  return {
    getAllProjets,
    getProject
  }
}
