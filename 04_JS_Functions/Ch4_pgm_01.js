var movie1, movie2;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Docter, Ronaldo Del Carmen"
};

movie2 = {
    title: "Indian-2",
    actors: "Kamal hassan",
    directors: "Shankar"
};

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


var blogPost = {
    id: 1,
    title: "Introduction to JavaScript Objects",
    author: "Jane Doe",
    published: "2024-07-04",
    body: "Objects are fundamental in JavaScript, allowing us to organize and store data."
};

console.log("Blog Post information:");
console.log("------------------------------");
console.log("Title: " + blogPost.title);
console.log("Author: " + blogPost.author);
console.log("Published Date: " + blogPost.published);
console.log("Body: " + blogPost.body);
console.log("------------------------------");
