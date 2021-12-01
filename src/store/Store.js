import LoginUser from "../page/login/loginUser";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import { combineReducers,configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
    userData : LoginUser
})

const persistConfig ={
    key:'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers)

const store= configureStore({reducer: persistedReducer})
const persistor = persistStore(store)
export {store, persistor}