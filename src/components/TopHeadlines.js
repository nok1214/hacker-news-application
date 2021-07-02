import React from "react";
import { connect } from "react-redux";
import { fetchTopHeadlines } from "../actions";

class TopHeadlines extends React.Component {
  componentDidMount() {
    this.props.fetchTopHeadlines();
  }

  renderTopHeadlines() {
    return this.props.topHeadlines.map((topHeadline) => {
      return (
        <div
          className="ui container"
          key={topHeadline.title}
          style={{ marginTop: "10px" }}
        >
          <div className="ui unstackable items">
            <div className="item">
              <div className="image">
                <img src={topHeadline.urlToImage} alt={topHeadline.title} />
              </div>
              <div className="content">
                <a
                  className="header"
                  href={topHeadline.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {topHeadline.title}
                </a>
                <div className="meta">
                  <span>{topHeadline.description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderTopHeadlines()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { topHeadlines: state.topHeadlines };
};

export default connect(mapStateToProps, { fetchTopHeadlines })(TopHeadlines);
