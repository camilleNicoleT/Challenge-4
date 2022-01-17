var startSectionEl = document.querySelector("#start");

var startButtonEl = document.querySelector("#startbtn");

var timeLeftEl = document.querySelector("#timer");
var time = 60;
var questionsSectionEl = document.querySelector("#questions-section");
var questionNumber = 0;
var nextButtonEl = document.querySelector("#next");
var resultEl = document.querySelector("#result");
var playerObj = {};
var score = 0;
var highScore = 0;
var highScoreButtonEl= document.querySelector("#highScorebtn");
var highScoreEl = document.querySelector("#highScore");
var playerScorEl = document.querySelector("#playerScore");


var questions = [
  {
    question:
      "What operator is used to assign a value to a declared variable?",
    option1: "Colon (:)",
    option2: "Equal sign (=)",
    option3: "Double-equal (==)",
    option4: "Question mark (?)",
    correct: 2,
  },
  {
    question: "What are the six primitive data types in JavaScript?",
    option1: "sentence, int, truthy, bigInt, symbol, undefined",
    option2: "string, number, boolean, null, symbol, undefined",
    option3: "string, num, falsy, bigInt, symbol, undefined",
    option4: "sentence, float, data, bigInt, symbol, undefined",
    correct: 2,
  },
  {
    question: "What is the difference between && and ||?",
    option1:
      "The logical operator && returns true if both expressions are true while the logical operator || returns false if one expression or the other returns true.",
    option2:
      "The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true.",
    option3:
      "The logical operator && returns true if one expression is true while the logical operator || returns true if both expressions return true true.",
    option4:
      "The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true.",
    correct: 2,
  },
  {
    question: "How do we declare a conditional statement in JavaScript?",
    option1: "if...else",
    option2: "For loop",
    option3: "difference...between",
    option4: "While loop",
    correct: 1,
  },
  {
    question: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
    option1: "  0  ",
    option2: "  1  ",
    option3: "  3  ",
    option4: "  2  ",
    correct: 2,
  },
  {
    question: "How do we stop a for loop from repeating indefinitely?",
    option1: "A loop will stop executing when the condition is true.",
    option2: "A loop will stop executing when the condition is false.",
    option3: "When we have iterated through half of the condition.",
    option4: "We have to explicitly end the loop with the break keyword.",
    correct: 2,
  },
];

var timeCountdown = function () {
  var timeInterval = setInterval(function () {
    timeLeftEl.textContent = time;
    time--;
    if (time <= 0) {
      clearInterval(timeInterval);
      timeLeftEl.textContent = 0;
      window.alert("You ran out of time")
      questionsSectionEl.remove();
    }
  }, 1000);
     
}

var timeReduced = function () {  
    time-= 10
}

//When the button is clicked this function is called to start the timer and display the questions
function startQuiz() {
  startSectionEl.remove();

  timeCountdown();

  displayQuestion(questionNumber);
};


var displayQuestion = function (questionIndex) {
  var questionHeadingEl = document.createElement("h1");
  var optionsDivEl = document.createElement("div");
  var questionOptionEl = document.createElement("button");

  var questionDivEl = document.createElement("div");

  questionDivEl.className = "question";
  questionsSectionEl.append(questionDivEl);

  questionHeadingEl.textContent = questions[questionIndex].question;
  
  questionDivEl.append(questionHeadingEl);


  questionDivEl.appendChild(optionsDivEl);

  questionOptionEl = document.createElement("button");
  questionOptionEl.className = "options options1";
  questionOptionEl.textContent = questions[questionIndex].option1;
    if (questions[questionIndex].correct === 1) {
        questionOptionEl.setAttribute("id", "correct");
    } else {
        questionOptionEl.addClassName = "incorrect";
    }
  optionsDivEl.appendChild(questionOptionEl);

  questionOptionEl = document.createElement("button");
  questionOptionEl.className = "options option2";
  questionOptionEl.textContent = questions[questionIndex].option2;
    if (questions[questionIndex].correct === 2) {
        questionOptionEl.setAttribute("id", "correct");
    } else {
        questionOptionEl.addClassName = "incorrect";
    }
  optionsDivEl.appendChild(questionOptionEl);

  questionOptionEl = document.createElement("button");
  questionOptionEl.className = "options option3";
  questionOptionEl.textContent = questions[questionIndex].option3;
    if (questions[questionIndex].correct === 3) {
        questionOptionEl.setAttribute("id", "correct");
    } else {
        questionOptionEl.addClassName = "incorrect";
    }

  optionsDivEl.appendChild(questionOptionEl);

  questionOptionEl = document.createElement("button");
  questionOptionEl.className = "options option4";
  questionOptionEl.textContent = questions[questionIndex].option4;
    if (questions[questionIndex].correct === 4) {
        questionOptionEl.setAttribute("id", "correct");
    } else {
        questionOptionEl.addClassName = "incorrect";
    }
  optionsDivEl.appendChild(questionOptionEl);

  const btnOptions = document.getElementsByClassName('options');

  for(var i = 0; i < btnOptions.length; i++){
      btnOptions[i].addEventListener('click', function(){
        const btnId = this.getAttribute('id');
        if (btnId === 'correct'){
           resultEl.append('correct');
           score += 100
        } else {
            resultEl.append('incorrect');
            timeReduced();
        };
      });
    
    }
}

var stopGame = function() {
  window.alert("Quiz is over.");
  playerScore.append("Your score is: " + score);
  questionsSectionEl.remove();
  resultEl.remove();
  savedScore();
}

nextButtonEl.addEventListener("click", function() {
  questionNumber++;
  if (questionNumber <= 6) {
      displayQuestion(questionNumber);
 } else {
  stopGame(); 
}  
});

var newScore = function() {
  userName = window.prompt ("To save your score enter your name.");

//   var  = playerObj {
//   name: userName,
//   playersScore: score,
// }
}

var savedScore = function () {  
localStorage.getItem("highScore");
  if(score > 0){
    if(score > JSON.parse(localStorage.getItem("highScore"))) {
    localStorage.setItem(JSON.stringify(score), "highScore");
   newScore();
  } 
    highScore = (JSON.parse(localStorage.getItem("highScore")));
  }
};

highScoreButtonEl.addEventListener("click", function() {
  localStorage.getItem("highScore");
  console.log("highScore", JSON.stringify(highScore));
  highScoreEl.append(("highScore", JSON.stringify(highScore))+ " is the current high score");
});


startButtonEl.addEventListener("click", function() {
    startQuiz();
});