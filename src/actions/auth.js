import { REGISTER, REGISTER_BEGIN, REGISTER_FAILED } from "../constants/actionTypes";
import authService from "../services/auth.service";

export const RegisterUser = (model) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_BEGIN });
    const result = await authService.register(model);
    console.log("Register result:", result);
    dispatch({ type: REGISTER, payload: model.email });
    return Promise.resolve(result);
  } catch (err) {
    const data = err.response;
    console.log("Register error data", data.data.errors);
    dispatch({ type: REGISTER_FAILED, payload: data.data });
    return Promise.reject(data.data);
  }
};
