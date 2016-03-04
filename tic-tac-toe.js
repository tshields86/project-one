// var one = document.querySelector('#one');
// var two = document.querySelector('#two');
// var three = document.querySelector('#three');
// var four = document.querySelector('#four');
// var five = document.querySelector('#five');
// var six = document.querySelector('#six');
// var seven = document.querySelector('#seven');
// var eight = document.querySelector('#eight');
// var nine = document.querySelector('#nine');
//don't need to declare these since they are unique ID's

// var eraser = document.querySelector('#eraser');

var user = "X";
var robot = "O";

var ticArray = [one, two, three, four, five, six, seven, eight, nine];

// this method places an X in the tic-tac-toe box
// ticArray.forEach(function(box){
//   box.addEventListener('click', function(){
//     // console.log('woah');
//     box.innerText = "X";
//   });
// });

// this method clears the board
eraser.addEventListener('click', function(){
  ticArray.forEach(function(box){
      box.innerText = "?";
    });
    startTic();
});

var turn = 0;

var startTic = function () {
  ticArray.forEach(function(box){
    box.addEventListener('click', function(){
      // console.log('woah');
      if (turn === 0) {
          box.innerText = user;
          // boxCheck();
          // checkWin();
        } else if (turn === 1){
          // compMove();
          // boxCheck();
          // checkWin();
      }
    });
  });
};

// var x1 = one.innerText;
// var x2 = two.innerText;
// var x3 = three.innerText;
// var x4 = four.innerText;
// var x5 = five.innerText;
// var x6 = six.innerText;
// var x7 = seven.innerText;
// var x8 = eight.innerText;
// var x9 = nine.innerText;
// var x1;
// var x2;
// var x3;
// var x4;
// var x5;
// var x6;
// var x7;
// var x8;
// var x9;

var currentBox;

var boxCheck = function(){
  currentBox = [];
  ticArray.forEach(function(box){
    currentBox.push(box.innerText);
  });
};

  


// one.addEventListener('click', function(){
//   // console.log("hi");
//
// });
// two.addEventListener('click', function(){
//   // console.log("hi");
//
// });
// three.addEventListener('click', function(){
//   // console.log("hi");
//
// });
// four.addEventListener('click', function(){
//   // console.log("hi");
//
// });
// five.addEventListener('click', function(){
//   // console.log("hi");
//
// });
// six.addEventListener('click', function(){
//   // console.log("hi");
//
// });
// seven.addEventListener('click', function(){
//   // console.log("hi");
//
// });
// eight.addEventListener('click', function(){
//   // console.log("hi");
//
// });
// nine.addEventListener('click', function(){
//   // console.log("hi");
//
// });
