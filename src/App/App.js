import { useEffect, useState, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchData } from "../Api";
import Library from "../Library/Library";
import BookDetails from "../BookDetails/BookDetails";
import "../App/App.css";

const App = () => {
  const [libraryData, setLibraryData] = useState([]);
  const [Loading, setLoading] = useState(false);
  // const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((data) => {
       setLibraryData(data.works);
        setLoading(false);
      })
      .catch((error) => console.log(error, "Error fetching library"));
  }, []);

  return (
    <main className="App">
      <Routes>
        <Route
         exact
          path="/"
          element={
            <Fragment>
              <h1>Noncense</h1>
              {/* <Form/> */}
              <Library allBooks={libraryData} />
              {Loading && <h1>Loading...</h1>}
            </Fragment>
          }
        />
        <Route
         exact
          path="/book/:id"
          element={ <BookDetails />
          }
        />
      </Routes>
    </main>
  );
};

export default App;

// Each Book [ {

//   key: ‘/works/OL52922A’
//   title: ‘The Handmaid’s Tale’
//   author: [ {name: ‘Margaret Atwood’} ]
//   cover_id: 8231851. Will have to be interpolated with url https://covers.openlibrary.org/b/id/8231851-M.jpg
//   availability: {available_to_borrow: true}
//   first_publish_year: 1985

//   ]
