import { FETCH_TOP_HEADLINES } from "../actions/types";

const fetchTopHeadlinesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TOP_HEADLINES:
      return [...action.payload];
    default:
      return state;
  }
};

export default fetchTopHeadlinesReducer;
