import { combineReducers } from 'redux'
import gamesReducer from './Games'
import newsReducer from './News'
import aboutReducer from './About'
import categoriesReducer from './Categories'

const rootReducer = combineReducers({
  about: aboutReducer,
  categories: categoriesReducer,
  games: gamesReducer,
  news: newsReducer
})

export default rootReducer
