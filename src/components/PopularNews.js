import React, { Component } from "react";
import popular from "../apis/popular";

class PopularNews extends Component {
  state = { popularNews: [] };
  componentDidMount() {
    this.fetchPopularNews();
  }

  fetchPopularNews = async () => {
    const response = await popular.get("/top-headlines");
    this.setState({ popularNews: response.data.articles });
  };
  popularNews() {
    return this.state.popularNews.map((news) => {
      return (
        <div className="ui relaxed divided list">
          <div className="item">
            <div className="ui unstackable items">
              <div className="item">
                <div className="image">
                  <img src={news.urlToImage} alt={news.title} />
                </div>
                <div className="content">
                  <a
                    className="header"
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {news.title}
                  </a>
                  <div className="meta">
                    <span>{news.description}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <>
        <h3>Popular This Week</h3>
        <div>{this.popularNews()}</div>
      </>
    );
  }
}

export default PopularNews;
