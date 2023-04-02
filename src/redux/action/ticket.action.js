import { DECREMENT, INCREMENT } from "../types/types";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
