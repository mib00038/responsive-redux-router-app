import { ADD_TASK, UPDATE_TASK } from "redux/actions/types"

export const addTask = task => ({
  type: ADD_TASK,
  task
})

export const updateTask = task => ({
  type: UPDATE_TASK,
  task
})
