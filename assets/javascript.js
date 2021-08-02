
// Elements from html that need to activated in js.
const $startPrompt = document.querySelector("#start-prompt");
const $startBtn = document.querySelector('#results');
const $clock = document.querySelector("#clock");
const storeScores = document.querySelector("#storeScores");
const scoreForm = document.getElementById ("btn");
const $questionText = document.getElementById("question-text");
const $questionsOption = document.querySelector("#questions-option");
const questionPrompt = document.getElementById ("question-prompt")
let timeLeft = 60;
let isWin = false;
let scoreCounter = 0; 
let questionIndex = 0; 
let secondsLeft = 100;
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
];

//start the game- "home page"
function startGame() {
// hide start prompts
  $startPrompt.classList.add("hide");
// show our question prompt
  questionPrompt.classList.remove("hide");
//update the content with current question
  $clock.textContent = timeLeft
  getQuestion();
  startTime();
}

function getQuestion() {
  $questionText.textContent = myQuestions[questionIndex].question;
  //render options
  myQuestions[questionIndex].answers.forEach(function(item) {
  //create a button for start
  var $btn= document.createElement("button");
  $btn.textContent = item;
  //myQuestions.answers.
  //listening to the click of the button
  $btn.addEventListener ("click", answers) 
  $questionsOption.appendChild($btn);
  //display the time "clock" on the game  
}); 
}

function answers(e){
  if (!e.target.matches("button")) return; 
  
  $questionPrompt= e.target; 
  if ($questionPrompts.textContent === questions(0).correctAnswer) {
    // would this be where I place the winner winner chicken dinner...
    //function displayMessage(){
    //Check if user was correct
    var val = e.target.textContent;
    if(val === myQuestions[questionIndex].correctAnswer){
//console log ("correct");
    } else {
      console.log ("wrong");
    }
   //Move to the next question
   questionIndex++;
   //make sure there is still more questions
   if (questionIndex === myQuestions.length){
     //we are out of questions
      //so end game
   }  else {
     //we have more questions
     getQuestion();
   }
  }


  //start the clock
  function startTime() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timerInterval = setInterval(function() {
  //as long as the 'timeLeft' is greater than 1
   if (timeLeft > 1){
    $clock.textContent = timeLeft;
    //decrement 'timeLeft' by 1.
    timeLeft--; 
   // if there is no time left
   }
    else if (timeLeft === 0) {
  //once 'timeLeft gets to 0, set '$clock' to an empty string
  $clock.textContent = "";
    // Stops execution of action at set interval
    clearInterval(timerInterval);
        // Calls function for score sheet
    //    displayMessage();
      }
  // where's the message go? 
    }, 1000);
  }
      startTime()
}

// creating a score function 
var score = function (){
 //user inputs the correct score, point increases by 1.
  if (input == answer) {
         correctAnswers = correct+1;
         //an alert is created to notify "correct"
         alert ("correct");
         // except if the answer is wrong a point is deducted ***( we need the timer to remove time)
  } else {
         incorrectAnswers = incorrect+1;
         alert ("incorrect"); 

  }
}; 
  
// UPDATE for Scores and initials
//storing the scores & initials


function endGame(){
   localStorage.setItem("score-card", JSON.stringify(score))
}

scoreForm.addEventListener("click", startGame) 


