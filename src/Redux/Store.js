import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";



const store = configureStore({reducer: RootReducer})

export default store;