import {
  FETCH_ALL_CUSTOMERS,
  CREATE_CUSTOMER,
} from '../constants/constants.jsx'

const customerReducer = (
  state = { isLoading: true, customers: [] },
  action
) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'END_LOADING':
      return { ...state, isLoading: false }
    case FETCH_ALL_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      }
    case CREATE_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload],
      }
    default:
      return state
  }
}
export default customerReducer
