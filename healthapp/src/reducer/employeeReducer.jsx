import {
  FETCH_ALL_EMPLOYEES,
  CREATE_EMPLOYEE,
} from '../constants/constants.jsx'

const employeeReducer = (
  state = { isLoading: true, Employees: [] },
  action
) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'END_LOADING':
      return { ...state, isLoading: false }
    case FETCH_ALL_EMPLOYEES:
      return {
        ...state,
        Employees: action.payload,
      }
    case CREATE_EMPLOYEE:
      return {
        ...state,
        Employees: [...state.Employees, action.payload],
      }
    default:
      return state
  }
}
export default employeeReducer
