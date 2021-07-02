import { POPULAR_NEWS } from "../actions/types";

const popularNewsReducer = (state = [], action) => {
  switch (action.type) {
    case POPULAR_NEWS:
      return action.payload;
    default:
      return state;
  }
};

export default popularNewsReducer;
