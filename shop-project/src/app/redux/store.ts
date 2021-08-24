import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth-state";
import { cartReducer } from "./cart-state";

const reducers = combineReducers({ 
    authState: authReducer,
    cartState: cartReducer
});

const store = createStore(reducers);

export default store;