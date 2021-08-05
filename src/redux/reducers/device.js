import produce from 'immer'
import { UPDATE_DEVICE_SIZE } from "redux/actions/types"

const device = (state = {
  size: {
    mdUp: false,
    smUp: false
  }
}, action) => {
  switch (action.type) {
    case UPDATE_DEVICE_SIZE:
      return produce(state, draft => {
        draft.size = action.size
      })
    default:
      return state
  }
}

export default device