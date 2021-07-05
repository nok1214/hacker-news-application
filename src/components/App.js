import React from "react";
// import TopHeadLines from "./TopHeadlines";
// import PopularNews from "./PopularNews";
import SearchedResults from "./SearchedResults";

const App = () => {
  return (
    <div>
      <div className="ui sizer vertical segment">
        <div className="ui huge header" style={{ textAlign: "center" }}>
          Hacker News Clone
        </div>
      </div>
      <div className="ui container" style={{ marginBottom: "20px" }}>
        <SearchedResults />
      </div>
    </div>
  );
};

export default App;
