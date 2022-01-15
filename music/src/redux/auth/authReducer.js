import {
  GET_login_LOADING,
  GET_login_SUCESS,
  GET_login_ERROR,
} from "./actionType";
const initState = {
  loading: false,
  data: [],
  error: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_login_LOADING:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case GET_login_SUCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case GET_login_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
