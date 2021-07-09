import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../actions";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchNews(this.state.term);
    this.setState({ term: " " });
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div>
        <div className="ui segment">
          <h3>News Search</h3>
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="ui fluid action input">
              <input
                type="text"
                placeholder="Enter your Keyword"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <div className="ui button" onClick={this.onFormSubmit}>
                Search
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchNews })(SearchBar);
