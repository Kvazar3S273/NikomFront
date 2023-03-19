import { LOGIN_AUTH, LOG_OUT, LOGIN_ERROR, ERRORS } from "../constants/actionTypes";

const initialState = {
  isAuth: false,
  username: {},
  role: "",
  loginerrors: "",
  emailerrors: "",
};

function loginReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log("Reducer data :", payload);

  switch (type) {
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
    case LOGIN_ERROR: {
      return {
        loginerrors: payload,
      };
    }
    case ERRORS: {
      return {
        emailerrors: payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default loginReducer;
