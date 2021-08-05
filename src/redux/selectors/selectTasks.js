import { createSelector } from 'reselect'

const selectTasks = createSelector(
  state => state.tasks.list,
  list => list
)

export default selectTasks