import { ActionTypes, AppInfo } from '../config/Constants'

const initial = {
    about: {},
    error: false,
    loading: false
}

export const selector = (state: any) => ({ ...state.about })

const aboutReducer = (state: any = initial, action: any) => {
    const { GET_APP_INFO_SUCCESS, GET_APP_INFO_REQUEST, GET_APP_INFO_ERROR } = ActionTypes
    switch (action.type) {
      case GET_APP_INFO_SUCCESS: {
        return {
          about: { ... AppInfo, author: action.payload.about },
          error: false,
          loading: false
        }
      }
      case GET_APP_INFO_REQUEST: {
        return {
          about: {},
          error: false,
          loading: true
        }
      }
      case GET_APP_INFO_ERROR: {
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

export default aboutReducer
