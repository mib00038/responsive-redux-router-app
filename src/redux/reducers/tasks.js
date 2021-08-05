import produce from 'immer'
import { ADD_TASK, UPDATE_TASK } from "redux/actions/types"

const tasks = (state = {
  list: []
}, action) => {
  switch (action.type) {
    case ADD_TASK:
      return produce(state, draft => {
        draft.list.push(action.task)
      })
    case UPDATE_TASK:
      return produce(state, draft => {
        draft.list.forEach(task => {
          if (task.id === action.task.id) {
            task.complete = action.task.complete
          }
        })
      })
    default:
      return state
  }
}

export default tasks