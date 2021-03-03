// Code Quiz

// Variables
var time = 10;
var startButton = document.querySelector("#start");
var secondsLeft = document.querySelector("#seconds");
var answersBox = document.querySelector("#answers");
var quizQuestions = {
    q1: "How would one begin and end a multiline comment inside a JavaScript file?",
    q2: "What is the syntax for a conditional ternary operator?",
    q3: "Which of the following is an example of a curry function?",
    q4: "What are the three main components of Behavior Driven Development?"
};
var quizChoices = {
    choices1: ["//, \\", "/*, */", "*|, |*", "#/, #/"]
};


// LOGIC
// click the start button
//     timer starts
//     I am presented with a question

startButton.addEventListener("click", function() {
    var quizTimer = setInterval(function() {
        secondsLeft.textContent = (--time + " Seconds left.");
        console.log(time);
        if(time === 1){
            secondsLeft.textContent = (time + " Second left.")
        }else if(time === 0){
            clearInterval(quizTimer);
            // time = 10
            // quizTimer.textContent = "10 Seconds left.";
        };
    }, 1000);
    answerPopulate();
});

// Populate answer buttons with choices
function answerPopulate(){
for(i in answersBox.children){
    answersBox.children[i].textContent = JSON.stringify(quizChoices.choices1[i]);
    };
};


// answer a question

//     presented with another question

// if i answer a question incorrectly
//     time is subtracted from the clock

// if all questions are answered or the timer reaches 0
//     game is over
//         ask for user initials
//         save initials and score

// HTML Elements
// start button
//     title and explanation

// timer area

// question area
//     answer area
//     4 different answer buttons

// score area

// game over area