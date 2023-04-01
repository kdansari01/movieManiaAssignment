import { GET_SHOWS, GET_SINGLE_SHOW } from "../types/types";

const initialState = {
  AllShows: [],
  show: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SHOWS:
      return {
        ...state,
        AllShows: action.payload,
      };
    case GET_SINGLE_SHOW:
      return { ...state, show: action.payload };
    default:
      return state;
  }
}
