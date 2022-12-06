import {
  CREATE_LAB,
  FETCH_ALL_LABS,
  FETCH_ALL_RAD_LABS,
  CREATE_RAD_LAB,
} from "../constants/constants.jsx";

const labReducer = (state = { isLoading: true, labList: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case FETCH_ALL_LABS:
      return {
        ...state,
        labList: action.payload,
      };
    case CREATE_LAB:
      return {
        ...state,
        labList: [...state.labList, action.payload],
      };
    default:
      return state;
  }
};

const radLabReducer = (state = { isLoading: true, radLabList: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case FETCH_ALL_RAD_LABS:
      return {
        ...state,
        radLabList: action.payload,
      };
    case CREATE_RAD_LAB:
      return {
        ...state,
        radLabList: [...state.radLabList, action.payload],
      };
    default:
      return state;
  }
};

const filterReducer = (state = { filter: "Hyderabad" }, action) => {
  switch (action.type) {
    case "FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export { labReducer, radLabReducer, filterReducer };
