import {
  FETCH_ALL_RAD_TESTS,
  CREATE_RAD_TEST,
} from '../constants/constants.jsx'

const radTestReducer = (
  state = { isLoading: true, radTestList: [] },
  action
) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'END_LOADING':
      return { ...state, isLoading: false }
    case FETCH_ALL_RAD_TESTS:
      return {
        ...state,
        radTestList: action.payload,
      }
    case CREATE_RAD_TEST:
      return {
        ...state,
        radTestList: [...state.radTestList, action.payload],
      }
    default:
      return state
  }
}
export default radTestReducer
