
import { ActionTypes } from '../config/Constants'
import { fetchNews } from '../services/News'

const { GET_NEWS_SUCCESS, GET_NEWS_REQUEST, GET_NEWS_ERROR } = ActionTypes

const getNewsError = () => (
  {
    payload: { error: true },
    type: GET_NEWS_ERROR
  }
)

const getNewsSuccess = (news: any, page: number) => (
    {
      payload: { news, page },
      type: GET_NEWS_SUCCESS
    }
)

const getNewsRequest = () => (
    {
      payload: { loading: true },
      type: GET_NEWS_REQUEST
    }
)
export const getNews = (page: number) => (
  (dispatch: any) => {
    dispatch(getNewsRequest())
    try {
      return fetchNews(page)
      .then((response) => response.json())
      .then((response) => {
          dispatch(response.error ? getNewsError() : getNewsSuccess(response, page))
      })
      .catch(() => dispatch(getNewsError()))
    } catch (error) {
      return dispatch(getNewsError())
    }
  }
)
