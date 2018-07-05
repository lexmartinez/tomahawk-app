
import { ActionTypes } from '../config/Constants'
import { fetchCategories } from '../services'

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
      return fetchCategories()
        .then((categories: any) => dispatch(getCategoriesSuccess(categories)))
        .catch(() => dispatch(getCategoriesError()))
    }
)
