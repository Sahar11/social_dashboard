import BookCard from "./BookCard";

export default function BookList(props) {
  return (
    <div className="book-list">
     
      {props.search.map((book, index) => {
        return (
          <BookCard
            key={index}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            published={book.volumeInfo.publishedDate}
          />
        );
      })}
    </div>
  );
}
