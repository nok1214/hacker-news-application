import { combineReducers } from "redux";
import searchedResultReducer from "./searchedResultReducer";
import topHeadlinesReducer from "./topHeadlinesReducer";
import popularNewsReducer from "./popularNewsReducer";

export default combineReducers({
  searchedResults: searchedResultReducer,
  topHeadlines: topHeadlinesReducer,
  popularNews: popularNewsReducer,
});
