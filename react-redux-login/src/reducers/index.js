import { combineReducers } from "redux";
import auth from "./auth";

const combine = combineReducers({
    auth
})


export const rootReducer = combine
export default rootReducer