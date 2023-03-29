import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));
const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;

