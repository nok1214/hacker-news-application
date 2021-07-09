import { combineReducers } from "redux";
import fetchNewsReducer from "./fetchNewsReducer";
import fetchTopHeadlinesReducer from "./fetchTopHeadlinesReducer";

export default combineReducers({
  fetchNews: fetchNewsReducer,
  fetchTopHeadlines: fetchTopHeadlinesReducer,
});
