var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;

    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");

planet1.showPlanet();

// Further Adventures

// 1) Create a second planet using the Planet constructor function
var planet2 = new Planet("Neptune", 8, "Ice Giant");

// 2) Call the showPlanet method on your newly created planet
planet2.showPlanet();
