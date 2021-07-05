import React, { Component } from "react";
import SearchBar from "./SearchBar";
import searchApi from "../apis/searchApi";
import NewsList from "./NewsList";

class SearchedResults extends Component {
  state = { searchResults: [] };

  onTermSubmit = async (searchTerm) => {
    const response = await searchApi.get("/everything", {
      params: {
        q: searchTerm,
      },
    });

    this.setState({ searchResults: response.data.articles });
  };

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <NewsList newslists={this.state.searchResults} />
      </div>
    );
  }
}

export default SearchedResults;
