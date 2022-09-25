import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_CUSTOMERS,
  CREATE_CUSTOMER,
} from '../constants/constants.jsx'
import * as api from '../api/index.js'

export const getCustomers = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchCustomers()

    dispatch({ type: FETCH_ALL_CUSTOMERS, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}

export const createCustomer = (customer) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.createCustomer(customer)

    dispatch({ type: CREATE_CUSTOMER, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}
