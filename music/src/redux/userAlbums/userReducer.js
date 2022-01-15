import {
    getuserAlbumloading,
    getuserAlbumSucess,
    getuserAlbumError,
  } from "./actionType";
  const initState = {
    loading: false,
    data: [],
    error: false,
  };
  
  export const userReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case getuserAlbumloading:
        return {
          ...state,
          error: false,
          loading: true,
        };
      case getuserAlbumSucess:
        return {
          ...state,
          loading: false,
          data: payload,
        };
      case getuserAlbumError:
        return {
          ...state,
          loading: false,
          error: true,
        };
      default:
        return { ...state };
    }
  };
  