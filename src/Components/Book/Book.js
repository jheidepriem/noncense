import { Link } from "react-router-dom";
import "../Book/Book.css";

const Book = ({ cover_id, id }) => {
  return (
    <Link to={`/book/${id}`} key={id}>
      <section className="book">
        <img
          className="book-cover"
          src={`https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`}
          alt="book cover"
        />
      </section>
    </Link>
  );
};

export default Book;
