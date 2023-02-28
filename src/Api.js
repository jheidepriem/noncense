export const fetchData = async () => {
  return await fetch('http://localhost:3001/api/v1/ideas').then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('You Shall Not Pass!')
    }
  }) 
};
