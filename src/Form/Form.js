import { useState } from "react";
import "../Form/Form.css";

const Form = ({ getSearch }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    if (!searchInput) {
      setError(true);
    } else {
      setError(false);
      getSearch(searchInput);
    }
    setSearch("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  );
};

export default Form;
