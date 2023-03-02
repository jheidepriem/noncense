import React, { useEffect, useState, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchData } from "../Api";
import Library from "../Library/Library";
import BookDetails from "../BookDetails/BookDetails";
import Header from "../Header/Header";
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

  const filterBooks = (searchValue) => {
    
   const filteredData = libraryData.filter((book) => book.title.toLowerCase().includes(q.toLowerCase()))
   setLibraryData(filteredData)
  }

  return ( 
    <main className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <Header />
              {/* <Form/> */}
              <Library allBooks={libraryData} />
              {Loading && <h1>Loading...</h1>}
            </Fragment>
          )}
        />
        <Route
          exact
          path="/book/:id"
          render={({ match }) => {
            const findBook = libraryData.find(
              (book) => book.ia === match.params.id
            );
            return <BookDetails bookData={findBook} id={match.params.id} />;
          }}
        />
      </Switch>
    </main>
  );
};

export default App;
