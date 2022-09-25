import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_PACKAGES,
  CREATE_PACKAGE,
  FETCH_ALL_DISCOUNTS,
  CREATE_DISCOUNT,
  FETCH_ALL_LOCATIONS,
  CREATE_LOCATION,
} from "../constants/constants.jsx";
import * as api from "../api/index.js";

export const getPackages = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPackages();

    dispatch({ type: FETCH_ALL_PACKAGES, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPackage = (pack, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPackage(pack);

    dispatch({ type: CREATE_PACKAGE, payload: data });
    dispatch({ type: END_LOADING });

    navigate("/dashboard/managePackage");
  } catch (error) {
    console.log(error);
  }
};

export const getDiscounts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchDiscounts();

    dispatch({ type: FETCH_ALL_DISCOUNTS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createDiscount = (pack, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createDiscount(pack);

    dispatch({ type: CREATE_DISCOUNT, payload: data });
    dispatch({ type: END_LOADING });

    navigate("/dashboard/manageDiscount");
  } catch (error) {
    console.log(error);
  }
};

export const getLocations = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchLocations();

    dispatch({ type: FETCH_ALL_LOCATIONS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createLocation = (loc, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createLocation(loc);

    dispatch({ type: CREATE_LOCATION, payload: data });
    dispatch({ type: END_LOADING });

    navigate("/dashboard/manageLocation");
  } catch (error) {
    console.log(error);
  }
};
