const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// Find a union b
const union = [...new Set([...a, ...b])];
console.log(union); // [3, 4, 5, 7, 8, 9]

// Find a intersection b
const intersection = a.filter(value => b.includes(value));
console.log(intersection); // [4, 5]

// Find a with b
const aWithoutB = a.filter(value => !b.includes(value));
console.log(aWithoutB); // [8, 9]
