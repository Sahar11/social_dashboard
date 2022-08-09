import React from "react";

export default function SearchBar(props) {
  return (
    <div className="searchBar">
      <form onSubmit={props.searchBook} action="">
       
        <input className="search-input" type="text" onChange={props.handleSearch} />
        <button className="search-btn" type="submit">Search</button>
        
        <select className="sort" defaultValue="Sort"  onChange={props.handleSort}>
          <option disabled value="Sort">Sort</option>
          <option value='Newest'>Newest</option>
          <option value='Oldest'>Oldest</option>
        </select>
        
      </form>
    </div>
  );
}
