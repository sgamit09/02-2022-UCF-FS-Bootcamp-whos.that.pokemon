var whoThat = document.getElementById("image");
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const countdownEl = document.getElementById('countdown');
// scoring is based on timer
const scoring = document.getElementById('score');
let currentIndex = 0;//Current Question Index
let time = 60;
var playerCount = 1;

var pokemonz = [
  "https://pm1.narvii.com/7022/a2550c092a3bbc14d6ba569a9a0425988339d1a4r1-1038-576v2_00.jpg",
  "https://www.outcyders.net/images/quizzes/4/question10.jpg",
  "https://i.ytimg.com/vi/shZiorhXsuA/maxresdefault.jpg",
]

var answerChoices = [
  {
    a: [{ text: "Pikachu", correct: "Eevee" },
    { text: "Eevee", correct: "Eevee" }]
  },
  {
    a: [{ text: "Clefairy", correct: "Clefairy" },
    { text: "Chansey", correct: "Clefairy" }]
  },
  {
    a: [{ text: "Dat Boi", correct: "Dat Boi" },
    { text: "Kermit", correct: "Dat Boi" }]
  }
]

  startScreen();

  function startScreen() {
    document.getElementById('score').style.display = 'none';
    document.getElementById('op1').style.display = 'none';
    document.getElementById('op2').style.display = 'none';

  }
  document.getElementById("start-btn").addEventListener('click', start);

  function firstQuestion() {
    whoThat.src = pokemonz[currentIndex];
    op1.innerText = answerChoices[currentIndex].a[0].text;
    op2.innerText = answerChoices[currentIndex].a[1].text;
  }

  //start button function
  function start() {
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('op1').removeAttribute("style");
    document.getElementById('op2').removeAttribute("style");
    next();
    var countdown = setInterval(function () {
      if (time > 0) {
        let seconds = time;
        countdownEl.innerText = seconds;
        time--;
      } else {
        countdownEl.innerText = '0:00';
        clearInterval(countdown);
      }
    }, 1000);

  }


  //event listener click to call start function
  document.getElementById("start-btn").addEventListener('click', start);

  function next() {
    if (currentIndex >= pokemonz.length)
      currentIndex = 0; //looping statement   
    whoThat.src = pokemonz[currentIndex];
    op1.innerText = answerChoices[currentIndex].a[0].text
    op2.innerText = answerChoices[currentIndex].a[1].text;
    currentIndex++;
  }


  //Event Listener to call evaluate function
  document.querySelector(".option-container").addEventListener("click", evaluate);

  function evaluate(e) {
    console.log(e.target.innerText); //checks which answer was chosen
    console.log(answerChoices[currentIndex - 1].a[0].correct)
    console.log(currentIndex);
    console.log(pokemonz.length);
    if (currentIndex != pokemonz.length) {
      if (e.target.innerText === answerChoices[currentIndex-1].a[0].correct) {
        console.log("correct");
        //display "correct" 
        next();
      } else {
        time = time - 10;
        console.log("incorrect");
        //display "incorrect" 
        next();
      }
    } else {
      finish();
    }
  }

  function finish() {
    document.getElementById('countdown').style.display = 'none';
    saveHighscore();
    // initials = window.prompt("Insert Initials for Scoring")
  }

function saveHighscore() {
  // get value of input box
  var name = window.prompt("Insert Initials for Scoring");
  var initials = name.toUpperCase();

  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = `${initials}: ${countdownEl.innerText} points`;
  
    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    window.open("highscores.html");

    //refreshes quiz
    window.location.href = "index.html" 


  }
}
