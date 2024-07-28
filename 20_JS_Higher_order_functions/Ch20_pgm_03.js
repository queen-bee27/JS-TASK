// Assuming countries_data.js is imported and countries is the array of country objects

// Sort countries by name
const sortByName = countries => {
    return [...countries].sort((a, b) => a.name.localeCompare(b.name));
  };
  
  // Sort countries by capital
  const sortByCapital = countries => {
    return [...countries].sort((a, b) => a.capital.localeCompare(b.capital));
  };
  
  // Sort countries by population
  const sortByPopulation = countries => {
    return [...countries].sort((a, b) => b.population - a.population);
  };
  
  // Example usage:
  console.log(sortByName(countries));
  console.log(sortByCapital(countries));
  console.log(sortByPopulation(countries));
  
  const mostSpokenLanguages = (countries, topN) => {
    const languageCount = countries.reduce((acc, country) => {
      country.languages.forEach(language => {
        acc[language] = (acc[language] || 0) + 1;
      });
      return acc;
    }, {});
  
    const sortedLanguages = Object.entries(languageCount)
      .map(([language, count]) => ({ language, count }))
      .sort((a, b) => b.count - a.count);
  
    return sortedLanguages.slice(0, topN);
  };
  
  // Example usage:
  console.log(mostSpokenLanguages(countries, 10));
  console.log(mostSpokenLanguages(countries, 3));
  
  const mostPopulatedCountries = (countries, topN) => {
    return countries
      .map(({ name, population }) => ({ country: name, population }))
      .sort((a, b) => b.population - a.population)
      .slice(0, topN);
  };
  
  // Example usage:
  console.log(mostPopulatedCountries(countries, 10));
  console.log(mostPopulatedCountries(countries, 3));

  // Import the data from countries_data.js
// Assuming the countries data is an array of objects

import { countries } from './/data';

// Sort by name
console.log('Sorted by name:', sortByName(countries));

// Sort by capital
console.log('Sorted by capital:', sortByCapital(countries));

// Sort by population
console.log('Sorted by population:', sortByPopulation(countries));

// Most spoken languages
console.log('10 most spoken languages:', mostSpokenLanguages(countries, 10));
console.log('3 most spoken languages:', mostSpokenLanguages(countries, 3));

// Most populated countries
console.log('10 most populated countries:', mostPopulatedCountries(countries, 10));
console.log('3 most populated countries:', mostPopulatedCountries(countries, 3));
