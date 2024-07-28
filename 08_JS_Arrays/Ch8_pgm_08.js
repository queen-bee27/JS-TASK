var items = ["The Pyramids", "The Grand Canyon", "Bondi Beach"];

var showItems = function () {
    console.log("Dream destinations:");
    console.log("Number of places to visit: " + items.length);
    items.forEach(function (item) {
        console.log(" – " + item);
    });
};

showItems();
