import {
  START_LOADING,
  END_LOADING,
  CREATE_ORDER,
  FETCH_ALL_ORDERS,
  FETCH_MY_ORDERS,
} from "../constants/constants.jsx";
import * as api from "../api/index.js";

export const getOrders = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchOrders(config);

    dispatch({ type: FETCH_ALL_ORDERS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getMyOrders = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchMyOrders(config);

    dispatch({ type: FETCH_MY_ORDERS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = (order, navigate) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    dispatch({ type: START_LOADING });
    const { data } = await api.createOrder(order, config);

    dispatch({ type: CREATE_ORDER, payload: data });
    dispatch({ type: END_LOADING });

    navigate("/MyBookings");
  } catch (error) {
    console.log(error);
  }
};

export const uploadReports = (data) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await api.uploadReports(data, config);
  } catch (error) {
    console.log(error);
  }
};
export const changeStatus = (data) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await api.changeStatus(data, config);
  } catch (error) {
    console.log(error);
  }
};
