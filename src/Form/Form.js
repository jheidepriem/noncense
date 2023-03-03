import { useState, useEffect } from "react";
import PropTypes from "prop-types"
import "../Form/Form.css";

const Form = ({ filterBooks }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    filterBooks(search);
  }, [search]);

  return (
    <section className="search-form-container">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search for books"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
    </section>
  );
};

export default Form;

Form.propTypes = {
  filterBooks: PropTypes.array.isRequired
};