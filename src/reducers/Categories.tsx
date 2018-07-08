import { ActionTypes } from '../config/Constants'

const initial = {
    categories: [],
    error: false,
    loading: false
}

export const selector = (state: any) => ({ ...state.categories })

const categoriesReducer = (state: any = initial, action: any) => {
    const { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_REQUEST, GET_CATEGORIES_ERROR } = ActionTypes
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
      default: {
        return state
      }
    }
}

export default categoriesReducer
