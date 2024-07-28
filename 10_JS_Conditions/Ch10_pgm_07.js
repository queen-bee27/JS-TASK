var getQuiz = function () {
    var score = 0,
        qIndex = 0,
        inPlay = true,
        questions,
        next,
        getQuestion,
        checkAnswer,
        getHint,
        submit;
      
    questions = [
      {
        question: "What is the highest mountain in the world?",
        answer: "Everest",
        hint: "It is located in the Himalayas."
      },
      {
        question: "What is the highest mountain in Scotland?",
        answer: "Ben Nevis",
        hint: "Its name means 'Venomous Mountain' in Gaelic."
      },
      {
        question: "What is the capital of France?",
        answer: "Paris",
        hint: "It is also known as the 'City of Light'."
      },
      {
        question: "What is the largest ocean on Earth?",
        answer: "Pacific",
        hint: "It is named after a word meaning 'peaceful'."
      }
    ];
    
    next = function () {
      qIndex = qIndex + 1;
      
      if (qIndex >= questions.length) {
        inPlay = false;
        console.log("You have finished the quiz.");
      }
    };
    
    getQuestion = function () {
      if (inPlay) {
        return questions[qIndex].question;
      } else {
        return "You have finished the quiz.";
      }
    };
    
    checkAnswer = function (userAnswer) {
      if (userAnswer === questions[qIndex].answer) {
        console.log("Correct!");
        score = score + 1;
      } else {
        console.log("No, the answer is " + questions[qIndex].answer);
      }
    };
    
    getHint = function () {
      if (inPlay) {
        return questions[qIndex].hint;
      } else {
        return "No hints available. You have finished the quiz.";
      }
    };
    
    submit = function (userAnswer) {
      var message = "You have finished the quiz.";
      
      if (inPlay) {
        checkAnswer(userAnswer);
        next();
        message = "Your score is " + score + " out of " + qIndex;
      }
        
      return message;
    };
    
    return {
      quizMe: getQuestion,
      submit: submit,
      helpMe: getHint
    };
};

var quiz = getQuiz();

// Example usage:
console.log(quiz.quizMe()); // What is the highest mountain in the world?
console.log(quiz.helpMe()); // It is located in the Himalayas.
console.log(quiz.submit("Everest")); // Correct! Your score is 1 out of 1.
console.log(quiz.quizMe()); // What is the highest mountain in Scotland?
