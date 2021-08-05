import { combineReducers } from 'redux'
import { enableAllPlugins } from 'immer'
import tasks from "redux/reducers/tasks"
import device from "redux/reducers/device"

enableAllPlugins()

export default combineReducers({
  tasks,
  device
})