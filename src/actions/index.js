import searchApi from "../apis/searchApi";
import topHeadlinesApi from "../apis/topHeadlinesApi";
import popularNewsApi from "../apis/popularNewsApi";
import { SEARCHED_RESULTS, FETCH_TOP_HEADLINES, POPULAR_NEWS } from "./types";

export const fetchSearchedResults = (searchTerm) => async (dispatch) => {
  const response = await searchApi.get("/everything", {
    params: {
      q: searchTerm,
    },
  });

  dispatch({ type: SEARCHED_RESULTS, payload: response.data.articles });
};

export const fetchTopHeadlines = () => async (dispatch) => {
  const response = await topHeadlinesApi.get("/top-headlines");

  dispatch({ type: FETCH_TOP_HEADLINES, payload: response.data.articles });
};

export const fetchPopularNews = () => async (dispatch) => {
  const response = await popularNewsApi.get("/everything");

  dispatch({ type: POPULAR_NEWS, payload: response.data.articles });
};
