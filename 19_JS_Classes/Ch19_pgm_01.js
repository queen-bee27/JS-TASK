class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  
    getInfo() {
      return `This animal is a ${this.color} ${this.name}, ${this.age} years old, with ${this.legs} legs.`;
    }
  
    makeSound() {
      return "Some generic animal sound";
    }
  }

  
  class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
      super(name, age, color, legs);
      this.breed = breed;
    }
  
    makeSound() {
      return "Woof Woof";
    }
  
    getInfo() {
      return `This dog is a ${this.breed} ${this.color} ${this.name}, ${this.age} years old, with ${this.legs} legs.`;
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color, legs, breed) {
      super(name, age, color, legs);
      this.breed = breed;
    }
  
    makeSound() {
      return "Meow Meow";
    }
  
    getInfo() {
      return `This cat is a ${this.breed} ${this.color} ${this.name}, ${this.age} years old, with ${this.legs} legs.`;
    }
  }
  
  // Test the classes
  const dog = new Dog('Buddy', 3, 'brown', 4, 'Labrador');
  console.log(dog.getInfo());
  console.log(dog.makeSound());
  
  const cat = new Cat('Whiskers', 2, 'white', 4, 'Persian');
  console.log(cat.getInfo());
  console.log(cat.makeSound());
  

  class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((acc, val) => acc + val, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const sortedData = [...this.data].sort((a, b) => a - b);
      const mid = Math.floor(this.count() / 2);
      return this.count() % 2 === 0 ? (sortedData[mid - 1] + sortedData[mid]) / 2 : sortedData[mid];
    }
  
    mode() {
      const frequency = {};
      this.data.forEach(item => frequency[item] = (frequency[item] || 0) + 1);
  
      let maxFrequency = 0;
      let modeValue = null;
  
      for (const [key, value] of Object.entries(frequency)) {
        if (value > maxFrequency) {
          maxFrequency = value;
          modeValue = Number(key);
        }
      }
  
      return { mode: modeValue, count: maxFrequency };
    }
  
    variance() {
      const mean = this.mean();
      const squareDiffs = this.data.map(value => (value - mean) ** 2);
      return this.sum(squareDiffs) / this.count();
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    freqDist() {
      const frequency = {};
      this.data.forEach(item => frequency[item] = (frequency[item] || 0) + 1);
  
      const distArray = [];
      for (const [key, value] of Object.entries(frequency)) {
        distArray.push([value * 100 / this.count(), Number(key)]);
      }
  
      return distArray.sort((a, b) => b[0] - a[0]);
    }
  }
  
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  const statistics = new Statistics(ages);
  
  console.log('Count:', statistics.count()); // 25
  console.log('Sum: ', statistics.sum()); // 744
  console.log('Min: ', statistics.min()); // 24
  console.log('Max: ', statistics.max()); // 38
  console.log('Range: ', statistics.range()); // 14
  console.log('Mean: ', statistics.mean()); // 29.76
  console.log('Median: ', statistics.median()); // 29
  console.log('Mode: ', statistics.mode()); // {'mode': 26, 'count': 5}
  console.log('Variance: ', statistics.variance()); // 17.14
  console.log('Standard Deviation: ', statistics.standardDeviation()); // 4.14
  console.log('Frequency Distribution: ', statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
  