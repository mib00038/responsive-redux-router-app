import React, { useState } from "react"
import { useDispatch} from "react-redux"
import { updateTask } from "redux/actions/tasks"
import MuiCheckbox from "@material-ui/core/Checkbox"

const TaskCheckBox = ({ task: { id, name, complete }}) => {
  const [checked, setChecked] = useState(complete)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const isComplete = event.target.checked
    dispatch(updateTask({ id, name, complete: isComplete }))
    setChecked(isComplete)
  }

  return (
    <MuiCheckbox checked={checked} onChange={handleChange} />
  )
}

export default TaskCheckBox