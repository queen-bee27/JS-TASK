var players;
var showArguments;

players = ["Dax", "Jahver", "Kandra"];

// Add two more names to the players array
players.push("Lexa");
players.push("Orin");

showArguments = function (item, index, wholeArray) {
    console.log("Item: " + wholeArray[index]); // Using wholeArray and index
    console.log("Index: " + index);
    console.log("Array: " + wholeArray);
};

players.forEach(showArguments);
