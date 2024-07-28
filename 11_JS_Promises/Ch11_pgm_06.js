const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then(response => response.json())
  .then(cats => {
    const catNames = cats.map(cat => cat.name);
    console.log(catNames);
  })
  .catch(error => console.error('Error fetching cat breeds:', error));
