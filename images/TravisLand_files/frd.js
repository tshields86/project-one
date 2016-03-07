var fireFluff = document.querySelector('.left.fluff');
var rainFluff = document.querySelector('.center.fluff');
var duckFluff = document.querySelector('.right.fluff');

var playerChoice;
var compChoice;

// ==================player choice===================
fire.addEventListener('click', function(){
  fireFluff.removeAttribute('id');
  duckFluff.removeAttribute('id');
  rainFluff.removeAttribute('id');
  fireFluff.removeAttribute('class');
  duckFluff.removeAttribute('class');
  rainFluff.removeAttribute('class');
  fireFluff.setAttribute('class', 'left fluff');
  rainFluff.setAttribute('class', 'center fluff');
  duckFluff.setAttribute('class', 'right fluff');
  fireFluff.classList.add('playerPick');
  playerChoice = "f";
  frd();
});

duck.addEventListener('click', function(){
  fireFluff.removeAttribute('id');
  duckFluff.removeAttribute('id');
  rainFluff.removeAttribute('id');
  fireFluff.removeAttribute('class');
  duckFluff.removeAttribute('class');
  rainFluff.removeAttribute('class');
  fireFluff.setAttribute('class', 'left fluff');
  rainFluff.setAttribute('class', 'center fluff');
  duckFluff.setAttribute('class', 'right fluff');
  duckFluff.classList.add('playerPick');
  playerChoice = "d";
  frd();
});

rain.addEventListener('click', function(){
  fireFluff.removeAttribute('id');
  rainFluff.removeAttribute('id');
  duckFluff.removeAttribute('id');
  fireFluff.removeAttribute('class');
  duckFluff.removeAttribute('class');
  rainFluff.removeAttribute('class');
  fireFluff.setAttribute('class', 'left fluff');
  rainFluff.setAttribute('class', 'center fluff');
  duckFluff.setAttribute('class', 'right fluff');
  rainFluff.classList.add('playerPick');
  playerChoice = "r";
  frd();
});

// ================computer choice=================
var frd = function (){
  var compPick = Math.floor(Math.random() * 3 + 1);
  console.log(compPick);
  if (compPick == 1){
// fire
    fireFluff.classList.add('compPick');
    compChoice = "f";
  } else if (compPick == 2){
// rain
    rainFluff.classList.add('compPick');
    compChoice = "r";
  } else {
// umbrella
    duckFluff.classList.add('compPick');
    compChoice = "d";
  }
// ==============who won=================
  if (compChoice == 'f' && playerChoice == 'f'){
    console.log("tie");
    fireFluff.setAttribute('id', 'tie');
  } else if (compChoice == 'r' && playerChoice == 'r'){
    console.log("tie");
    rainFluff.setAttribute('id', 'tie');
  } else if (compChoice == 'd' && playerChoice == 'd'){
    console.log("tie");
    duckFluff.setAttribute('id', 'tie');
  } else if (compChoice == 'f' && playerChoice == 'r') {
    console.log("Player wins!");
    rainFluff.setAttribute('id', 'win');
  } else if (compChoice == 'f' && playerChoice == 'd'){
    console.log("Comp wins.");
    fireFluff.setAttribute('id', 'win');
  } else if (compChoice == 'r' && playerChoice == 'f') {
    console.log("Comp wins!");
    rainFluff.setAttribute('id', 'win');
  } else if (compChoice == 'r' && playerChoice == 'd'){
    console.log("Player wins.");
    duckFluff.setAttribute('id', 'win');
  } else if (compChoice == 'd' && playerChoice == 'f') {
    console.log("Player wins!");
    fireFluff.setAttribute('id', 'win');
  } else if (compChoice == 'd' && playerChoice == 'r'){
    console.log("Comp wins.");
    duckFluff.setAttribute('id', 'win');
  }



};
// above bracket closes out frd function

// ==================results==================
