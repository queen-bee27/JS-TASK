// create an empty set
const emptySet = new Set();
console.log(emptySet); // Set {}

// Create a set containing 0 to 10 using loop
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
  numberSet.add(i);
}
console.log(numberSet); // Set { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// Remove an element from a set
numberSet.delete(5); // Removing the element '5' from the set
console.log(numberSet); // Set { 0, 1, 2, 3, 4, 6, 7, 8, 9, 10 }

// Clear a set
numberSet.clear(); // Clearing all elements from the set
console.log(numberSet); // Set {}

// Create a set of 5 string elements from array
const stringSet = new Set(countries); // Using the 'countries' array provided earlier
console.log(stringSet); // Set { 'Finland', 'Sweden', 'Norway' }

// Create a map of countries and number of characters of a country

const countryMap = new Map();

countries.forEach(country => {
  countryMap.set(country, country.length);
});

console.log(countryMap);
// Map {
//   'Finland' => 7,
//   'Sweden' => 6,
//   'Norway' => 6
// }
