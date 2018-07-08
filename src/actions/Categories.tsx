
import { ActionTypes } from '../config/Constants'
import { fetchCategories } from '../services/Categories'

const { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_REQUEST, GET_CATEGORIES_ERROR } = ActionTypes

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
