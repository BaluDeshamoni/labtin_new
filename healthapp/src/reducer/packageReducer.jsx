import {
  FETCH_ALL_PACKAGES,
  CREATE_PACKAGE,
  FETCH_ALL_DISCOUNTS,
  CREATE_DISCOUNT,
  FETCH_ALL_LOCATIONS,
  CREATE_LOCATION,
} from '../constants/constants.jsx'

const packageReducer = (
  state = { isLoading: true, packageList: [] },
  action
) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'END_LOADING':
      return { ...state, isLoading: false }
    case FETCH_ALL_PACKAGES:
      return {
        ...state,
        packageList: action.payload,
      }
    case CREATE_PACKAGE:
      return {
        ...state,
        packageList: [...state.packageList, action.payload],
      }
    default:
      return state
  }
}
const discountReducer = (
  state = { isLoading: true, discountList: [] },
  action
) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'END_LOADING':
      return { ...state, isLoading: false }
    case FETCH_ALL_DISCOUNTS:
      return {
        ...state,
        discountList: action.payload,
      }
    case CREATE_DISCOUNT:
      return {
        ...state,
        discountList: [...state.discountList, action.payload],
      }
    default:
      return state
  }
}
const locationReducer = (
  state = { isLoading: true, locationList: [] },
  action
) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'END_LOADING':
      return { ...state, isLoading: false }
    case FETCH_ALL_LOCATIONS:
      return {
        ...state,
        locationList: action.payload,
      }
    case CREATE_LOCATION:
      return {
        ...state,
        locationList: [...state.locationList, action.payload],
      }
    default:
      return state
  }
}
export { packageReducer, discountReducer,locationReducer }
