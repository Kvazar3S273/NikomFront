import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import catalogReducer from "./reducers/catalogReducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  auth: authReducer,
  catalog: catalogReducer
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;