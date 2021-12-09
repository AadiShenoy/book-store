import { ActionTypes } from "../constants/action-types";

const initialState = {
  books: [],
  filteredbooks: [],
};

export const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BOOKS:
      return { ...state, books: payload };

    case ActionTypes.SET_FILTERED_BOOKS:
      return { ...state, filteredbooks: payload };

    default:
      return state;
  }
};
