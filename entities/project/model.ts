import * as ProjectApi from './api'
// import type { TCalendarParams, TTask, TTaskStatusPayload } from './types'

export const useProject = () => {
  const getAllProjets = async () => {
    return await ProjectApi.getAllProjets()
  }

  //   const updateTaskStatus = async (body: TTaskStatusPayload) => {
  //     return await TaskApi.updateTaskStatus(body)
  //   }

  //   const getCalendar = async (body: TCalendarParams) => {
  //     return await TaskApi.getCalendar(body)
  //   }

  return {
    getAllProjets
  }
}
