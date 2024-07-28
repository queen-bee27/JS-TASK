var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));

// Push another item onto the array
items.push("Machu Picchu");

// Log the joined items
console.log(items.join(" and "));

// Set one of the items using square brackets
items[2] = "The Taj Mahal";

// Push more than one item at a time
items.push("The Great Wall of China", "Christ the Redeemer");

// Log the updated items
console.log(items.join(" and "));

// Display the final state of the array
console.log(items);
