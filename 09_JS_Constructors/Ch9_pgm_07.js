var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Nice"); // Further Adventure 1: Adding a fifth option

question1.showQuestion();

// Further Adventures

var question2 = new QuizQuestion(
    "Which planet is known as the Red Planet?",
    "Mars"
);

question2.addOption("Venus");
question2.addOption("Mars");
question2.addOption("Jupiter");
question2.addOption("Saturn");

var question3 = new QuizQuestion(
    "Who wrote the play 'Romeo and Juliet'?",
    "William Shakespeare"
);

question3.addOption("Charles Dickens");
question3.addOption("Jane Austen");
question3.addOption("William Shakespeare");
question3.addOption("Mark Twain");

