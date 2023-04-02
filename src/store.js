import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootReducers } from "./redux/reducer/rootRedducer";

const persistConfig = {
  key: "root",
  whiteList: ["AllShows"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducers);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export let persistor = persistStore(store);
