import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_BANNERS,
  CREATE_BANNER,
  FETCH_ALL_SCROLLMENUS,
  CREATE_SCROLLMENU,
} from "../constants/constants.jsx";
import * as api from "../api/index.js";

export const getBanners = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchBanners();

    dispatch({ type: FETCH_ALL_BANNERS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createBanner = (Banner, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createBanner(Banner);

    dispatch({ type: CREATE_BANNER, payload: data });
    dispatch({ type: END_LOADING });

    navigate("/dashboard/slideShow");
  } catch (error) {
    console.log(error);
  }
};
export const getScrollmenus = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchScrollmenus();

    dispatch({ type: FETCH_ALL_SCROLLMENUS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createScrollmenu = (Scrollmenu, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createScrollmenu(Scrollmenu);

    dispatch({ type: CREATE_SCROLLMENU, payload: data });
    dispatch({ type: END_LOADING });

    navigate("/dashboard/scrollMenu");
  } catch (error) {
    console.log(error);
  }
};
