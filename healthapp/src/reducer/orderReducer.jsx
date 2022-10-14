import {
  FETCH_ALL_ORDERS,
  FETCH_MY_ORDERS,
  CREATE_ORDER,
} from "../constants/constants.jsx";

const orderReducer = (
  state = { isLoading: true, orders: [], myOrders: [] },
  action
) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case FETCH_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case FETCH_MY_ORDERS:
      return {
        ...state,
        myOrders: action.payload,
      };
    case CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    default:
      return state;
  }
};

export default orderReducer;
