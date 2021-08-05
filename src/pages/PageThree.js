import React from "react"
import selectTasks from "redux/selectors/selectTasks"
import { useSelector } from "react-redux"
import InfoIcon from '@material-ui/icons/Info'
import cx from "classnames"
import selectDeviceSize from "redux/selectors/selectDeviceSize"

const PageThree = () => {
  const tasks = useSelector(selectTasks)
  const { smUp } = useSelector(selectDeviceSize)

  return (
    <section className='ml3'>
      <h2 className={cx('mb2 fw3', { 'mt2': !smUp }, {'mt5': smUp})}>List Tasks Page</h2>
      <ul className='list pl0'>
        {tasks.map(({id, name, complete}, index) => (
          <li key={id} className='b flex items-center mb3'>
            <div>{index + 1}: {name}</div>
            {complete && (
              <div className='flex items-center'>
                <InfoIcon fontSize='small' htmlColor='grey' className='ml3 mr1'/>
                <div className='gray f7'>COMPLETE</div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PageThree