import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_TESTS,
  CREATE_TEST,
} from '../constants/constants.jsx'
import * as api from '../api/index.js'

export const getTests = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchTests()

    dispatch({ type: FETCH_ALL_TESTS, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}

export const createTest = (test, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.createTest(test)

    dispatch({ type: CREATE_TEST, payload: data })
    dispatch({ type: END_LOADING })

    navigate('/dashboard/manageTest')
  } catch (error) {
    console.log(error)
  }
}
