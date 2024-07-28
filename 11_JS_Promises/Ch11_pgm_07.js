const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then(response => response.json())
  .then(cats => {
    const totalWeight = cats.reduce((acc, cat) => {
      const weightRange = cat.weight.metric.split(' - ').map(Number);
      const averageWeight = (weightRange[0] + weightRange[1]) / 2;
      return acc + averageWeight;
    }, 0);
    const averageWeight = totalWeight / cats.length;
    console.log(`Average weight of cats in metric units: ${averageWeight.toFixed(2)} kg`);
  })
  .catch(error => console.error('Error fetching cat breeds:', error));


  const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then(response => response.json())
  .then(countries => {
    const sortedCountries = countries.sort((a, b) => b.area - a.area);
    const largestCountries = sortedCountries.slice(0, 10);
    largestCountries.forEach(country => {
      console.log(`${country.name}: ${country.area} km²`);
    });
  })
  .catch(error => console.error('Error fetching countries:', error));

  fetch(countriesAPI)
  .then(response => response.json())
  .then(countries => {
    const languagesSet = new Set();
    countries.forEach(country => {
      country.languages.forEach(language => {
        languagesSet.add(language.name);
      });
    });
    console.log(`Total number of official languages: ${languagesSet.size}`);
  })
  .catch(error => console.error('Error fetching countries:', error));
