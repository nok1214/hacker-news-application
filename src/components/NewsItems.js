import React from "react";

const NewsItems = (props) => {
  return (
    <div
      className="item"
      key={props.newslist.title}
      style={{ marginTop: "10px" }}
    >
      <div className="ui unstackable items">
        <div className="item">
          <div className="image">
            <img src={props.newslist.urlToImage} alt={props.newslist.title} />
          </div>
          <div className="content">
            <a
              className="header"
              href={props.newslist.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.newslist.title}
            </a>
            <div className="meta">
              <span>{props.newslist.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
