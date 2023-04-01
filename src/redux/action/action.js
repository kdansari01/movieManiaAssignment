import axios from "axios";
import { GET_SHOWS, GET_SINGLE_SHOW } from "../types/types";
export const getShows = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );
    dispatch({
      type: GET_SHOWS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    dispatch({
      type: GET_SINGLE_SHOW,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
