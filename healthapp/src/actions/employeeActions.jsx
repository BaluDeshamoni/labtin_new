import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_EMPLOYEES,
  CREATE_EMPLOYEE,
} from '../constants/constants.jsx'
import * as api from '../api/index.js'

export const getEmployees = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchEmployees()

    dispatch({ type: FETCH_ALL_EMPLOYEES, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}

export const createEmployee = (Employee) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.createEmployee(Employee)

    dispatch({ type: CREATE_EMPLOYEE, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}
