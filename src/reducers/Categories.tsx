import { ActionTypes } from '../config/Constants'

const initial = {
    categories: [],
    error: false,
    games: [],
    loading: false
}

export const selector = (state: any) => ({ ...state.categories })

const categoriesReducer = (state: any = initial, action: any) => {
    const { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_REQUEST, GET_CATEGORIES_ERROR,
      GET_CATEGORY_GAMES_ERROR, GET_CATEGORY_GAMES_REQUEST, GET_CATEGORY_GAMES_SUCCESS } = ActionTypes
    switch (action.type) {
      case GET_CATEGORIES_SUCCESS: {
        return {
          categories: action.payload.categories,
          error: false,
          loading: false
        }
      }
      case GET_CATEGORIES_REQUEST: {
        return {
          categories: [],
          error: false,
          loading: true
        }
      }
      case GET_CATEGORIES_ERROR: {
        return {
          ...state,
          error: true,
          loading: false,
        }
      }
      case GET_CATEGORY_GAMES_SUCCESS: {
        const olds = state.games
        const { games, page } = action.payload
        return {
          ...state,
          error: false,
          games: page > 0 ? [...olds, ...games] : games,
          loading: false
        }
      }
      case GET_CATEGORY_GAMES_REQUEST: {
        const { games } = state
        return {
          ...state,
          error: false,
          games,
          loading: true
        }
      }
      case GET_CATEGORY_GAMES_ERROR: {
        return {
          ...state,
          error: true,
          loading: false,
        }
      }
      default: {
        return state
      }
    }
}

export default categoriesReducer
