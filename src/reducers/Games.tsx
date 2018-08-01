import { ActionTypes } from '../config/Constants'

const initial = {
    error: false,
    games: [],
    loading: false
}

export const selector = (state: any) => ({ ...state.games })

const gamesReducer = (state: any = initial, action: any) => {
    const { GET_GAMES_SUCCESS, GET_GAMES_REQUEST, GET_GAMES_ERROR } = ActionTypes
    switch (action.type) {
      case GET_GAMES_SUCCESS: {
        const olds = state.games
        const { games, page } = action.payload
        return {
          error: false,
          games: page > 0 ? [...olds, ...games] : games,
          loading: false
        }
      }
      case GET_GAMES_REQUEST: {
        const { games } = state
        return {
          ...state,
          error: false,
          games,
          loading: true
        }
      }
      case GET_GAMES_ERROR: {
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

export default gamesReducer
