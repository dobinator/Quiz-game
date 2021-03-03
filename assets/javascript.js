
//var the questions and answers for the quiz. Elements from html that need to actived in js.

var $startPrompt = document.querySelector("start-prompt");

var $startBtn = document.querySelector('results');

var $questionPrompt = document.querySelector("question-prompt");

var $timer = document.querySelector('timer');

var storeScores = document.querySelector("storeScores");

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

//on submit, show results

submitButton.addEventListener("click", showResults);


$startBtn.addEventListener("click", function (e){
// hide start prompts
   $startPrompt.classList.add("hide");
// show our question prompt
  $questionPrompt.classList.remove("hide");
  //update the content with our current question text
  $questionText.textContent = questions[0]. text; 
  //render the options
  questions[0].options.forEach(function(item){
    //create a html button
    var $btn= document.createElement("button");
    //set the text of that button to be our current item
    $btn.textContent = item;
    //append it to our options div
    $questionOptions.append($btn); 
  }); 

  //display our timer
  //start our time

}
);


function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

var storeScores = [], 

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