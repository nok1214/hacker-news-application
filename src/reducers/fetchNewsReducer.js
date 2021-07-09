import { FETCH_NEWS } from "../actions/types";

const fetchNewsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return [...action.payload];
    default:
      return state;
  }
};

export default fetchNewsReducer;
