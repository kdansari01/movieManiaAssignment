import { combineReducers } from "redux";
import reducer from "./Reducer";

export const RootReducers = combineReducers({
  AllShows: reducer,
});
