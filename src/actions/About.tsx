
import { ActionTypes } from '../config/Constants'
import { fetchAppInfo } from '../services/About'

const { GET_APP_INFO_SUCCESS, GET_APP_INFO_REQUEST, GET_APP_INFO_ERROR } = ActionTypes

const getAppInfoError = () => (
  {
    payload: { error: true },
    type: GET_APP_INFO_ERROR
  }
)

const getAppInfoSuccess = (about: any) => (
    {
      payload: { about },
      type: GET_APP_INFO_SUCCESS
    }
)

const getAppInfoRequest = () => (
    {
      payload: { loading: true },
      type: GET_APP_INFO_REQUEST
    }
)
export const getAppInfo = () => (
  (dispatch: any) => {
    dispatch(getAppInfoRequest())
    try {
      return fetchAppInfo()
      .then((response: any) => response.json())
      .then((response: any) => {
          dispatch(response.error ? getAppInfoError() : getAppInfoSuccess(response))
      })
      .catch(() => dispatch(getAppInfoError()))
    } catch (error) {
      return dispatch(getAppInfoError())
    }
  }
)
