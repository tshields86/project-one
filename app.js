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
    sunScript.innerText = "Visit the cloud...";
  } else if (spin == 2){
    sunScript.innerText = "Chalk the wall...";
  } else {
    sunScript.innerText = "Check out the cave...";
  }
});
//when click sun have the id and class reset for frd
