
// Elements from html that need to actived in js.

var $startPrompt = document.querySelector("start-prompt");

var $startBtn = document.querySelector('results');

var $questionPrompt = document.querySelector("question-prompt");

var $clock = document.querySelector("clock");

var storeScores = document.querySelector("storeScores");

document.getElementById ("scoreCard")= "Please enter your initials and score"; 
//questions for the game
var myQuestions =[

    {question:"Java Script File Has An Extension Of?",
   
    correctAnswer: ".js",

    answers: [".Java", ".js", ".javascript", "xml",]
    
    },

  {question: "IsNaN() Evalutes And Argument To Determine if Given Value?",
    
   correctAnswer: "Is Not a Number",

    answers: [
      "Is Not a Null", "Is Not a Number", "Is Not a New Object", "None of the above",],
    
   },

  {question: "Function is Used To Parse a String To Int?",
   
  correctAnswer:"Int.Parse",
    
  answers: ["Integer.Parse", "Int.Parse", "Parse.Int", "None"]

  },


 {question: "Which Of The Dialog Box Display a Message And a Data Entry Field?",
   
   correctAnswer:"Prompt", 
   
   
   answers: ["Alert()","Prompt()", "Confirm()"]

  }, 
    
   {question: "Event is Used To Check An Empty Text Box?",
   
   correctAnswer:"", 

   answers: ["Onclick()", "OnFocus()", "OnBlur()", "None"]

  },
   ];



//start the game- "home page"
function startQuestions(){
// hide start prompts
$startPrompt.classList.add("hide");
// show our question prompt
$questionPrompt.classList.remove("hide");
//update the content with current question
$questionText.textContent = questions[0], text;
//render options
questions[0].options.forEach(function(item) {
//create a button for start
var $btn= document.createElement("button");
$btn.textContent = item;
//listening to the click of the button
options.addEventListener ("click", answers) 
// 
$questionOptions.append($btn);
//display the time "clock" on the game 
startTime();
}); 
}


var secondsLeft = 100;
//start the clock
function startTime() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timerInterval = setInterval(function() {
//as long as the 'timeLeft' is greater than 1
 if (timeLeft >1){
  $clock.textContent = timeLeft;
  //decrement 'timeLeft' by 1.
  timeLeft--; 
 // if there is no time left
 }
 else(timeLeft === 0){
//once 'timeLeft gets to 0, set '$clock' to an empty string
$clock.textContent = "";
  // Stops execution of action at set interval
  clearInterval(timerInterval);
      // Calls function for score sheet
      displaymessage();
    }
// where's the message go? 
  }, 1000);
}

// would this be where I place the winner winner chicken dinner...
function displayMessage(){
var timeLeft= 0; 

// 
var storeScore= 


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
  
function answers(e){
$questionPrompt= e.target; 
if ($questionPrompts.textContent) === questions(0). correctAnswer{
}

} 

// UPDATE for Scores and initials
//storing the scores & initials
function storeScore(){
   localStorage.setItem("score-card", JSON.stringify(score))
}

scoreForm.addEventListener("submit", function(event) {
   
  event.preventDefault();
  

  }

}
