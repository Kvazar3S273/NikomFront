import { REGISTER, REGISTER_BEGIN } from "../constants/actionTypes";
import authService from "../services/auth.service";
// import { useNavigate } from "react-router-dom";

export const RegisterUser = (model) => async (dispatch) => {
    // const navigator = useNavigate();
    try {
        dispatch({type: REGISTER_BEGIN});
        const result = await authService.register(model);
        dispatch({type: REGISTER, payload: model.email});
        // navigator("/");
        return Promise.resolve(result);
        
    }
    catch(err) {
        console.log("Problem register");
        return Promise.reject(err);
    }
}