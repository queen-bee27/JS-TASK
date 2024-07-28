const url = 'https://restcountries.com/v2/all';

// Using Promises
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('===== Using Promises =====');
    console.log(data);
  })
  .catch(error => console.error(error));

// Using async/await
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log('===== Using async/await =====');
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};

fetchData();
