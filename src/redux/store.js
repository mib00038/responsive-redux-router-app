import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from 'redux/reducers'
import thunk from 'redux-thunk'

const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default reduxStore