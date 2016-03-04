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
        boxCheck();
        // checkWin();
        turn = 1;
        // console.log('turn: ' + turn);
        botMove();
        boxCheck();
        // checkWin();
        // console.log('turn: ' + turn);
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

var botMove = function (){
// add and if else if above the content below, if robot has two in a row should have top preference

    if (currentBox[0] == '?' && ((currentBox[1] == user && currentBox[2] == user)||(currentBox[3] == user && currentBox[6] == user)||(currentBox[4] == user && currentBox[8] == user)) ){
      ticArray[0].innerText = robot;
      // console.log('check');
      turn = 0;
    } else if (currentBox[2] == '?' && ((currentBox[0] == user && currentBox[1] == user)||(currentBox[5] == user && currentBox[8] == user)||(currentBox[4] == user && currentBox[6] == user)) ){
      ticArray[2].innerText = robot;
      // console.log('check');
      turn = 0;
    } else if (currentBox[6] == '?' && ((currentBox[0] == user && currentBox[3] == user)||(currentBox[7] == user && currentBox[8] == user)||(currentBox[2] == user && currentBox[4] == user)) ){
      ticArray[6].innerText = robot;
      // console.log('check');
      turn = 0;
    } else if (currentBox[8] == '?' && ((currentBox[2] == user && currentBox[5] == user)||(currentBox[6] == user && currentBox[7] == user)||(currentBox[0] == user && currentBox[4] == user)) ){
      ticArray[8].innerText = robot;
      // console.log('check');
      turn = 0;
    } else if (currentBox[1] == '?' && ((currentBox[0] == user && currentBox[2] == user)||(currentBox[4] == user && currentBox[7] == user)) ){
      ticArray[1].innerText = robot;
      // console.log('check');
      turn = 0;
    } else if (currentBox[3] == '?' && ((currentBox[0] == user && currentBox[6] == user)||(currentBox[4] == user && currentBox[5] == user)) ){
      ticArray[3].innerText = robot;
      // console.log('check');
      turn = 0;
    } else if (currentBox[5] == '?' && ((currentBox[2] == user && currentBox[8] == user)||(currentBox[3] == user && currentBox[4] == user)) ){
      ticArray[5].innerText = robot;
      // console.log('check');
      turn = 0;
    } else if (currentBox[7] == '?' && ((currentBox[1] == user && currentBox[4] == user)||(currentBox[6] == user && currentBox[8] == user)) ){
      ticArray[7].innerText = robot;
      // console.log('check');
      turn = 0;
    } else if (currentBox[4] == '?' && ((currentBox[1] == user && currentBox[7] == user)||(currentBox[3] == user && currentBox[5] == user)||(currentBox[0] == user && currentBox[8] == user)||(currentBox[2] == user && currentBox[6] == user)) ){
      ticArray[4].innerText = robot;
      // console.log('check');
      turn = 0;
    } else {
      var randomPick = Math.floor(Math.random() * 9 + 1);
      if (randomPick == 1 && currentBox[0] == '?') {
        ticArray[0].innerText = robot;
        turn = 0;
      } else if (randomPick == 2 && currentBox[1] == '?') {
        ticArray[1].innerText = robot;
        turn = 0;
      } else if (randomPick == 3 && currentBox[2] == '?') {
        ticArray[2].innerText = robot;
        turn = 0;
      } else if (randomPick == 4 && currentBox[3] == '?') {
        ticArray[3].innerText = robot;
        turn = 0;
      } else if (randomPick == 5 && currentBox[4] == '?') {
        ticArray[4].innerText = robot;
        turn = 0;
      } else if (randomPick == 6 && currentBox[5] == '?') {
        ticArray[5].innerText = robot;
        turn = 0;
      } else if (randomPick == 7 && currentBox[6] == '?') {
        ticArray[6].innerText = robot;
        turn = 0;
      } else if (randomPick == 8 && currentBox[7] == '?') {
        ticArray[7].innerText = robot;
        turn = 0;
      } else if (randomPick == 9 && currentBox[8] == '?') {
        ticArray[8].innerText = robot;
        turn = 0;
      }
    }
};


  // else if (currentBox[5] == '?'){
  //   ticArray[5].innerText = "O";
  //   // console.log('check');
  //   turn = 0;
  // }


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
