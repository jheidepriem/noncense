import "../BookDetails/BookDetails.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BookDetails = ({ bookData }) => {
  const [Loading, setLoading] = useState(false);
  return (
    <main className="book-details-container">
      {Loading && <h1>Loading...</h1>}
      <section className="book-cover-section">
        <img
          className="large-cover"
          src={
            bookData.cover_id &&
            `https://covers.openlibrary.org/b/id/${bookData.cover_id}-L.jpg`
          }
          alt="book cover"
        />
      </section>
      <section className="book-details">
        <h1 className="book-title">{bookData.title}</h1>
        <p>{`Author: ${bookData.authors[0].name}`}</p>
        <p>{`First Publish Year: ${bookData.first_publish_year}`}</p>
        {bookData.availability.is_lendable && (
          <Link
            to={{
              pathname: `https://openlibrary.org${bookData.key}`,
            }}
            target="_blank"
          >
            <button className="button-2">Checkout Book</button>
          </Link>
        )}
        <p>{`Subject: ${bookData.subject[0]}`}</p>
      </section>
    </main>
  );
};

export default BookDetails;

BookDetails.propTypes = {
  bookData: PropTypes.object.isRequired,
};
