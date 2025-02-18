import { authKey } from "@/constants/authkey";

import { tokenDecoded } from "./actions/jwtDecode";
import {
  getFormLocalStorage,
  removeFormLocalStorage,
  setLocalStorage,
} from "./actions/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFormLocalStorage(authKey);
  if (authToken) {
    const decodedToken = tokenDecoded(authToken);
    return decodedToken;
  } else {
    return "";
  }
};

export const isUserLoggedIn = () => {
  const authToken = getFormLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFormLocalStorage(authKey);
};
