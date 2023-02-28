import { REGISTER, REGISTER_BEGIN, REGISTER_FAILED } from "../constants/actionTypes";
import authService from "../services/auth.service";

export const RegisterUser = (model) => async (dispatch) => {
    try {
        dispatch({type: REGISTER_BEGIN});
        const result = await authService.register(model);
        console.log("Register result:", result);
        dispatch({type: REGISTER, payload: model.email});
        return Promise.resolve(result);
    }
    catch(err) {
        const {data} = err.response;
        console.log("Register error");
        dispatch({type: REGISTER_FAILED, payload: data.errors});
        console.log("Problem register");
        return Promise.reject();
    }
}