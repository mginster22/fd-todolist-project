import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
  users: userReducer,
  tasks: taskReducer,
});

export default rootReducer;
