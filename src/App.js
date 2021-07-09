import React from "react";
import hackernews from "./apis/hackernews";
import SearchBar from "./components/SearchBar";
import NewsList from "./components/NewsList";
import PopularNews from "./components/PopularNews";

class App extends React.Component {
  state = { news: [] };

  componentDidMount() {
    this.onTermSubmit("usa");
  }

  onTermSubmit = async (term) => {
    const response = await hackernews.get("/everything", {
      params: { q: term },
    });
    this.setState({ news: response.data.articles });
  };

  render() {
    return (
      <div>
        <div className="ui sizer vertical segment">
          <div className="ui huge header" style={{ textAlign: "center" }}>
            Hacker News Clone
          </div>
        </div>
        <div className="ui container" style={{ marginBottom: "20px" }}>
          <SearchBar onTermSubmit={this.onTermSubmit} />
        </div>
        <div className="ui container">
          <div className="ui grid">
            <div className="ten wide column">
              <NewsList news={this.state.news} />
            </div>
            <div className="six wide column">
              <PopularNews />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
