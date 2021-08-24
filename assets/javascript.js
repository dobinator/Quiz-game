
// Elements from html that need to activated in js.
const $startBtn = document.querySelector("#start-btn");
const $startPrompt = document.querySelector("#start-prompt");
const $clock = document.querySelector("#clock");
const $score = document.querySelector("#score"); 
const $questionText = document.querySelector("#question-text");
const $questionOptions = document.querySelector("#question-options");
const questionPrompt = document.querySelector ("#question-prompt");
const $highScoreBtn = document.querySelector('#high-score');
const $viewHighScore = document.querySelector('#high-score-view');
const $hideScoreBtn = document.querySelector('#hide-score'); 
const $resetBtn = document.querySelector('#reset-button');


let timeLeft = 100;
let scoreBoard = 0; 
let questionIndex = 0;

//questions for the game
const myQuestions =[

  { question:"A JavaScript file has an extension name of?",

    correctAnswer: ".js",

    answers: [
      ".Java",
       ".js", 
       ".javascript", 
       "xml"
      ]
},

 {  question: "IsNaN() stands for?",

  correctAnswer: "Is Not a Number",

  answers: [
    "Is Not a Null",
     "Is Not a Number", 
     "Is Not a New Object", 
     "None of the above"
    ]
  },


  { question: "Function that is used to parse a string to Int?",

    correctAnswer:"Int.Parse",
    
    answers: 
        ["Integer.Parse", 
        "Int.Parse",
        "Parse.Int", 
        "None"]
  },


 { question: "Which of the dialog box synatax is used to display a message and a data entry field?",
   
   correctAnswer:"Prompt", 

   answers: 
          ["Alert()",
            "Prompt()", 
            "Confirm()"
          ]

  }, 
    
   { question: "What event is used to check an empty text box?",
   
   correctAnswer:"onClick()", 

   answers: 
      [
        "onClick()",
       "OnFocus()",
       "OnBlur()", 
       "None"
      ]

  },

   { question: "Is JavaScript a case-sensitive language?", 
   
   correctAnswer:"True",
   
   answers: 
   [
    "True",
    "False"
   ]
  
  },

  { question: "How can you get the total number of arguments passed into a function?",

  correctAnswer: "Using arguments.length property",

    answers: [
    "Using args.length",
    "Using arguments.length property",
    "Both of the above",
    "None of the above",
]
},

{ question: " Which of the following type of variable takes precedence over others if names are the same?",

    correctAnswer: 
    "local variable",

    answers: [
    "global variable",
    "local variable",
    "both of the above",
    "none of the above",

]
},

{ question:" Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?",

correctAnswer: "toFixed()",

answers: [
      "toExponential()",
      "toFixed()",
      "toPrecision",
      "toLocaleString()",
]
},
{ question: "Which of the following function of Number object returns a string value version of the current number in a format that may vary according to a browser's locale settings?",

correctAnswer: "toLocaleString()",

answers: [
    "toExponential()",
    "toFixed()",
    "toLocaleString()",
    "toString()"

]
},
{ question: "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",

correctAnswer: "substr()",

answers: [
    "slice()",
    "split()",
    "substr()",
    "search()",
]
},
{ question: "Which of the following function of String object returns the calling string value converted to lower case?",
  correctAnswer: "toLowerCase()",

  answers: [
      "toLocalLowerCase()",
      "toLowerCase()",
      "toString()",
      "substring()"
  ]
},
];
//START game with event listener
$startBtn.addEventListener("click", function(e) {
  //clicking the start button will hide the prompt
  $startPrompt.classList.add("hide");
  //will show the question prompt
  questionPrompt.classList.remove("hide");
  // will show the timer
  $clock.classList.remove("hide");
  // show the score
  $score.classList.remove("hide");
//resetBtn
 $resetBtn.classList.remove("hide");
  startTime();
  getQuestion();

}); 
// issue with the function of $questionOptions...
function getQuestion() {
  // get the questions from the question array, rendering options
  $questionText.textContent = myQuestions[questionIndex].question;
// clears out the buttons after the click
  $questionOptions.innerHTML = " "; 
  myQuestions[questionIndex].answers.forEach(function (item) {
    let $btn = document.createElement("button");
    $btn.textContent = item;
    //myQuestions.answers.
    $questionOptions.append($btn);
    
  }); 
}

//listening to the click of the button
$questionOptions.addEventListener("click", function(e) {
  //if target value is incorrect exit early
  if (!e.target.matches("button")) return; 
  // val is equal to the click event target's textContent
  const val = e.target.textContent;
  if (val === myQuestions[questionIndex].correctAnswer) {
// add one to the score board
  scoreBoard++; 
//shows the score on the HTML
  $score.textContent = scoreBoard; 
} else {
// deduct time from timer 
timeLeft = timeLeft-20;
$clock.textContext = timeLeft; 
}
questionIndex++;
if (questionIndex === myQuestions.length) {
  //end game
  saveScore(); 
} else {
  getQuestion(); 
}
}); 


// SAVE SCORE FUNCTION
function saveScore() {
  // save value to local storage

  const userArray = [];
  const scoreArray = [];
  localStorage.setItem("Score", JSON.stringify(scoreBoard));
  //save user initials input
  const userName = prompt("Enter your initial to save score"); 
  localStorage.setItem("User", JSON.stringify(userName)); 
}
// VIEW SCORE Function
function viewScore() {
  $highScoreBtn.classList.remove('hide');
  $hideScoreBtn.classList.add('hide'); 
  let currentScore = localStorage.getItem("Score");
  let currentUser = localStorage.getItem("User"); //
  //print values on screen

  $viewHighScore.classList.remove('hide');
  let $scoreValue = document.createElement('p');
  $scoreValue.innerText = `${currentUser} earned a score of ${currentScore}`
  $viewHighScore.append($scoreValue)
}

/// Show and Hide the score buttons

$hideScoreBtn.addEventListener("click", function(){
  //hide
  $hideScoreBtn.classList.add("hide");
  $highScoreBtn.classList.remove("hide");
  $viewHighScore.innerHTML = ""; 
});

$highScoreBtn.addEventListener("click", viewScore); 

//TIMER
function startTime () {
  const timerInterval = setInterval(function(){
    if (timeLeft > 1) {
      $clock.textContent = timeLeft;
      timeLeft--;  
    } else if (timeLeft === 0 ) {
      $clock.textContent = '';
      clearInterval(timerInterval)
    }
    //
   }, 1000);
   return timeLeft; 
  }
 
  

 




