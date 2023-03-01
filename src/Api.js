export const fetchData = async () => {
  return await fetch('https://openlibrary.org/subjects/collectionid:eaneschallenge.json?limit=100').then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('You Shall Not Pass!')
    }
  }) 
};
