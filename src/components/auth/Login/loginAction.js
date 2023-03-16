import authTokenRequest from "../../../services/auth_request";
import { LOGIN_AUTH, LOGIN_ERROR } from "../../../constants/actionTypes";
import jwt from "jsonwebtoken";
import register_service from "../../../services/auth.service";

export const LoginUser = (usermodel) => async (dispatch) => {
  try {
    const result = await register_service.login(usermodel);

    var jwt_token = result.data.token;

    var cur_user = jwt.decode(jwt_token);
    console.log("Verified login:", cur_user);
    console.log("Verified.roles:", cur_user.roles);

    dispatch({ type: LOGIN_AUTH, payload: cur_user });
    localStorage.setItem("user", jwt_token);

    authTokenRequest(jwt_token);
    return Promise.resolve(cur_user);
  } catch (error) {
    const errorsdata = error.response;
    dispatch({ type: LOGIN_ERROR, payload: errorsdata.data });
    return Promise.reject(errorsdata.data);
  }
};

export const SetUserToken = (jwt_token) => async (dispatch) => {
  authTokenRequest(jwt_token);
  // localStorage.token=jwt_token;
  var cur_user = jwt.decode(jwt_token);
  console.log("Verified setuser:", cur_user);
  console.log("Verified.roles:", cur_user.roles);
  dispatch({ type: LOGIN_AUTH, payload: cur_user });
  localStorage.setItem("user", jwt_token);
};
