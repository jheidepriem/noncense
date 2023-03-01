import Book from "../Book/Book";
import "./Library.css";

const Library = ({ allBooks }) => {
  const mappedBooks = allBooks.map((book) => {
    return (
      <div key={book.key}>
        <Book id={book.ia} cover_id={book.cover_id} />
      </div>
    );
  });

  return <section className="books-container">{mappedBooks}</section>;
};

export default Library;
