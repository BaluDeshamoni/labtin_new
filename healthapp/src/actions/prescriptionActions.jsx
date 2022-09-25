import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_PRESCRIPTIONS,
  CREATE_PRESCRIPTION,
} from '../constants/constants.jsx'
import * as api from '../api/index.js'

export const getPrescriptions = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchPrescriptions()

    dispatch({ type: FETCH_ALL_PRESCRIPTIONS, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}

export const addPrescription = (prescription) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.addPrescription(prescription)

    dispatch({ type: CREATE_PRESCRIPTION, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}
