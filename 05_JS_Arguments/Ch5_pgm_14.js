var showPlayerName = function (playerName) {
    console.log(playerName);
};

var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

var showLine = function (length) {
    var line = "----------------------------------------"; // Long string of dashes
    console.log(line.substring(0, length));
};

var showLineWithAsterisks = function (length) {
    var line = "****************************************"; // Long string of asterisks
    console.log(line.substring(0, length));
};

var showPlayerInfo = function (player) {
    console.log("");

    showLineWithAsterisks(player.name.length + 4);
    console.log("* " + player.name + " *");
    showLineWithAsterisks(player.name.length + 4);

    console.log("");

    showPlayerPlace(player.name, player.place);
    showPlayerHealth(player.name, player.health);

    console.log("");
};

var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo(player1);
showPlayerInfo(player2);
