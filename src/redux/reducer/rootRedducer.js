import { combineReducers } from "redux";
import { counterReducer } from "./TicketReducer";
import reducer from "./Reducer";

export const RootReducers = combineReducers({
  AllShows: reducer,
  TicketShow: counterReducer,
});
