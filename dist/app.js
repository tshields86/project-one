//this area will contain the welcome-form/welcome-form code
//as well as the code that will ammend flower divs in the flower-container for every point

var welcome = document.querySelector('.welcome-container');
var userName = document.querySelector('#user-name');
var submitName = document.querySelector('#submitName');
var welcomeForm = document.querySelector('#welcome-form');
var greetings = document.createElement('div');
greetings.classList.add('greetings');
var sunScript = document.querySelector('.sun-text');

welcomeForm.addEventListener('submit', function(e){
  e.preventDefault();
  greetings.innerText = "Hi, " + userName.value + " click the sun to play!";
  welcome.replaceChild(greetings, welcomeForm);
  sunScript.innerText = "Click me!";
});


// ===================sun=======================
var sun = document.querySelector('.sun');
sun.addEventListener('click', function (){
  var spin = Math.floor(Math.random() * 3 + 1);
  console.log(spin);
  if (spin == 1){
    sunScript.innerText = "Float in the clouds...";
    directions.innerText = "Play the game of Fire, Rain, Duck! Go ahead, choose one, your pick will be outlined in blue, my pick will be outlined in red. The winner of the round will be highlighted in green, yellow means there was a tie. Good luck!";
  } else if (spin == 2){
    sunScript.innerText = "Chalk to the wall...";
    directions.innerText = "Grab a piece of chalk and see if you can beat me in a game of Tic-Tac-Toe. Feel free to use my eraser at the end of the game!";
    ticArray.forEach(function(box){
        box.innerText = "?";
      });
      userWin = false;
      robotWin = false;
      tie = false;
    startTic();
  } else {
    sunScript.innerText = "Check out the cave...";
    directions.innerText = "I need your help! My pet has escaped and is hiding... take my lasso and see if you can round him up!";
  }
});

var directions = document.querySelector('p');





//when click sun have the id and class reset for frd
// ===============garden===================
var flowerContainer = document.querySelector('.flower-container');

var growFlower = function (){
var flower = document.createElement('div');
flower.className= "flowerBox";
var flowerImage = document.createElement('img');
flowerImage.src = "images/flower.gif";
flowerImage.id = "flowerImage";

flower.appendChild(flowerImage);
flowerContainer.appendChild(flower);
};

var growWinFlower = function (){
var winFlower = document.createElement('div');
winFlower.className = "winFlowerBox";
var winFlowerImage = document.createElement('img');
winFlowerImage.src = "images/flower-win.gif";
winFlowerImage.id = "winFlowerImage";

winFlower.appendChild(winFlowerImage);
flowerContainer.appendChild(winFlower);
};

var removeFlower = function (){
  var lastChild = flowerContainer.lastChild;
  // console.log(lastChild);
  flowerContainer.removeChild(lastChild);
};









//
