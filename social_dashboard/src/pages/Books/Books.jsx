import React, { useState } from "react";
import axios from "axios";
import Search from "./SearchBar";
import BookList from "./BookList";
import "./books.css";
import { render } from "@testing-library/react";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


export default function Books(props) {
  const [search, setSearch] = useState();
  const [books, setBooks] = useState([]);
  const [sorts, setSorts] = useState();

  const searchBooks = (e) => {
    let url = "https://www.googleapis.com/books/v1/volumes?q=" + search;
    e.preventDefault();
    axios.get(url).then((res) => {
     // console.log([...res.data.items]);
      const cleanData = cleanedData(res);
      setBooks(cleanData);
    });
  };
  function handleSearch(e) {
    //console.log(e.target.value);
    setSearch(e.target.value);
  }

  function handleSort (e) {
    //console.log(e.target.value);
    setSorts(e.target.value);
  }

  function cleanedData (response) {

    const cleanedData = response.data.items.map((book) => {

      if(book.volumeInfo.hasOwnProperty('publishedDate') === false) {

        book.volumeInfo['publishedDate'] = '0000';

      } else if(book.volumeInfo.hasOwnProperty('imageLinks') === false) {

        books.volumeInfo['imageLinks'] = {
          thumbnail: 'https://www.uh.edu/pharmacy/_images/directory-staff/no-image-available.jpg'
        }
      }
      return book;
    });

    return cleanedData;
  }

  const sortedBooks = books.sort((a, b) => {
    if(sorts === 'Newest') {
      return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
    }
    if(sorts === 'Oldest') {
      return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
    }
  })

 
  return (

    <section className="books-container">
      <div className="book-search">
        <h1 className="booklist-heading"><LibraryBooksIcon className="book-icon"/>Books</h1>
        <Search searchBook={searchBooks} handleSearch={handleSearch} handleSort={handleSort} />
        <BookList search={sortedBooks} />
      </div>
    </section>
  )
}
