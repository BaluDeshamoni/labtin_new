import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_RAD_TESTS,
  CREATE_RAD_TEST,
} from '../constants/constants.jsx'
import * as api from '../api/index.js'

export const getRadTests = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchRadTests()

    dispatch({ type: FETCH_ALL_RAD_TESTS, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}

export const createRadTest = (RadTest, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.createRadTest(RadTest)

    dispatch({ type: CREATE_RAD_TEST, payload: data })
    dispatch({ type: END_LOADING })

    navigate('/dashboard/manageRadTests')
  } catch (error) {
    console.log(error)
  }
}
