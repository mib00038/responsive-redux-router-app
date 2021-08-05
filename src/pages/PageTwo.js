import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask } from "redux/actions/tasks"
import selectTasks from "redux/selectors/selectTasks"
import Button from "@material-ui/core/Button"
import AddIcon from '@material-ui/icons/Add'
import isEmpty from 'lodash/isEmpty'
import { v4 as uuidv4 } from 'uuid'
import TaskCheckBox from "components/TaskCheckBox"
import cx from 'classnames'
import selectDeviceSize from "redux/selectors/selectDeviceSize"

const PageTwo = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const tasks = useSelector(selectTasks)
  const { smUp } = useSelector(selectDeviceSize)

  const handleOnChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask({ id: uuidv4(), name: value, complete: false }))
    setValue('')
  }

  return (
    <section className='ml3'>
      <h2 className={cx('mb2 fw3', { 'mt2': !smUp }, {'mt5': smUp})}>Add Tasks Page</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          placeholder='Add Task'
          value={value}
          onChange={handleOnChange}
          className='mr3 pa2'
        />
        <Button variant='contained' type='submit' className='add-task-button pa1' disabled={isEmpty(value)}>
          <AddIcon className='mr2'/>
          <span>Add</span>
        </Button>
      </form>
      <ul className='list pl0'>
        {tasks.map((task, index) => (
          <li key={task.id} className='b'>
            <TaskCheckBox {...{ task }} />
            {index + 1}: {task.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PageTwo