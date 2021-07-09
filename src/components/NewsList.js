import React from "react";
import { connect } from "react-redux";
import { fetchNews } from "../actions";

class NewsList extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  renderedNews() {
    return this.props.news.map((news) => {
      return (
        <div className="ui replaxed divided list">
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
    return <div>{this.renderedNews()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { fetchNews: state.fetchNews };
};

export default connect(mapStateToProps, { fetchNews })(NewsList);
