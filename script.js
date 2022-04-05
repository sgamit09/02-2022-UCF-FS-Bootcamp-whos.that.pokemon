var whoThat = document.getElementById("image");
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const countdownEl = document.getElementById('countdown');
let acceptingAnswers = true;
let score = 0;
let currentIndex = 0;//Current Question Index
const startingMinutes = 0.5;
let time = startingMinutes * 60;

var pokemonz = [
  "https://pm1.narvii.com/7022/a2550c092a3bbc14d6ba569a9a0425988339d1a4r1-1038-576v2_00.jpg",
  "https://www.outcyders.net/images/quizzes/4/question10.jpg", 
  "https://i.ytimg.com/vi/shZiorhXsuA/maxresdefault.jpg",
]

var answerChoices = [
  { a: [{text: "Pikachu", correct: false},
        { text: "Eevee", correct: true}]},
  { a: [{ text: "Clefairy", correct: true},
        { text: "Chansey", correct: false}]},
  { a: [{ text: "Dat Boi", correct: true},
        { text: "Kermit", correct: false}]}
]


function startScreen (){
  document.getElementById('finish-btn').style.display='none';
  document.getElementById('next-btn').style.display='none';
  document.getElementById('op1').style.display='none';
  document.getElementById('op2').style.display='none';

}

startScreen();

document.getElementById("start-btn").addEventListener('click',start);

function firstQuestion(){
  whoThat.src=pokemonz[currentIndex];
  op1.innerText = answerChoices[currentIndex].a[0].text
  op2.innerText = answerChoices[currentIndex].a[1].text;
}


function start (){
  document.getElementById('start-btn').style.display='none';
  // document.getElementById('prev-btn').removeAttribute("style");
  document.getElementById('next-btn').removeAttribute("style");
  document.getElementById('op1').removeAttribute("style");
  document.getElementById('op2').removeAttribute("style");
  firstQuestion();
  var countdown = setInterval( function(){
  if(time > 0){
  const minutes = Math.floor(time/60); 
  let seconds = time % 60;
  countdownEl.innerText = `${minutes} : ${seconds} `;
  time--; } else {
    countdownEl.innerText = '0:00';
    clearInterval(countdown);
  }
}, 1000);

}

document.getElementById("start-btn").addEventListener('click',start);


// function prev(){
// currentIndex--;
// if(currentIndex < 0) currentIndex = lyrics.length - 1;
// whoThat.src=pokemonz[currentIndex];
// op1.innerText = answerChoices[currentIndex].a[0].text
// op2.innerText = answerChoices[currentIndex].a[1].text;
// }

// document.getElementById("prev-btn").addEventListener('click',prev);

document.getElementById("next-btn").addEventListener('click',next);

function next(){
  currentIndex++;
  console.log(currentIndex);
  if(currentIndex >= pokemonz.length)
  currentIndex = 0; //looping statement   
  whoThat.src=pokemonz[currentIndex];
  op1.innerText = answerChoices[currentIndex].a[0].text
  op2.innerText = answerChoices[currentIndex].a[1].text;
  if(currentIndex === 2){
  document.getElementById('finish-btn').removeAttribute("style");
  document.getElementById('next-btn').style.display='none';
}
}

document.getElementById("op1").addEventListener('click',evaluate)
document.getElementById("op2").addEventListener('click',evaluate)

function evaluate(){}

document.getElementById("finish-btn").addEventListener('click',finish);

function finish(){}

//it's like these buttons are not connected? got em!

//things to code into: 1. Questions [arrays] 2.Local Storage (Initials & Scoring) 3.Right and Wrong conditions 
