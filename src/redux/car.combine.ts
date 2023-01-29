import { combineReducers } from "redux";
import carReducer from "./car.reducer";

const rootReducer = combineReducers({
  car: carReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;