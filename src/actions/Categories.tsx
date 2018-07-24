
import { ActionTypes } from '../config/Constants'
import { fetchCategories, fetchGames } from '../services/Categories'

const { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_REQUEST, GET_CATEGORIES_ERROR,
  GET_CATEGORY_GAMES_ERROR, GET_CATEGORY_GAMES_REQUEST, GET_CATEGORY_GAMES_SUCCESS } = ActionTypes

const getCategoriesError = () => (
  {
    payload: { error: true },
    type: GET_CATEGORIES_ERROR
  }
)

const getCategoriesSuccess = (categories: any) => (
    {
      payload: { categories },
      type: GET_CATEGORIES_SUCCESS
    }
)

const getCategoriesRequest = () => (
    {
      payload: { loading: true },
      type: GET_CATEGORIES_REQUEST
    }
)

const getGamesError = () => (
  {
    payload: { error: true },
    type: GET_CATEGORY_GAMES_ERROR
  }
)

const getGamesSuccess = (games: any, page: number) => (
    {
      payload: { games, page },
      type: GET_CATEGORY_GAMES_SUCCESS
    }
)

const getGamesRequest = () => (
    {
      payload: { loading: true },
      type: GET_CATEGORY_GAMES_REQUEST
    }
)

export const getCategoryGames = (category: number, page: number) => (
  (dispatch: any) => {
    dispatch(getGamesRequest())
    try {
      return fetchGames(category, page)
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

export const getCategories = () => (
    (dispatch: any) => {
      dispatch(getCategoriesRequest())
      try {
        return fetchCategories()
        .then((response) => response.json())
        .then((response) => {
            dispatch(response.error ? getCategoriesError() : getCategoriesSuccess(response))
        })
        .catch(() => dispatch(getCategoriesError()))
      } catch (error) {
        return dispatch(getCategoriesError())
      }
    }
)
