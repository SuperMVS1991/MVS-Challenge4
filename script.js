var startButton = document.getElementById("startButton");
var timerEl = document.getElementById("time");
var startscreen = document.getElementById("start-screen");
let q = 0 
let score = 0; 
let timeLeft = 50
const element = document.getElementById("myBtn");
var submitButton = document.getElementById("submitButton");
var back = document.getElementById("go-Back");
var finalScore = [];

function startQuiz(){
    console.log("start button pressed");
    countdown()
    startscreen.classList.add("hide");
    showquestion(q)
}
//timer function
function countdown() {
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        //call end game function
        endgame()
      }
    }, 1000);
  }

function showquestion(q){
  if(q === questions.length) {
    endgame()
  } else {
var showQuestion = document.getElementById("showQuestion")
const question = document.createElement('p') 
question.textContent = ""
question.textContent = questions[q].askQuestion

showQuestion.appendChild(question)
questions[q].answers.forEach(answer => { 
	const button = document.createElement('button')
    button.innerText = answer
    console.log(answer)
    button.classList.add('btn')
    showQuestion.appendChild(button)
    button.addEventListener('click', answersing) 
}) 
  }
};
//end game function


function answersing() {
  console.log("function working")

  if (this.innerText === questions[q].correctAnswer) {
     console.log("correct")
     score++ 
     console.log(score) 
     q++
     showquestion(q)
  } else {
     console.log("wrong")  
     q++ 
     console.log("q being added", q); 
     showquestion(q)
     timeLeft -= 10
  }
}


function endgame() {
  console.log("endgame function working")
  window.location.href = "highscore.html?score=" + score;
} 



var questions = [
    {
    askQuestion: "this is question 1", 
    answers: ["a", "b", "c", "d"],
    correctAnswer: "a",
    },
    {
    askQuestion: "this is question 2", 
    answers: ["a", "b", "c", "d"],
    correctAnswer: "a",
    },
    {
    askQuestion: "this is question 3", 
    answers: ["a", "b", "c", "d"],
    correctAnswer: "a",
    }

]

var questionsIndex = 0;










function highScore() {
  var quarreyScore = window.location.search;
  console.log(quarreyScore)
  var score = quarreyScore.split("=")[1];
  document.getElementById("score").innerHTML = score;
  var initials = document.getElementById("name").value;
  console.log(initials)
  var row = document.createElement("div");
row.innerHTML = initials + " " + score;
document.getElementById("highscore").appendChild(row);}
function goBack() {
  window.location.href = "index.html";
}










if (startButton) {
  startButton.addEventListener("click", startQuiz);
}
submitButton.addEventListener("click", highScore);
back.addEventListener("click", goBack);