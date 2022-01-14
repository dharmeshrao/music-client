import {
    GET_DATA_ERROR,
    GET_DATA_LOADING,
    GET_DATA_SUCESS,
  } from "./actionType";
  export const getDataLoading = () => ({ type: GET_DATA_LOADING });
  export const getDataSucess = (data) => ({
    type: GET_DATA_SUCESS,
    payload: data,
  });
  export const getDataError = (data) => ({ type: GET_DATA_ERROR, payload: data });