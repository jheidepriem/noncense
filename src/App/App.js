import React, { useEffect, useState } from 'react';
import { fetchData } from '../Api';
import './App.css';

const App = () => {
  const [libraryData, setLibraryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  setIsLoading(true);
  fetchData().then(data => console.log(data)).catch(error => console.log(error, "Error fetching library") )
}, [])


}
export default App;
