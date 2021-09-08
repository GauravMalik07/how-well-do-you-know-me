var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Gaurav",
    score: 5,
  },

  {
    name: "Arijit",
    score: 3,
  },
];

// array of objects
var questions = [
  {
    question: "Where does Gaurav  currently live? ",
    answer: "Kanpur",
  },
  {
    question: "His favorite Sports Person would be? ",
    answer: "Rohit Sharma",
  },
  {
    question: "Where does he work? ",
    answer: "Anonymous",
  },
  {
    question: "His fav Singer would be? ",
    answer: "Arijit",
  },
  {
    question: "His fav Rapper would be? ",
    answer: "Dino James",
  },
];

function welcome() {
  var userName = readlineSync.question("What's your name Buddy? ");

  console.log("Welcome " + userName + " , DO YOU KNOW GAURAV?");
}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    // branching
    console.log("You were right!");
    score = score + 1;
  } else {
    console.log(" You were wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log(
    "Check out the high scores, if you should be there ping me and I'll update it"
  );

  highScores.map((score) => console.log(score.name, " : ", score.score));
}

welcome();
game();
showScores();
