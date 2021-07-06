import { USER_LOGIN, USER_LOGOUT } from "./UserTypes";

export const UserLogin = (payload) => {
  return {
    type: USER_LOGIN,
    payload,
  };
};
export const UserLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
