var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

// Add extra items to the array
items.push("Machu Picchu");
items.push("The Taj Mahal");
items[5] = "The Great Wall of China";
items[6] = "Christ the Redeemer";

// Update the showInfo function
showInfo = function (itemToShow) {
    console.log(itemToShow + " has " + itemToShow.length + " letters");
};

// Iterate over the array and show info
items.forEach(showInfo);

// Function to find the total number of letters
var totalLetters = function (itemsArray) {
    var total = 0;
    itemsArray.forEach(function (item) {
        total += item.length;
    });
    return total;
};

// Calculate and log the total number of letters
var total = totalLetters(items);
console.log("Total number of letters: " + total);
