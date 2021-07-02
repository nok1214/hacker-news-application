import { FETCH_TOP_HEADLINES } from "../actions/types";

const topHeadlinesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TOP_HEADLINES:
      return action.payload;
    default:
      return state;
  }
};

export default topHeadlinesReducer;
