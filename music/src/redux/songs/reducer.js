import {
    GET_DATA_LOADING,
    GET_DATA_ERROR,
    GET_DATA_SUCESS,
  } from "./actionType";
  const initState = {
    loading: false,
    system:false,
    data: [],
    error: false,
  };
  
  export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_DATA_LOADING:
        return {
          ...state,
          error:false,
          loading: true,
          system: false,
        };
      case GET_DATA_SUCESS:
        return {
          ...state,
          loading: false,
          system: true,
          data: payload,
        };
      case GET_DATA_ERROR:
        return {
          ...state,
          loading: false,
          system: false,
          error: true,
        };
      default:
        return { ...state };
    }
  };