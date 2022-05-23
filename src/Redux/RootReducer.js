import { combineReducers } from "redux";
import AuthReducer from './AuthSlice.js'
import TemplateReducer from "./TemplateSlice";
import PatientReducer from "./PatientSlice.js";

const RootReducer = combineReducers({
    auth: AuthReducer,
    template: TemplateReducer,
    patient: PatientReducer
})

export default RootReducer;