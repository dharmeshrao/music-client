import { getuserAlbumloading, getuserAlbumError,getuserAlbumSucess } from "./actionType";
export const getAlbumLoading = () => ({ type: getuserAlbumloading });
export const getAlbumSucess = (data) => ({
  type: getuserAlbumSucess,
  payload: data,
});
export const getAlbumError = (data) => ({
  type: getuserAlbumError,
  payload: data,
});
