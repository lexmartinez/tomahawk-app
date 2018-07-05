import { combineReducers } from 'redux'
import gamesReducer from './Games'
import newsReducer from './News'
import categoriesReducer from './Categories'

const rootReducer = combineReducers({
  categories: categoriesReducer,
  games: gamesReducer,
  news: newsReducer
})

export default rootReducer
