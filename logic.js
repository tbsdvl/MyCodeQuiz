// Code Quiz

// Variables and Objects
var time = 10;
var clickCount = 0;
var winCount = 0;
var lossCount = 0;
var startButton = document.querySelector("#start");
var secondsLeft = document.querySelector("#seconds");
var answersBox = document.querySelector("#answers");
var questionBox = document.querySelector("#quizquestion");
var submitEl = document.querySelector("#submit");
var initials = document.querySelector("#initials");
var wins = document.querySelector("#wins");
var lose = document.querySelector("#losses");

var quizQuestions = {
    q1: "How would one begin and end a multiline comment inside a JavaScript file?",
    q2: "What is the syntax for a conditional ternary operator?",
    q3: "Which of the following is an example of currying a function?",
    q4: "What are the three main components of Behavior Driven Development?",
    end: "Here are your results!"
};

var questionCount = 0;

var quizChoices = {
    choices1: ["<<  >>", "/*  */", "*|  |*", "#/  #/"],
    choices2: ["x.ternary(x,y)", "x(true) y(false)", "! x : y !", "? x : y"],
    choices3: ["curry(f)", "function curry(){}", "_.curry(f)", "function(curry)"],
    choices4: ["tests, documentation, examples", "Larry, Curly, Moe", "Mocha, functions, practicality", "Me, myself, I"]
};

var buttons = {
    button1: document.querySelector("#answer1"),
    button2: document.querySelector("#answer2"),
    button3: document.querySelector("#answer3"),
    button4: document.querySelector("#answer4")
};

// asnwerPopulate functions insert quizChoice text into answer buttons 
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

// If the user chooses the correct answer, the win score increases by 1
function win(){
    wins.textContent = winCount + 1;
};

// If the user chooses the incorrect answer, the lose score increases by 1
function losses(){
    lose.textContent = lossCount + 1;
}

// Resets the timer to 10 if the countdown reaches zero
function timeZero(){
    if(time === 0){
        time = 10;
    }
}

// Resets the time to 10 if the user clicks an answer before a complete countdown
function timeSet(){
    time = 10;
}

// Stores the user's initials, win score, and lose score to local storage
function storeData(e){
    e.preventDefault();
    wins.textContent = wins;
    lose.textContent = lose;
    localStorage.setItem("initials", initials.value);
    localStorage.setItem("wins", wins);
    localStorage.setItem("losses", lose);
}

// Starts the quiz upon clicking of the start button
function startQuiz(){
    questionBox.textContent = (JSON.stringify(quizQuestions.q1));
    var quizTimer = setInterval(function() {
        secondsLeft.textContent = (--time + " Seconds left.");
        console.log(time);
        if(time === 1){
            secondsLeft.textContent = (time + " Second left.")
        }else if(time === 0){
            timeZero();
            clearInterval(quizTimer);
        };
    }, 1000);
    answerPopulate();
};

// Start button listens for a click event
startButton.addEventListener("click", startQuiz);

// Submit button listens for a click event
submitEl.addEventListener("click", storeData);

// This logic tells the quiz to display the next question's text once the user has chosen an answer
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
        }
    });

    // These button event listeners will update the win score in the case of a user choosing the correct answer
    buttons.button2.addEventListener("click", function(){
        if(buttons.button2.textContent === quizChoices.choices1[1]){
            timeSet();
            win();
        };
    });
    
    buttons.button4.addEventListener("click", function(){
        if(buttons.button4.textContent === quizChoices.choices2[3]){
            if(wins.textContent === "1"){
                timeSet();
                wins.textContent = 2;
            }else {
                timeSet();
                win();
            }
        };
    });

    buttons.button3.addEventListener("click", function(){
        if(buttons.button3.textContent === quizChoices.choices3[2]){
            if(wins.textContent === "2"){
                timeSet();
                wins.textContent = 3;
            }else if(wins.textContent === "1"){
                timeSet();
                wins.textContent = 2;
            }else if(wins.textContent === "0"){
                timeSet();
                wins.textContent = 1;
            }
        }
    });
    
    buttons.button1.addEventListener("click", function(){
        if(buttons.button1.textContent === quizChoices.choices4[0]){
            if(wins.textContent === "3"){
                timeSet();
                wins.textContent = 4;
            }else if(wins.textContent === "2"){
                timeSet();
                wins.textContent = 3;
            }else if(wins.textContent === "1"){
                timeSet();
                wins.textContent = 2;
            }else if(wins.textContent === "0"){
                timeSet();
                wins.textContent = 1;
            };  
        };
    });
};