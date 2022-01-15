import { GET_DATA_SUCESS } from "../songs/actionType";
import { GET_login_LOADING, GET_login_SUCESS } from "./actionType";
export const getDataLoading = () => ({ type: GET_login_LOADING });
export const getDataSucess = (data) => ({
  type: GET_DATA_SUCESS,
  payload: data,
});
export const getDataError = (data) => ({
  type: GET_login_SUCESS,
  payload: data,
});
