import {
  LOGIN,
  LOGIN_AUTH,
  LOG_OUT,
  REGISTER,
  REGISTER_BEGIN,
  REGISTER_FAILED,
  ERRORS,
} from "../constants/actionTypes";

const initialState = {
  isAuth: false,
  username: {},
  loading: false,
  errorvalid: "",
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_BEGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_AUTH: {
      return {
        isAuth: true,
        username: payload,
      };
    }
    case LOG_OUT: {
      return {
        isAuth: false,
        username: {},
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case ERRORS: {
      return {
        errorvalid: payload,
      };
    }
    case REGISTER:
    case LOGIN: {
      return {
        isAuth: true,
        username: payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
