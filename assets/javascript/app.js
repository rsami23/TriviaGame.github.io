
// Declare Global Variables

// Number of seconds to run timer
var timer = 20;

var correctAnswers = [];
var wrongAnswers = [];
var wins = 0;
var losses = 0;
var quizQuestions = [
    {
        question: "Which superstar holds the most wins at Wrestlemania?",
        answers: [
            "John Cena",
            "Triple H",
            "Undertaker",
            "The Rock"
        ],
        rightAnswer: 2
    },
    {
        question: "In 2018 which UFC wrestler did WWE sign?",
        answers: [
            "Brock Lesner",
            "Ronda Rousey",
            "CM Punk",
            "The Rock"
        ],
        rightAnswer: "1"
    },
    {
        question: "Who destroyed the shield?",
        answers: [
            "Seth Rollins",
            "Stephanie McMahon",
            "The Miz",
            "Roman Reigns"
        ],
        rightAnswer: "0"
    },
    {
        question: "Which superstar was the first to win the Divas Championship in 2008?",
        answers: [
            "Nikki Bella",
            "Mickie James",
            "Natalya",
            "Michelle McCool"
        ],
        rightAnswer: "3"
    },
    {
        question: "What entrant number in the Royal Rumble has produced the most winners?",
        answers: [
            "30",
            "27",
            "15",
            "23"
        ],
        rightAnswer: "1"
    },
    {
        question: "The first ever Wrestlemania took place on March 31, 1985 at Madison Square Garen.",
        answers: [
            "True",
            "False"
        ],
        rightAnswer: "0"
    },
    {
        question: "What is Randy Orton's finisher?",
        answers: [
            "RKO",
            "Curb Stomp",
            "Swanton Bomb",
            "Crippler Crossface"
        ],
        rightAnswer: "0"
    },
    {
        question: "The Rock is related to which current WWE superstar?",
        answers: [
            "Uso Twins",
            "Roman Reigns",
            "Nia Jax",
            "All of the above"
        ],
        rightAnswer: "3"
    },
    {
        question: "Which female Wrestler was in D-Generation-X?",
        answers: [
            "Lita",
            "Chyna",
            "Trish Stratus",
            "Tori Wilson"
        ],
        rightAnswer: "1"
    },
    {
        question: "Who shaved Vince McMahon's head?",
        answers: [
            "Stone Cold",
            "The Rock",
            "Donald Trump",
            "Triple H"
        ],
        rightAnswer: "2"
    }
];

// Click event for Start button to show quiz
$("#start-button").click(startQuiz);

// document.querySelectorAll(".answer")


// Start first question after Start Button is clicked


// Set Timer to 30 sec per question


// Let the user know if they have selected the right answer (show a screen congratulating them)

// Or let the user know their answer is wrong

// After 30 min automatically move to the next question (slide)

// Set a message that says out of time if the question isnt answered after 30 sec 

// Then show the correct message

// Move onto the next question

// Create final screen showing user number of correct and wrong answers

// Give the option to restart the game without refreshing the page

function startQuiz() {
    $(".main-page-content").hide();
    $(".questions").show();
    nextQuestion();
    run();
};

var selectedQuestion = -1;

function nextQuestion(){
    selectedQuestion++;
   
    for (let i = 0; i < quizQuestions.length; i++) {
        
        if (selectedQuestion === i){
        var correctAnswer = quizQuestions[i].rightAnswer
        $("#questions-area").html("<h1 class='selectQuestion' data-answer="+ correctAnswer + "> Question: </h1> " + quizQuestions[i].question);
          
            for (let j = 0; j < quizQuestions[i].answers.length; j++){
                
                var answers = quizQuestions[i].answers[j];
                
                $("#answers").append("<button class='answer' data-choice="+ j + ">" + answers  + "</button>" );

            } 
        }    
    }

    var btnsArr = Array.from(document.querySelectorAll(".answer"));
    btnsArr.forEach(function(btn){
        btn.addEventListener("click", checkAnswer);
        
    })
};

function checkAnswer(e){
    var correctAnswer = $(".selectQuestion").attr("data-answer");
    
    var userChoice = $(e.target).attr("data-choice");
    if (correctAnswer === userChoice){
        correctAnswers.push(correctAnswer);
        displayScore();
        $(".scoreCard").css("display", "block");
        $(".answer").remove();
        timer = 20;
        run();
        nextQuestion();
    }else {
        wrongAnswers.push(userChoice);
        displayScore();
        $(".scoreCard").css("display", "block");
        $(".answer").remove();
        timer = 20;
        run();
        nextQuestion();
    }
    
}

function displayScore(){
    $(".correctAnswers").html(`<h3> Correct: ${correctAnswers.length} </h3>`);
    $(".wrongAnswers").html(`<h3> Wrong: ${wrongAnswers.length} </h3>`);
}

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {
 //  Decrease number by one.
  timer--;
 //  Show the number in the #show-number tag.
  $("#timer").html("<h2>  Timer: " + timer + "</h2>");
//  Once number hits zero...
  if (timer === 0) {
// Calling stop function
    stop();
    $(".answer").remove();
    timer = 20;
    run();
    nextQuestion();
    
  }
};

// Stops the timer from going backwards
function stop() {
    clearInterval(intervalId);
  };


