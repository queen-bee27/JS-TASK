var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];

    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };

    this.addMoon = function (moon) {
        this.moons.push(moon);
    };

    this.removeMoon = function () {
        if (this.moons.length > 0) {
            return this.moons.pop();
        } else {
            console.log("No moons to remove.");
        }
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");

planet1.addMoon("Io");
planet1.addMoon("Europa");

planet1.showPlanet();

// Further Adventures

// 1) Create a second planet
var planet2 = new Planet("Neptune", 8, "Ice Giant");

// 2) Add three moons to the second planet
planet2.addMoon("Triton");
planet2.addMoon("Nereid");
planet2.addMoon("Proteus");

// 3) Call the showPlanet method on the second planet
planet2.showPlanet();

// 4) Add a removeMoon method that removes the last moon from the moons array
planet2.removeMoon();

// Show the updated moons after removing one
console.log("After removing a moon:");
planet2.showPlanet();
