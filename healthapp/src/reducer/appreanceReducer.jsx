import {
  FETCH_ALL_BANNERS,
  CREATE_BANNER,
  FETCH_ALL_SCROLLMENUS,
  CREATE_SCROLLMENU,
} from "../constants/constants.jsx";

const bannerReducer = (state = { isLoading: true, bannerList: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case FETCH_ALL_BANNERS:
      return {
        ...state,
        bannerList: action.payload,
      };
    case CREATE_BANNER:
      return {
        ...state,
        bannerList: [...state.bannerList, action.payload],
      };
    default:
      return state;
  }
};
const scrollmenuReducer = (
  state = { isLoading: true, scrollmenuList: [] },
  action
) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case FETCH_ALL_SCROLLMENUS:
      return {
        ...state,
        scrollmenuList: action.payload,
      };
    case CREATE_SCROLLMENU:
      return {
        ...state,
        scrollmenuList: [...state.scrollmenuList, action.payload],
      };
    default:
      return state;
  }
};
export { bannerReducer, scrollmenuReducer };
