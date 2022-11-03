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

// Create document query selector to add to an html element
var questionContainer = document.querySelector(".questionContainer");
var btnEl = document.querySelector(".btn");
var ulText = document.querySelector("ul");


// Create varibales to keep score
var correctAnswers = 0;
var wrongAnswers = 0;

// Set a current index variable to zero because we will start with the first object and within that object we will start the first question, the first array of choices and the first answer.
var currentIndex = 0;

// how do I present the first question on the page?
// Functions
// Create a function to display a question
function displayQuestions() {       
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

// Create a funtion to display answer choices from the varibale objects. We call the function in our displayQuestions function
function displayAnswers(currentQ) {
    // Call the clearState function in here because every time you click an answer/choice, it will then clear those buttons so that it can display the next set of buttons with answers/choices
    clearState();
    // 
    currentQ.choices.forEach((currentA) => {
        console.log(currentA);
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
    // console.log(correctAnswer)
    // if statement is to alert user if they selected a correct or wrong answer
    if(selectedButton == correctAnswer) {
        alert("Correct")
    } else {
        alert("Wrong")
    };
    //
    currentIndex ++;    
    // Call next question function
    nextQuestion();
};

function nextQuestion() {
    if (questions[currentIndex] !== undefined) {
        displayQuestions(questions[currentIndex])
    } else {
        alert("End of Quiz")
    };
};

// Create a funtion to clear the answers/choices on the buttons for each mutliple choice answer
function clearState() {
    var buttonChoices = document.querySelector("button");
    buttonChoices.textContent = "";
};



// Event Listeners
btnEl.addEventListener("click", function() {
    // how can I present the first question in the array to the user?
    // Create a function that will display the question. Then create an event listener to start quiz by pressing the start button. Call the function frpm above to display the questions.
    displayQuestions();
});
