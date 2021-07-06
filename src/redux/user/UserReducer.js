import {createStore} from "redux";
import { USER_LOGIN, USER_LOGOUT } from "./UserTypes";
let initialState = {
  user: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user:action.payload,
      };
      break;
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const store =createStore(userReducer ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

