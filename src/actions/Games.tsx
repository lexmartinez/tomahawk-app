
import { ActionTypes } from '../config/Constants'
import { fetchGames } from '../services/Games'

const { GET_GAMES_SUCCESS, GET_GAMES_REQUEST, GET_GAMES_ERROR } = ActionTypes

const getGamesError = () => (
  {
    payload: { error: true },
    type: GET_GAMES_ERROR
  }
)

const getGamesSuccess = (games: any, page: number) => (
    {
      payload: { games, page },
      type: GET_GAMES_SUCCESS
    }
)

const getGamesRequest = () => (
    {
      payload: { loading: true },
      type: GET_GAMES_REQUEST
    }
)

export const getGames = (query: string, page: number) => (
  (dispatch: any) => {
    dispatch(getGamesRequest())
    try {
      return fetchGames(query, page)
      .then((response: any) => response.json())
      .then((response: any) => {
          dispatch(response.error ? getGamesError() : getGamesSuccess(response, page))
      })
      .catch(() => dispatch(getGamesError()))
    } catch (error) {
      return dispatch(getGamesError())
    }
  }
)
