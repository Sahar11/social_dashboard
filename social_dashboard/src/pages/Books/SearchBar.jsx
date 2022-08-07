import React from "react";

export default function SearchBar(props) {
  return (
    <div className="searchBar">
      <form onSubmit={props.searchBook} action="">
        <input type="text" onChange={props.handleSearch} />
        <button>Search</button>
      </form>
    </div>
  );
}
