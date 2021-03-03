
// Elements from html that need to actived in js.

var $startPrompt = document.querySelector("start-prompt");

var $startBtn = document.querySelector('results');

var $questionPrompt = document.querySelector("question-prompt");

var $clock = document.querySelector("clock");

var storeScores = document.querySelector("storeScores");

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

// answer button
// if that was the last question 
// game is over 
// calculate UserScore






//click on the start button
$startBtn.addEventListener("click", function (e){
// hide start prompts
   $startPrompt.classList.add("hide");
// show our question prompt
  $questionPrompt.classList.remove("hide");
  //update the content with our current question text
  $questionText.textContent = myQuestions[0]. text; 
  //render the options
  myQuestions[0].options.forEach(function(item){
    //create a html button
    var $btn= document.createElement("button");
    //set the text of that button to be our current item
    $btn.textContent = item;
    //append it to our options div
    $questionOptions.append($btn); 
  });
}

  //display our timer
  //start our time}
  var secondsLeft = 30;

  function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
    secondsLeft--;
     $clock.textContent = secondsLeft;
  
    if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function for score sheet
        sendMessage();
      }
  
    }, 1000);
  }
// UPDATE for Scores and initials


//   // Function to create and append colorsplosion image
// //function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

}

//storing the scores & initials
function storeScore(){
   localStorage.setItem("storeScore", JSON.stringify(score))
}

scoreForm.addEventListener("submit", function(event) {
   event.preventDefault();
  
  //var todoText = todoInput.value.trim();
  // if (todoText ===""){
  //  return; 
  }

  //dodos.push(todoText); 
  //indoInput.value = "",

  //storeScores();
  //renderScores();

}
  
  
  
  
)