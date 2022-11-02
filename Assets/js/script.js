// Variable Declarations
// Create variable objects. There should be 5 objects and in each object there should be a quiz question, an array of multiple choices, and a correct answer
var questions = [
    {
        title: "What's my name?",
        choices: ["Edyta", "Karen", "Payton Manning"],
        answer: "Edyta"
    },
    {
        title: "How old am I?",
        choices: ["9", "101", "38"],
        answer: "38"
    },
    {

        title: "Where do I live?",
        choices: ["Mars", "Parker CO", "Antarctica"],
        answer: "Parker CO"
    },
    {
        title: "What's my favorite Mexican dish?",
        choices: ["Molcajetes", "Sesame Chicken", "Pierogi"],
        answer: "Molcajetes"
    },
    {
        title: "What's my favorite code that we have learned so far?",
        choices: ["HTML", "CSS", "JavaScript"],
        answer: "JavaScript"
    }
];

// Create document query selector to add to html
var questionContainer = document.querySelector(".questionContainer");
var ulText = document.querySelector("ul");
var btnEl = document.querySelector(".btn");

// Create varibales to keep score
var correctAnswers = 0;
var wrongAnswers = 0;
var currentIndex = 0;

// how do I present the first question on the page?
// Functions

function displayQuestions()
{
        var liEl = document.createElement("li");
        liEl.innerText = questions[currentIndex].title;
        ulText.appendChild(liEl);
        displayAnswers(questions[currentIndex]);
};

function displayAnswers(currentQ) {
    clearState();
    currentQ.choices.forEach((currentA) => {
        console.log(currentA);
        var button = document.createElement("button");
        button.innerText = currentA;
        ulText.appendChild(button);
        button.addEventListener("click", selectedAnswer);
    });
};

function selectedAnswer(event) {
    var selectedButton = event.target.innerText;
    var correctAnswer = questions[currentIndex].answer;
    // console.log(correctAnswer)
    if(selectedButton == correctAnswer) {
        alert("Correct")
    } else {
        alert("Wrong")
    };
    currentIndex ++;    
    nextQuestion();
};

function nextQuestion() {
    if (questions[currentIndex] !== undefined) {
        displayQuestions(questions[currentIndex])
    } else {
        alert("Game Over")
    };
};

function clearState() {
    var buttonChoices = document.querySelector("button");
    buttonChoices.textContent = "";
};



// Event Listeners
btnEl.addEventListener("click", function() {
    // how can I present the first question in the array to the user?
    displayQuestions();
});
