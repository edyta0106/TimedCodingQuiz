// Variable Declarations
// Create variable objects. There should be 5 objects and in each object there should be a quiz question, an array of multiple choices, and a correct answer
var questions = [
    {
        title: "Question 1: What's my name?",
        choices: ["Edyta", "Karen", "Payton Manning"],
        answer: "Edyta"
    },
    {
        title: "Question 2: How old am I?",
        choices: ["9", "101", "38"],
        answer: "38"
    },
    {

        title: "Question 3: Where do I live?",
        choices: ["Mars", "Parker CO", "Antarctica"],
        answer: "Parker CO"
    },
    {
        title: "Question 4: What's my favorite Mexican dish?",
        choices: ["Molcajetes", "Sesame Chicken", "Pierogi"],
        answer: "Molcajetes"
    },
    {
        title: "Question 5: What's my favorite code?",
        choices: ["HTML", "CSS", "JavaScript"],
        answer: "JavaScript"
    }
];

// Create document query selector to add to an html element
var questionContainer = document.querySelector(".questionContainer");
var btnEl = document.querySelector("#start-btn");
var ulText = document.querySelector("ul");

// Create varibale to keep score of correct answers
var correctAnswers = 0;

// Set a current index variable to zero because we will start with the first object and within that object we will start the first question, the first array of choices and the first answer.
var currentIndex = 0;

// how do I present the first question on the page?
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
};

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
};

// Create a function to select answers which we call it in the display answer function in the button event listener
function selectedAnswer(event) {
    // Create variables for if statement below.
    var selectedButton = event.target.innerText;
    var correctAnswer = questions[currentIndex].answer;
    // if statement is to alert user if they selected a correct or wrong answer
    if(selectedButton == correctAnswer) {
        alert("Correct");
        correctAnswers ++
        // console.log("currentScore:" + correctAnswers)
    } else {
        alert("Wrong")
    };
    //We are adding +1 every time an answer is selected so that it goes to the next question
    currentIndex ++; 
    // Call nextQuestion function from below so that it cycles through the set of questions
    nextQuestion();
};

// Create a function that will cycle through the questions
function nextQuestion() {
    // create an if statement so that once we get to the last question we can alert user that the quiz is over
    if (questions[currentIndex] !== undefined) {
        displayQuestions(questions[currentIndex])
    } else {
        alert("End of Quiz")
    };
};

// Create a funtion to clear the previous quesion when an answer is submitted
function clearState() {
    // Use remove method in the ul element which includes my objects
    ulText.remove();
    var ul = document.createElement('ul');
    ulText = ul;
    questionContainer.appendChild(ul);
};

var timerEl = document.querySelector(".timer");
// var mainEl = document.getElementById("main");
var timeLeft = 90;

function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds left"; 

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        };
    }, 1000); 
};

function sendMessage() {
    timerEl.textContent = "No more time left. End of Quiz";
};
setTime()


// Event Listeners
btnEl.addEventListener("click", function() {
    // Create a start-game id varibale. Then use the classList property which allows you to add the hidden feature in CSS.
    var startGameContainer = document.querySelector("#start-game");
    startGameContainer.classList.add("hidden");
    // how can I present the first question in the array to the user?
    // Create a function that will display the question. Then create an event listener to start quiz by pressing the start button. Call the function frpm above to display the questions.
    displayQuestions();
});
