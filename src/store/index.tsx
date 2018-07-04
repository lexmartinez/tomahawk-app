import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers'

const buildStore = (initial: any) => {
  const middleware = applyMiddleware(thunk, logger)
  return createStore(rootReducer, initial, middleware)
}

export default buildStore
