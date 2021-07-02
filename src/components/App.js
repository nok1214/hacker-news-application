import React from "react";
import SearchBar from "./SearchBar";
import TopHeadLines from "./TopHeadlines";
import PopularNews from "./PopularNews";

const App = () => {
  return (
    <div>
      <div className="ui sizer vertical segment">
        <div className="ui huge header" style={{ textAlign: "center" }}>
          Hacker News Clone
        </div>
      </div>
      <div className="ui container" style={{ marginBottom: "20px" }}>
        <SearchBar />
      </div>
      <div>
        <div className="ui container">
          <div className="ui grid">
            <div className="ui row">
              <div className="ten wide column">
                <TopHeadLines />
              </div>
              <div className="five wide column">
                <PopularNews />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
