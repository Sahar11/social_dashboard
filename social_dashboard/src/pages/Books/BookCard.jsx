import "./books.css";

export default function BookCard(props) {
  return (
    <div className="card-container">
      <img src={props.image} alt="" />
      <div className="desc">
        <h2 className="book-title">Title: {props.title}</h2>
        <h3 className="book-author">Author: {props.author}</h3>
        <p className="book-publishDate">Published: {props.published}</p>
      </div>
    </div>
  );
}
