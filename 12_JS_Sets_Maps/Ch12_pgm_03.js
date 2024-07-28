const countries = {
    Finland: ['Finnish', 'Swedish'],
    Sweden: ['Swedish'],
    Norway: ['Norwegian']
  };
  
  function countLanguages(countries) {
    let languages = new Set();
  
    // Iterate through each country's languages and add to the set
    Object.values(countries).forEach(langs => {
      langs.forEach(lang => languages.add(lang));
    });
  
    return languages.size;
  }
  
  console.log(countLanguages(countries)); // Output: 3
  
  function mostSpokenLanguages(countries, n) {
    let languageCount = {};
  
    // Count occurrences of each language across all countries
    Object.values(countries).forEach(langs => {
      langs.forEach(lang => {
        if (languageCount[lang]) {
          languageCount[lang]++;
        } else {
          languageCount[lang] = 1;
        }
      });
    });
  
    // Convert to array of objects for sorting
    let sortedLanguages = Object.entries(languageCount)
      .sort((a, b) => b[1] - a[1]) // Sort by count descending
      .slice(0, n) // Take top n languages
      .map(([lang, count]) => ({ [lang]: count }));
  
    return sortedLanguages;
  }
  
  // Examples:
  console.log(mostSpokenLanguages(countries, 10));
  console.log(mostSpokenLanguages(countries, 3));
  