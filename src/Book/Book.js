import React, { NavLink } from 'react'
import './Book.css'

const Book = ({ cover_id, id }) => {
  return (
    <NavLink to={`/${id}`} key={id}>
    <section className='book'>
      <img 
      className="book-cover"
      src={`https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`}
      alt="book cover"
      />
  </section>
  </NavLink>
  )
}

export default Book