import { DECREMENT, INCREMENT } from "../types/types";

const initialState = {
  TotalTicket: 1,
  Price: 120,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        TotalTicket: state.TotalTicket + 1,
        Price: state.Price + 120,
      };
    case DECREMENT:
      return {
        ...state,
        TotalTicket: state.TotalTicket - 1,
        Price: state.Price - 120,
      };

    default:
      return state;
  }
};
