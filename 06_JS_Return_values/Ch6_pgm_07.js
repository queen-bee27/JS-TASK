var getPlayerName;

getPlayerName = function (playerName) {
    var prefix = "==== ";
    var suffix = " ====";
    return prefix + playerName + suffix;
};

console.log(getPlayerName("Kiki"));     // Output: ==== Kiki ====
console.log(getPlayerName("Mahesha"));  // Output: ==== Mahesha ====


//Including a border on the left when displaying the name:


var getPlayerName;

getPlayerName = function (playerName) {
    var border = "|";
    return border + "\n" + border + " " + playerName + "\n" + border;
};

console.log(getPlayerName("Jahver"));