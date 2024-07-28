var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 2;

console.log(days[dayInWeek]); // Display "Wednesday"
console.log(days[dayInWeek - 1]); // Display "Tuesday"

// Function to get the day of the week
var getDay = function(dayIndex) {
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    return days[dayIndex];
};

console.log(getDay(4)); // Display "Friday"
