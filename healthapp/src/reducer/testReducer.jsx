import { FETCH_ALL_TESTS, CREATE_TEST } from '../constants/constants.jsx'

const testReducer = (state = { isLoading: true, testList: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'END_LOADING':
      return { ...state, isLoading: false }
    case FETCH_ALL_TESTS:
      return {
        ...state,
        testList: action.payload,
      }
    case CREATE_TEST:
      return {
        ...state,
        testList: [...state.testList, action.payload],
      }
    default:
      return state
  }
}
export default testReducer
