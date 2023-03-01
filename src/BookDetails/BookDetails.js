import "../BookDetails/BookDetails.css";
import { Link } from "react-router-dom";

const BookDetails = ({ bookData }) => {
  console.log(bookData.availability.available_to_borrow);
  return (
    <main className="book-details-container">
      <h1 className="book-title">{bookData.title}</h1>
      <section className="book-cover">
        <img
          className="large-cover"
          src={`https://covers.openlibrary.org/b/id/${bookData.cover_id}-L.jpg`}
          alt="book cover"
        />
      </section>
      <section className="book-details">
        <p>{`Author: ${bookData.authors[0].name}`}</p>
        <p>{`First Publish Year: ${bookData.first_publish_year}`}</p>
        {bookData.availability.available_to_borrow && (
          <Link to={{ pathname:`https://openlibrary.org${bookData.key}/Water_for_Elephants`}} target="_blank">
            <button>Checkout Book</button>
          </Link>
        )}
      </section>
    </main>
  );
};

export default BookDetails;

// Each Book [ {

//   key: ‘/works/OL52922A’
//   title: ‘The Handmaid’s Tale’
//   author: [ {name: ‘Margaret Atwood’} ]
//   cover_id: 8231851. Will have to be interpolated with url https://covers.openlibrary.org/b/id/8231851-M.jpg
//   availability: {available_to_borrow: true}
//   first_publish_year: 1985

//   ]
