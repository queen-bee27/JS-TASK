function tenMostFrequentWords(paragraph, limit = 10) {
    // Step 1: Normalize text by converting to lowercase
    paragraph = paragraph.toLowerCase();
  
    // Step 2: Split the paragraph into words using regex
    const words = paragraph.split(/\W+/).filter(word => word.length > 0);
  
    // Step 3: Count the frequency of each word using an object
    const wordFrequency = {};
    words.forEach(word => {
      if (wordFrequency[word]) {
        wordFrequency[word]++;
      } else {
        wordFrequency[word] = 1;
      }
    });
  
    // Step 4: Sort words by frequency in descending order
    const sortedWords = Object.keys(wordFrequency).sort((wordA, wordB) => wordFrequency[wordB] - wordFrequency[wordA]);
  
    // Step 5: Select the top `limit` words
    const mostFrequentWords = sortedWords.slice(0, limit);
  
    // Step 6: Format the output as objects with word and count properties
    const result = mostFrequentWords.map(word => ({ word, count: wordFrequency[word] }));
  
    return result;
  }
  
  // Test the function with the provided paragraph
  const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
  console.log(tenMostFrequentWords(paragraph));
  console.log(tenMostFrequentWords(paragraph, 10));
  