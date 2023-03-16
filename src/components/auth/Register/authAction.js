import authTokenRequest from "../../../services/auth_request";
import {
  REGISTER_AUTH,
  REGISTER_BEGIN,
  REGISTER_FAILED,
} from "../../../constants/actionTypes";
import jwt from "jsonwebtoken";
import register_service from "../../../services/auth.service";

export const RegisterUser = (usermodel) => async (dispatch) => {
  try {
    dispatch({type:REGISTER_BEGIN});
    const result = await register_service.register(usermodel);
    console.log("register result", result);
    var jwt_token = result.data.token;
    var verified = jwt.decode(jwt_token);
    localStorage.setItem("user", jwt_token);
    authTokenRequest(jwt_token);
    
    dispatch({ type: REGISTER_AUTH, payload: verified });
    console.log("1111", verified);
    return Promise.resolve(result);
  } catch (error) {
    const errorsdata = error.response;
    dispatch({ type: REGISTER_FAILED, payload: errorsdata.data });
    return Promise.reject(errorsdata.data);
  }
};

export const isRole = (user, role) => {
  if (Array.isArray(user.roles)) {
    for (let i = 0; i < user.roles.length; i++) {
      if (user.roles[i] == role) return true;
    }
    return false;
  } else {
    return user.roles == role;
  }
};
