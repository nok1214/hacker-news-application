import React from "react";
import { connect } from "react-redux";
import { fetchPopularNews } from "../actions";

class PopularNews extends React.Component {
  componentDidMount() {
    this.props.fetchPopularNews();
  }

  renderPopularNews() {
    return this.props.popularNews.map((popular) => {
      return (
        <div className="ui relaxed divided list" key={popular.description}>
          <div className="item">
            <div className="ui unstackable items">
              <div className="item">
                <img
                  className="ui tiny image"
                  src={popular.urlToImage}
                  alt={popular.title}
                />
                <div className="content">
                  <a
                    className="header"
                    href={popular.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {popular.title}
                  </a>
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
        <div>{this.renderPopularNews()}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { popularNews: state.popularNews };
};

export default connect(mapStateToProps, { fetchPopularNews })(PopularNews);
