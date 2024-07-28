var displayQuestion = function (questionAndAnswer) {
    var options = ["A", "B", "C", "D", "E"];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(function (answer, i) {
        console.log(options[i] + " - " + answer);
    });
};

var question1 = {
    question: "What is the capital of France?",
    answers: [
        "Bordeaux",
        "F",
        "Paris",
        "Brussels"
    ],
    correctAnswer: "Paris"
};

var question2 = {
    question: "Which planet is known as the Red Planet?",
    answers: [
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn"
    ],
    correctAnswer: "Mars"
};

var question3 = {
    question: "What is the largest ocean on Earth?",
    answers: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean"
    ],
    correctAnswer: "Pacific Ocean"
};

// Create an array with your question objects
var questions = [question1, question2, question3];

// Use forEach to call displayQuestion on each of your questions
questions.forEach(displayQuestion);

// To display a particular question, type in the console: displayQuestion(questions[index])
// Example: displayQuestion(questions[1])
