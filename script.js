// Questions & quiz
const quiz = [
    {
        text:"What is a good name for a dog?",
        answer:"Dog",
        choices:[
            "Dog",
            "Cat",
            "David",
            "Bob"
        ]
    },
    {
        text:"Why is the sky blue?",
        answer:"Cause I said so",
        choices:[
            "Due to oxygen",
            "There's water in the sky",
            "Cause I said so",
            "IDK"
        ]
    },
    {
        text:"When does the Sun hit the Earth?",
        answer:"8 1/3 mins",
        choices:[
            "When the Sun is on the horizon",
            "8 1/3 mins",
            "In a billion years",
            "1 sec"
        ]
    },
    {
        text:"Who is the greatest?",
        answer:"Me(me)",
        choices:[
            "You",
            "Me(me)",
            "Everyone",
            "Me(you)"
        ]
    }
];

// variables
let questionText = document.getElementsByClassName("question")[0];
let questions = document.querySelectorAll(".btn");
let nextBtn = document.getElementsByClassName("next")[0];
let resetBtn = document.getElementsByClassName("reset")[0];
let results = document.getElementsByClassName("results")[0];
let quizPage = document.getElementsByClassName("quiz_template")[0];
let endPage = document.getElementsByClassName("end")[0];

let quizNum = 0;
let checkpointNum = 0;
let points = 0;

// Adds onclick events onto each question & presents nextBtn
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function() {
        checkChoice(questions[i].value, i);
        nextBtn.style.display = "block";
    });
}

// Setting the first values
if (quizNum == 0) {
    nextQuiz();
}
// Setting the values for the quizes & clearing the colors
function nextQuiz() {
    questionText.innerHTML = quiz[quizNum].text;
    for (let i = 0; i < quiz[quizNum].choices.length; i++) {
        questions[i].style.background = "white";
        questions[i].value = quiz[quizNum].choices[i];
        questions[i].innerHTML = quiz[quizNum].choices[i];
    }
}

// Checks the user's choice & presents the 'next' btn
function checkChoice(selected, index) {
    if (checkpointNum == quizNum) {
        if (selected == quiz[quizNum].answer) {
            points++;
            questions[index].style.background = "lightgreen";
        } else {
            questions[index].style.background = "red";
        }
        checkpointNum++;
    }
}

// Adds onclick event onto the next btn & goes to quizPath()
nextBtn.addEventListener("click", function() {
    nextBtn.style.display = "none";
    quizPath();
});

// Determines whether to continue or leave the quiz
function quizPath() {
    quizNum++;
    if (quizNum >= quiz.length) {
        endQuiz();
    } else {
        nextQuiz();
    }
}

// Shows the end of the quiz
function endQuiz() {
    results.innerHTML = `You've scored ${points} out of ` + quiz.length
                        + ", that's " + Math.round(points / quiz.length * 100) + "%.";
    quizPage.style.display = "none";
    endPage.style.display = "block";
}


resetBtn.addEventListener("click", function() {
    endPage.style.display = "none";
    quizPage.style.display = "block";
    quizNum = 0;
    checkpointNum = 0;
    points = 0;
    nextQuiz();
});
