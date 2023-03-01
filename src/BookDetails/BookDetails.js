import React, { useEffect, useState } from 'react';
import { fetchData } from '../Api';
import '../BookDetails/BookDetails.css'

const BookDetails = () => {
  const [bookDetailData, setBookDetailData] = useState([]);


useEffect(() => {
  fetchData().then(data => bookDetailData(data)).catch(error => console.log(error, 'You Shall Not Pass!!!'))
})
}

export default BookDetails