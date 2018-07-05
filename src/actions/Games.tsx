
import { ActionTypes } from '../config/Constants'
import { fetchGames } from '../services'

const { GET_GAMES_SUCCESS, GET_GAMES_REQUEST, GET_GAMES_ERROR } = ActionTypes

const getGamesError = () => (
  {
    payload: { error: true },
    type: GET_GAMES_ERROR
  }
)

const getGamesSuccess = (games: any) => (
    {
      payload: { games },
      type: GET_GAMES_SUCCESS
    }
)

const getGamesRequest = () => (
    {
      payload: { loading: true },
      type: GET_GAMES_REQUEST
    }
)
export const getGames = () => (
    (dispatch: any) => {
      dispatch(getGamesRequest())
      return fetchGames()
        .then((games: any) => dispatch(getGamesSuccess(games)))
        .catch(() => dispatch(getGamesError()))
    }
)
