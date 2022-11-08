// Variable Declarations
// Create variable objects. There should be 5 objects and in each object there should be a quiz question, an array of multiple-choice answers, and a correct answer
var questions = [
  {
    title: "Question 1: What's my name?",
    choices: ["Edyta", "Karen", "Payton Manning"],
    answer: "Edyta",
  },
  {
    title: "Question 2: How old am I?",
    choices: ["9", "101", "38"],
    answer: "38",
  },
  {
    title: "Question 3: Where do I live?",
    choices: ["Mars", "Parker CO", "Antarctica"],
    answer: "Parker CO",
  },
  {
    title: "Question 4: What's my favorite Mexican dish?",
    choices: ["Molcajetes", "Sesame Chicken", "Pierogi"],
    answer: "Molcajetes",
  },
  {
    title: "Question 5: What's my favorite code?",
    choices: ["HTML", "CSS", "JavaScript"],
    answer: "JavaScript",
  },
];

// Create document query selector to add to an html element
var questionContainer = document.querySelector(".questionContainer");
var btnEl = document.querySelector("#start-btn");
var ulText = document.querySelector("ul");

// Set a current index variable to zero because we will start with the first object and within that object we will start the first question, the first array of choices and the first answer.
var currentIndex = 0;

// Functions
// Create a function to display a question
function displayQuestions() {
  clearState();
  // Create an li element that will display choices for the each question
  var liEl = document.createElement("li");
  // Set innerText property to the li element in html so that each question displays the array choices on the webpage
  liEl.innerText = questions[currentIndex].title;
  // The appendChild method attaches the question and their choices together so that they both display on the page
  ulText.appendChild(liEl);
  // We have to call the function to displayQuestions in our event listener below because pressing the start button will trigger questions to be displayed.
  // Call the function displayAnswers in here because the answer choices are displayed with the questions.
  displayAnswers(questions[currentIndex]);
}

// Create a funtion to display answer choices for current question. We call the function in our displayQuestions function
function displayAnswers(currentQ) {
  // create a forEach method so that current answers for each question are displayed
  currentQ.choices.forEach((currentA) => {
    // Create a button element so that it interacts with the selectedAnswer function
    var button = document.createElement("button");
    button.innerText = currentA;
    ulText.appendChild(button);
    button.addEventListener("click", selectedAnswer);
  });
}
// Create varibale to keep score of correct answers
var correctAnswers = 0;

// Create a function to select answers which we call it in the display answer function in the button event listener
function selectedAnswer(event) {
  // Create variables for if statement below.
  var selectedButton = event.target.innerText;
  var correctAnswer = questions[currentIndex].answer;
  // if statement is to alert user if they selected a correct or wrong answer
  if (selectedButton == correctAnswer) {
    alert("Correct");
    correctAnswers++;
    // console.log("currentScore:" + correctAnswers)
  } else {
    alert("Wrong");
    timeLeft = timeLeft - 5;
    // timeLeft -= 5 (same as above)
  }
  //We are adding +1 every time an answer is selected so that it goes to the next question
  currentIndex++;
  // Call nextQuestion function from below so that it cycles through the set of questions
  nextQuestion();
}

// Create a function that will cycle through the questions
function nextQuestion() {
  // create an if statement so that once we get to the last question we can alert user that the quiz is over
  if (questions[currentIndex] !== undefined) {
    displayQuestions(questions[currentIndex]);
  } else {
    clearInterval(timerInterval);
    alert("End of Quiz");
    showInitialsContainer();
  }
}

// Create a funtion to clear the previous quesion when an answer is submitted
function clearState() {
  // Use remove method in the ul element which includes my objects
  ulText.remove();
  var ul = document.createElement("ul");
  ulText = ul;
  questionContainer.appendChild(ul);
}

// Create timer class element and a 90 second countdown
var timerEl = document.querySelector(".timer");
var timeLeft = 90;
var timerInterval;
// Create a timer function that starts when the start button is pressed
function setTime() {
  // Create a timer interval function that counts down from 90 seconds until it reaches zero in 1 second intervals
  timerInterval = setInterval(function () {
    timeLeft--;

    // Create text that displays on the web page with seconds left
    timerEl.textContent = "Time Remaining: " + timeLeft + " seconds left";

    // Create if statement so that a message is displayed once timer reaches zero
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // Call sendMessage function
      sendMessage();
      showInitialsContainer();
    }

    // Use 1000 for seconds
  }, 1000);
}

// Create a function that will display a message once timer reaches zero seconds
function sendMessage() {
  timerEl.textContent = "No more time left. End of Quiz";
}

// Event Listeners
// Create an event listener to start quiz by pressing the start button.
btnEl.addEventListener("click", function () {
  // Create a start-game id varibale. Then use the classList property which allows you to add the hidden feature in CSS.
  var startGameContainer = document.querySelector("#start-game");
  startGameContainer.classList.add("hidden");

  // Call the function from above to display the questions.
  displayQuestions();

  // Call setTime function locally inside the event listener so that timer only starts when start button is pressed/clicked
  setTime();
});

// Create a function to save correct answer score
function showInitialsContainer() {
  clearState();
  var initialContainer = document.querySelector(".initial-container");
  initialContainer.classList.remove("hidden");
}

// Add event listener to the save initials button
var saveButton = document.querySelector("#save-initials");

saveButton.addEventListener("click", function () {
  var savedInitials = document.querySelector("#initials").value;
  var initials = { initials: savedInitials, score: count };
  localStorage.setItem("initials", JSON.stringify(initials));
  displayScore();
});

// create a function to display correct answers score

var count = localStorage.getItem("counter");

function displayScore() {
  var counter = document.querySelector("#counter");
  counter.textContent = "Correct Answers: " + count;
  localStorage.setItem(initials, count);
  correctAnswers++;
}
