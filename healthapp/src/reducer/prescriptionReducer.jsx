import {
  FETCH_ALL_PRESCRIPTIONS,
  CREATE_PRESCRIPTION,
} from '../constants/constants.jsx'

const prescriptionReducer = (
  state = { isLoading: true, prescriptions: [] },
  action
) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'END_LOADING':
      return { ...state, isLoading: false }
    case FETCH_ALL_PRESCRIPTIONS:
      return {
        ...state,
        prescriptions: action.payload,
      }
    case CREATE_PRESCRIPTION:
      return {
        ...state,
        prescriptions: [...state.prescriptions, action.payload],
      }
    default:
      return state
  }
}
export default prescriptionReducer
