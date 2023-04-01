import { DECREMENT, INCREMENT, TICKET_PRICE } from "../types/types";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
