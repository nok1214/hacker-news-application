import React from "react";
import NewsItems from "./NewsItems";
import PopularNews from "./PopularNews";

const NewsList = ({ newslists }) => {
  const renderedList = newslists.map((newslist) => {
    return <NewsItems newslist={newslist} />;
  });

  return (
    <div>
      <div className="ui container">
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <div className="ui relaxed divided list">{renderedList}</div>
            </div>
            <div className="six wide column">
              <PopularNews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
