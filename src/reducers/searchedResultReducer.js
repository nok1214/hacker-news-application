import { SEARCHED_RESULTS } from "../actions/types";

const searchedResultReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCHED_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

export default searchedResultReducer;
