import { combineReducers } from 'redux'
import gamesReducer from './Games'
import newsReducer from './News'

const rootReducer = combineReducers({
  games: gamesReducer,
  news: newsReducer
})

export default rootReducer
