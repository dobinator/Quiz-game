
// Elements from html that need to activated in js.

var $startPrompt = document.querySelector("#start-prompt");
var $startBtn = document.querySelector('#results');
var $clock = document.querySelector("#clock");
var storeScores = document.querySelector("#storeScores");
var scoreForm= document.getElementById ("btn");
var $questionText= document.getElementById("question-text");
var $questionsOption = document.querySelector("#questions-option");
var questionPrompt = document.getElementById ("question-prompt")
var timeLeft= 60;
var isWin= false ;
var scoreCounter= 0; 
var questionIndex = 0; 
var secondsLeft = 100;
//questions for the game
const myQuestions =[

  {question:"A JavaScript file has an extension of?",
  correctAnswer: ".js",
  answers: [".Java", ".js", ".javascript", "xml",]
},

 {question: "IsNaN() Evalutes And Argument To Determine if Given Value?",
  correctAnswer: "Is Not a Number",
  answers: [
    "Is Not a Null",
     "Is Not a Number", 
     "Is Not a New Object", 
     "None of the above",],
  },


  {question: "Function is Used To Parse a String To Int?",
  correctAnswer:"Int.Parse",
    
  answers: 
        ["Integer.Parse", 
        "Int.Parse",
        "Parse.Int", 
        "None"]
  },


 {question: "Which Of The Dialog Box Display a Message And a Data Entry Field?",
   
   correctAnswer:"Prompt", 
   answers: 
          ["Alert()",
            "Prompt()", 
            "Confirm()"]

  }, 
    
   {question: "Event is Used To Check An Empty Text Box?",
   
   correctAnswer:"onClick()", 

   answers: 
      ["onClick()",
       "OnFocus()",
       "OnBlur()", 
       "None"]

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





 



  


  


    

    

   







