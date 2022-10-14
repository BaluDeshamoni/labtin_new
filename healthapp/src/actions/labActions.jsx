import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_LABS,
  CREATE_LAB,
  FETCH_ALL_RAD_LABS,
  CREATE_RAD_LAB,
} from "../constants/constants.jsx";
import * as api from "../api/index.js";

export const getLabs = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchLabs();

    dispatch({ type: FETCH_ALL_LABS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createLab = (lab, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createLab(lab);

    dispatch({ type: CREATE_LAB, payload: data });
    dispatch({ type: END_LOADING });

    navigate("/dashboard/managePartnerLabs");
  } catch (error) {
    console.log(error);
  }
};

export const getRadLabs = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchRadLabs();

    dispatch({ type: FETCH_ALL_RAD_LABS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createRadLab = (radLab, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createRadLab(radLab);

    dispatch({ type: CREATE_RAD_LAB, payload: data });
    dispatch({ type: END_LOADING });

    navigate("/dashboard/manageRadPartners");
  } catch (error) {
    console.log(error);
  }
};

export const editPackage = (pack, navigate) => async (dispatch) => {
  try {
    await api.editPackage(pack);
    navigate("/dashboard/LabsAndPackages", {
      state: { _id: pack.lab, title: pack.name },
    });
  } catch (error) {
    console.log(error);
  }
};
export const editTest = (test, navigate) => async (dispatch) => {
  try {
    await api.editTest(test);
    navigate("/dashboard/LabsAndPackages", {
      state: { _id: test.lab, title: test.name, type: true },
    });
  } catch (error) {
    console.log(error);
  }
};
