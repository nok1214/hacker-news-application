import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <h3>News Search</h3>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              value={this.state.searchTerm}
              placeholder="Enter Your Keyword"
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
