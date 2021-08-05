import { createSelector } from 'reselect'

const selectDeviceSize = createSelector(
  state => state.device.size,
  size => size
)

export default selectDeviceSize