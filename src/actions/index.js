import { FETCH_NEWS, FETCH_TOP_HEADLINES } from "./types";
import hackernews from "../apis/hackernews";
import popular from "../apis/popular";

export const fetchNews =
  (term = "usa") =>
  async (dispatch) => {
    const response = await hackernews.get("/everything", {
      params: {
        q: term,
      },
    });
    dispatch({ type: FETCH_NEWS, payload: response.data.articles });
  };

export const fetchTopHeadlines = () => async (dispatch) => {
  const response = await popular.get("/top-headlines", {
    params: {
      domains: "techcrunch.com",
    },
  });
  dispatch({ type: FETCH_TOP_HEADLINES, payload: response.data.articles });
};
