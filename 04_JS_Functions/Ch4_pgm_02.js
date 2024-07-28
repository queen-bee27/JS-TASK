var movie1;
var movie2;
var movie3;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

movie4 = {
    title: "Valimai",
    actors: "Aijth Kumar",
    directors:"H. Vinoth"
}

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");

console.log("Movie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");

var event1 = {
    title: "Team Meeting",
    location: "Conference Room A",
    date: "2024-07-05",
    time: "09:00 AM"
};

var event2 = {
    title: "Lunch with Client",
    location: "Restaurant XYZ",
    date: "2024-07-05",
    time: "12:30 PM"
};

var event3 = {
    title: "Webinar: New Product Launch",
    location: "Online",
    date: "2024-07-06",
    time: "10:00 AM"
};

console.log("\nCalendar Event information:");
console.log("------------------------------");
console.log("Event 1: " + event1.title + ", Location: " + event1.location + ", Date: " + event1.date + ", Time: " + event1.time);
console.log("Event 2: " + event2.title + ", Location: " + event2.location + ", Date: " + event2.date + ", Time: " + event2.time);
console.log("Event 3: " + event3.title + ", Location: " + event3.location + ", Date: " + event3.date + ", Time: " + event3.time);
console.log("------------------------------");