import { useState } from "react";
import "../BookDetails/BookDetails.css";
import { useParams } from "react-router-dom";
import Library from "../Library/Library";

const BookDetails = () => {
  const params = useParams()
  
  const [singleBook, setSingleBook] = useState({});
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('')
console.log(params)


  return (
    <main className="book-details-container">
      <h1 className="book-title">Test Book Page </h1>
      <Library >

      </Library>
    </main>
  )
};

export default BookDetails;
