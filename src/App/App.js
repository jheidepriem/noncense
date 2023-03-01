import React, { useEffect, useState, Fragment, Route } from "react";
import { fetchData } from "../Api";
import Library from "../Library/Library";
import BookDetails from "../BookDetails/BookDetails";
import "../App/App.css";

const App = () => {
  const [libraryData, setLibraryData] = useState([]);
  const [singleBookData, setSingleBookData] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    fetchData()
      .then((data) => setLibraryData(data.works))
      .catch((error) => console.log(error, "Error fetching library"));
  }, []);

  return (
    <main className="App">
      <h1>Noncense</h1>
      <Library allBooks={singleBookData} />
      <Route
        exact
        path="/"
        render={() => <Library allBooks={libraryData} />}
      ></Route>
      <Route
        exact
        path="/bookId"
        render={({ match }) => {
          return <BookDetails bookID={match.params.bookid} />;
        }}
      ></Route>
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
