import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReduser";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
})
let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

window.store=store;
export default store;