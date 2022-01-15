import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer } from "./songs/reducer";
import {authReducer} from './auth/authReducer'
import thunk from "redux-thunk";
import { userReducer } from "./userAlbums/userReducer";
const newREducer = combineReducers({
  auth: authReducer,
  songs: reducer,
  userAlbum: userReducer
})
export const store = createStore(
  newREducer,compose(applyMiddleware(thunk))
);