import { REGISTER, REGISTER_BEGIN } from "../constants/actionTypes";
import authService from "../services/auth.service";

export const RegisterUser = (model) => async (dispatch) => {
    try {
        dispatch({type: REGISTER_BEGIN});
        const result = await authService.register(model);
        dispatch({type: REGISTER, payload: model.email});
        return Promise.resolve(result);
    }
    catch(err) {
        console.log("Problem register");
        return Promise.reject(err);
    }
}