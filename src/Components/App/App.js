import React, { useEffect, useState, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchData } from "../Api";
import Library from "../Library/Library";
import BookDetails from "../BookDetails/BookDetails";
import Error from '../Components/Error/Error'
import Header from "../Header/Header";
import Form from "../Form/Form";
import About from "../About/About";
import "../App/App.css";

const App = () => {
  const [libraryData, setLibraryData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((data) => {
        setLibraryData(data.works);
        setFilteredData(data.works);
        setLoading(false);
      })
      .catch((error) => console.log(error, "Error fetching library"));
  }, []);

  const filterBooks = (searchValue) => {
    const filteredData = libraryData.filter((book) =>
      book.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <main className="App">
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route
          exact
          path="/library"
          render={() => (
            <Fragment>
              <Header />
              <Form filterBooks={filterBooks} />
              <Library allBooks={filteredData} />
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
            return (
              <Fragment>
                <Header />
                <BookDetails bookData={findBook} id={match.params.id} />
              </Fragment>
            );
          }}
        />
         <Route path="*">
            <Error />
          </Route>
      </Switch>
    </main>
  );
};

export default App;
