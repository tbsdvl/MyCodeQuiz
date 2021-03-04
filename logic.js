// Code Quiz

// Variables and Objects
var time = 10;
var clickCount = 0;
var startButton = document.querySelector("#start");
var secondsLeft = document.querySelector("#seconds");
var answersBox = document.querySelector("#answers");
var questionBox = document.querySelector("#quizquestion");
var wins = document.querySelector("#wins");
var lose = document.querySelector("#losses");

var quizQuestions = {
    q1: "How would one begin and end a multiline comment inside a JavaScript file?",
    q2: "What is the syntax for a conditional ternary operator?",
    q3: "Which of the following is an example of a curry function?",
    q4: "What are the three main components of Behavior Driven Development?",
    end: "Here are your results!"
};

var questionCount = 0;

var quizChoices = {
    choices1: ["<<  >>", "/*  */", "*|  |*", "#/  #/"],
    choices2: ["Gobbledygook", "feeeemfa", "hhugghg", "qtjioew"],
    choices3: ["a", "b", "c", "d"],
    choices4: ["w", "x", "y", "z"]
};

var buttons = {
    button1: document.querySelector("#answer1"),
    button2: document.querySelector("#answer2"),
    button3: document.querySelector("#answer3"),
    buttons4: document.querySelector("#answer4")
};

// LOGIC
// click the start button
//     timer starts
//     I am presented with a question

startButton.addEventListener("click", function() {
    questionBox.textContent = (JSON.stringify(quizQuestions.q1));
    var quizTimer = setInterval(function() {
        secondsLeft.textContent = (--time + " Seconds left.");
        console.log(time);
        if(time === 1){
            secondsLeft.textContent = (time + " Second left.")
        }else if(time === 0){
            clearInterval(quizTimer);
        };
    }, 1000);
    answerPopulate();
});

// Populate answer buttons with choices
function answerPopulate() {
for(i in answersBox.children){
    answersBox.children[i].textContent = quizChoices.choices1[i];
    };
};

function answerPopulate1() {
    for(i in answersBox.children)
    answersBox.children[i].textContent = quizChoices.choices2[i];
};

function answerPopulate2() {
    for(i in answersBox.children)
    answersBox.children[i].textContent = quizChoices.choices3[i];
};

function answerPopulate3() {
    for(i in answersBox.children)
    answersBox.children[i].textContent = quizChoices.choices4[i];
};

// answer a question
// presented with another question
for(i in Object.entries(buttons)){
    Object.entries(buttons)[i][1].addEventListener("click", function() {
        questionBox.textContent = Object.entries(quizQuestions)[++questionCount][1];
        clickCount = ++clickCount;
        if(clickCount === 1){
            answerPopulate1();
        }else if(clickCount === 2){
            answerPopulate2();
        }else if(clickCount === 3){
            answerPopulate3();
        };
    });
};

// if i answer a question incorrectly
// function answerResult() {
//     Object.entries(buttons)[i][1].addEventListener("click", function() {

//     }
//     })
// }

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