const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [{
  question: "When a copy constructor may be called?",
  choice1: "a) When an object of the class is returned by value.",
  choice2: "b) When an object of the class is passed (to a function) by value as an argument.",
  choice3: "c) When an object is constructed based on another object of the same class",
  choice4: "d) all of the above",
  answer: "4"
},{
  question: "We must use initializer list in a constructor when",
  choice1: "a) There is a reference variable in class.",
  choice2: "b) There is a constant variable in class.",
  choice3: "c) There is an object of another class. And the other class doesn’t have default constructor.",
  choice4: "d) all of the above",
  answer: "4"
},{
  question: "Constructors have _____ return type",
  choice1: "void",
  choice2: "char",
  choice3: "no",
  choice4: "int",
  answer: "3"
},{
  question: "Which of the followings is/are automatically added to every class, if we do not write our own.",
  choice1: "a)Copy constructor",
  choice2: "b)Assignment operator",
  choice3: "c)A constructor without parameter",
  choice4: "d)All of the above",
  answer: "4"
}
// ,
// {
//   "question": "What is the difference between struct and class in C++?",
//   "choice1": "a)All members of a structure are public and structures ",
//   "choice2": "b)Members of a class are private by default and  members",
//   "choice3": "c)All members of a structure are public and structures don’t have virtual functions",
//   "choice4": "d)All of the above",
//   "answer": "3"
// },{
//   "question": "Which of the following is true?",
//   "choice1": "a)All objects of a class share all data members of class",
//   "choice2": "b)Objects of a class do not share non-static members. Every object has its own copy.",
//   "choice3": "c)Objects of class do not share codes of non-static methods, they have their own copy",
//   "choice4": "d)None of the above",
//   "answer": "2"
// },{
//   "question": "A member function can always access the data in __________ , (in C++).",
//   "choice1": "a)The class of which it is member",
//   "choice2": "b)The object of which it is a member",
//   "choice3": "c)The public part of its class",
//   "choice4": "d)The private part of its class",
//   "answer": "1"
// },{
//   "question": "Which of the following is not correct for virtual function in C++",
//   "choice1": "a)Must be declared in public section of class.",
//   "choice2": "b)Virtual function can be static",
//   "choice3": "c)Virtual function should be accessed using pointers.",
//   "choice4": "d)Virtual function is defined in base class.",
//   "answer": "2"
// },{
//   "question": "Can destructors be private in C++?",
//   "choice1": "a)Yes",
//   "choice2": "b)No",
//   "answer": "1"
// },{
//   "question": "How can we restrict dynamic allocation of objects of a class using new?",
//   "choice1": "a)By overloading new operator",
//   "choice2": "b)By making an empty private new operator",
//   "choice3": "c)By making an empty private new and new [] operators",
//   "choice4": "d)By overloading new operator and new [] operators",
//   "answer": "3"
// },{
//   "question": "Which of the following operators cannot be overloaded",
//   "choice1": "a).(member access or dot operator)",
//   "choice2": "b)?:(Ternary or conditional operator)",
//   "choice3": "c):: (scope Resolution operator)",
//   "choice4": "d).*(pointer -to- member operator)",
//   "choice5": "e)All of the above",
//   "answer": "5"
// },{
//   "question": "Which of the following operators should be preferred to overload as a global function rather than a member method?",
//   "choice1": "a)Postfix++",
//   "choice2": "b)Comparison operator",
//   "choice3": "c)Insertion operator<<",
//   "choice4": "d)Prefix++",
//   "answer": "3"
]

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
