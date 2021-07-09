import axios from "axios";

const KEY = "332c142235834b46899a26ad0a196ce5";

export default axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    pageSize: "10",
    apiKey: KEY,
    sortBy: "popilarity",
    country: "us",
  },
});
