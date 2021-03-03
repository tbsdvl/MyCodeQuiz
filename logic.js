// Code Quiz

// Variables
var time = 10;
var startButton = document.querySelector("#start");
var secondsLeft = document.querySelector("#seconds");

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
        };
    }, 1000);
});

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