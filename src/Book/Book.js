import React from 'react'
import './Book.css'

const Book = ({ cover_id }) => {
  return (
    <section className='book'>
      <img 
      className="book-cover"
      src={`https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`}
      alt="book cover"
      />
  </section>
  )
}

export default Book