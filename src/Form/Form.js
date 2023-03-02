import { useState, useEffect } from 'react';
import '../Form/Form.css'

const Form = ({ filterBooks }) => {
  const [search, setSearch] = useState('')

useEffect(() => {
  filterBooks(search)
}, [search])

return (
  <form className ="search-form">
    <input
    type='text'
    placeholder='Search'
    name='search'
    value={search}
    onChange={event => setSearch(event.target.value)}
  />
  </form>
 )
}

export default Form;