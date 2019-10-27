import { combineReducers } from "redux";
import facilityReducer from "./facilityReducer";

export default combineReducers({
  facilities: facilityReducer
});
