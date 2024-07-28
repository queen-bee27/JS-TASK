var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

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
    directors: "J.J. Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();


var question1 = {
    question: "What is the capital of France?",
    options: ["A) Paris", "B) London", "C) Berlin", "D) Madrid"]
};

var question2 = {
    question: "What is the largest planet in our solar system?",
    options: ["A) Earth", "B) Mars", "C) Jupiter", "D) Saturn"]
};

var question3 = {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["A) Harper Lee", "B) J.K. Rowling", "C) Ernest Hemingway", "D) Mark Twain"]
};

var showQuizQuestion;
showQuizQuestion = function () {
    console.log("Quiz Question: " + question.question);
    console.log("------------------------------");
    for (var i = 0; i < question.options.length; i++) {
        console.log(question.options[i]);
    }
    console.log("------------------------------");
};

var question;

question = question1;
showQuizQuestion();

question = question2;
showQuizQuestion();

question = question3;
showQuizQuestion();
