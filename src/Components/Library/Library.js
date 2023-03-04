import Book from "../Book/Book";
import PropTypes from "prop-types"
import "../Library/Library.css";

const Library = ({ allBooks }) => {
  const mappedBooks = allBooks.map((book) => {
    return (
      <div key={book.key}>
        <Book id={book.ia} cover_id={book.cover_id} />
      </div>
    );
  });

  return (
    <section className="outside-container">
      <section className="border-container">
      <section className="books-container">{mappedBooks}</section>
      </section>
    </section>
  );
};

export default Library;

Library.propTypes = {
  allBooks: PropTypes.array.isRequired
};