import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
})

let store = legacy_createStore(reducers)



export default store;