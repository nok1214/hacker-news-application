import React, { Component } from "react";
import SearchBar from "./SearchBar";
import NewsList from "./NewsList";
import hackernews from "../apis/hackernews";

class Results extends Component {
  state = { results: [] };

  onTermSubmit = async (term) => {
    const response = await hackernews.get("/everything", {
      params: {
        q: term,
      },
    });

    this.setState({ results: response.data.articles });
  };

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <NewsList newsList={this.state.results} />
      </div>
    );
  }
}

export default Results;
