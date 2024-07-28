const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then(response => response.json())
  .then(countries => {
    countries.forEach(country => {
      const { name, capital, languages, population, area } = country;
      const languageNames = languages.map(language => language.name).join(', ');

      console.log(`Country: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Languages: ${languageNames}`);
      console.log(`Population: ${population}`);
      console.log(`Area: ${area}`);
      console.log('---------------------------');
    });
  })
  .catch(error => console.error('Error fetching countries:', error));
