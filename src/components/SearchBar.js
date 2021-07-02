import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <input
            type="text"
            value={searchTerm}
            placeholder="Enter Your Keyword"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
