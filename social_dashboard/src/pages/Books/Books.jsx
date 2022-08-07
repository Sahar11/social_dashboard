import React, { useState } from "react";
import axios from "axios";
import Search from "./SearchBar";

export default function Books(props) {
  const [search, setSearch] = useState({});

  const searchBooks =(e) => {
    let url = "https://www.googleapis.com/books/v1/volumes?q="+ search;
    e.preventDefault();
  axios 
  .get(url)
   .then((data) => 
   console.log(data))
  }

  function handleSearch(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  return (
    <section className="books">
      <div className="book-search">
        <h1>Select the Books you would like to read</h1>
        <Search searchBook={searchBooks} handleSearch={handleSearch} />
      </div>
    </section>
  );
}
