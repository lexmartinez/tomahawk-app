import { ActionTypes } from '../config/Constants'

const initial = {
    error: false,
    loading: false,
    news: []
}

export const selector = (state: any) => ({ ...state.news })

const newsReducer = (state: any = initial, action: any) => {
    const { GET_NEWS_SUCCESS, GET_NEWS_REQUEST, GET_NEWS_ERROR } = ActionTypes
    switch (action.type) {
      case GET_NEWS_SUCCESS: {
        const olds = state.news
        const { news, page } = action.payload
        return {
          error: false,
          loading: false,
          news: page > 0 ? [...olds, ...news] : news
        }
      }
      case GET_NEWS_REQUEST: {
        const { news } = state
        return {
          error: false,
          loading: true,
          news
        }
      }
      case GET_NEWS_ERROR: {
        return {
          ...state,
          error: true,
          loading: false
        }
      }
      default: {
        return state
      }
    }
}

export default newsReducer
