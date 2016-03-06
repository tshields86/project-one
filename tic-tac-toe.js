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
    boxCheck();
    userWin = false;
    robotWin = false;
    tie = false;
    boxCheck();
    // startTic();
});

var turn = 0;

var startTic = function () {
  ticArray.forEach(function(box){
    box.addEventListener('click', gamePlay);
  });
};

var endTic = function () {
  ticArray.forEach(function(box){
    box.removeEventListener('click', gamePlay);
  });
};

var gamePlay = function() {
  // console.log('woah');
  if (turn === 0) {
    this.innerText = user;
    boxCheck();
    winCheck();
    if (userWin === false && robotWin === false && tie === false){
    turn = 1;
    // console.log('turn: ' + turn);
    botMove();
    boxCheck();
    winCheck();
    // console.log('turn: ' + turn);
  }
  }
};


if (userWin === true || robotWin === true || tie === true) {
ticArray.forEach(function(box){
  box.removeEventListener('click', gamePlay);
});
}
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
if (currentBox[0] == '?' && ((currentBox[1] == robot && currentBox[2] == robot)||(currentBox[3] == robot && currentBox[6] == robot)||(currentBox[4] == robot && currentBox[8] == robot)) ){
  ticArray[0].innerText = robot;
  // console.log('check');
  turn = 0;
} else if (currentBox[2] == '?' && ((currentBox[0] == robot && currentBox[1] == robot)||(currentBox[5] == robot && currentBox[8] == robot)||(currentBox[4] == robot && currentBox[6] == robot)) ){
  ticArray[2].innerText = robot;
  // console.log('check');
  turn = 0;
} else if (currentBox[6] == '?' && ((currentBox[0] == robot && currentBox[3] == robot)||(currentBox[7] == robot && currentBox[8] == robot)||(currentBox[2] == robot && currentBox[4] == robot)) ){
  ticArray[6].innerText = robot;
  // console.log('check');
  turn = 0;
} else if (currentBox[8] == '?' && ((currentBox[2] == robot && currentBox[5] == robot)||(currentBox[6] == robot && currentBox[7] == robot)||(currentBox[0] == robot && currentBox[4] == robot)) ){
  ticArray[8].innerText = robot;
  // console.log('check');
  turn = 0;
} else if (currentBox[1] == '?' && ((currentBox[0] == robot && currentBox[2] == robot)||(currentBox[4] == robot && currentBox[7] == robot)) ){
  ticArray[1].innerText = robot;
  // console.log('check');
  turn = 0;
} else if (currentBox[3] == '?' && ((currentBox[0] == robot && currentBox[6] == robot)||(currentBox[4] == robot && currentBox[5] == robot)) ){
  ticArray[3].innerText = robot;
  // console.log('check');
  turn = 0;
} else if (currentBox[5] == '?' && ((currentBox[2] == robot && currentBox[8] == robot)||(currentBox[3] == robot && currentBox[4] == robot)) ){
  ticArray[5].innerText = robot;
  // console.log('check');
  turn = 0;
} else if (currentBox[7] == '?' && ((currentBox[1] == robot && currentBox[4] == robot)||(currentBox[6] == robot && currentBox[8] == robot)) ){
  ticArray[7].innerText = robot;
  // console.log('check');
  turn = 0;
} else if (currentBox[4] == '?' && ((currentBox[1] == robot && currentBox[7] == robot)||(currentBox[3] == robot && currentBox[5] == robot)||(currentBox[0] == robot && currentBox[8] == robot)||(currentBox[2] == robot && currentBox[6] == robot)) ){
  ticArray[4].innerText = robot;
  // console.log('check');
  turn = 0;
} else if (currentBox[0] == '?' && ((currentBox[1] == user && currentBox[2] == user)||(currentBox[3] == user && currentBox[6] == user)||(currentBox[4] == user && currentBox[8] == user)) ){
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
      randomPick();
      if (randomOutcome == 1) {
        ticArray[0].innerText = robot;
        turn = 0;
      } else if (randomOutcome == 2) {
        ticArray[1].innerText = robot;
        turn = 0;
      } else if (randomOutcome == 3) {
        ticArray[2].innerText = robot;
        turn = 0;
      } else if (randomOutcome == 4) {
        ticArray[3].innerText = robot;
        turn = 0;
      } else if (randomOutcome == 5) {
        ticArray[4].innerText = robot;
        turn = 0;
      } else if (randomOutcome == 6) {
        ticArray[5].innerText = robot;
        turn = 0;
      } else if (randomOutcome == 7) {
        ticArray[6].innerText = robot;
        turn = 0;
      } else if (randomOutcome == 8) {
        ticArray[7].innerText = robot;
        turn = 0;
      } else if (randomOutcome == 9) {
        ticArray[8].innerText = robot;
        turn = 0;
      }
    }



//   else if (currentBox[4] == '?'){
//   ticArray[4].innerText = robot;
//   // console.log('check');
//   turn = 0;
// } else if (currentBox[0] == '?'){
//   ticArray[0].innerText = robot;
//   // console.log('check');
//   turn = 0;
// } else if (currentBox[8] == '?'){
//   ticArray[8].innerText = robot;
//   // console.log('check');
//   turn = 0;
// } else if (currentBox[7] == '?'){
//   ticArray[7].innerText = robot;
//   // console.log('check');
//   turn = 0;
// } else if (currentBox[3] == '?'){
//   ticArray[3].innerText = robot;
//   // console.log('check');
//   turn = 0;
// } else if (currentBox[2] == '?'){
//   ticArray[2].innerText = robot;
//   // console.log('check');
//   turn = 0;
// }
};

var randomOutcome;
var randomPick = function() {
  // randomOutcome clear random outcome smehow
  while (currentBox[randomOutcome - 1] != '?'){
  randomOutcome = Math.floor(Math.random() * 9 + 1);
  console.log(randomOutcome);
}
};

var userWin = false;
var robotWin = false;
var tie = false;

winCheck = function () { // CHECKS IF X WON
    if (
    ((currentBox[0] == currentBox[1]) && (currentBox[0] == currentBox[2]) && (currentBox[0] == user)) || //first row
    ((currentBox[3] == currentBox[4]) && (currentBox[3] == currentBox[5]) && (currentBox[3] == user)) || //second row
    ((currentBox[6] == currentBox[7]) && (currentBox[6] == currentBox[8]) && (currentBox[6] == user)) || //third row
    ((currentBox[0] == currentBox[3]) && (currentBox[0] == currentBox[6]) && (currentBox[0] == user)) || //first column
    ((currentBox[1] == currentBox[4]) && (currentBox[1] == currentBox[7]) && (currentBox[1] == user)) || //second column
    ((currentBox[2] == currentBox[5]) && (currentBox[2] == currentBox[8]) && (currentBox[2] == user)) || //third column
    ((currentBox[0] == currentBox[4]) && (currentBox[0] == currentBox[8]) && (currentBox[0] == user)) || //diagonal 1
    ((currentBox[2] == currentBox[4]) && (currentBox[2] == currentBox[6]) && (currentBox[2] == user))  //diagonal 2
    ) {
        userWin = true;
        resultAlert();
        // console.log("x wins");

    } else if (
        ((currentBox[0] == currentBox[1]) && (currentBox[0] == currentBox[2]) && (currentBox[0] == robot)) || //first row
        ((currentBox[3] == currentBox[4]) && (currentBox[3] == currentBox[5]) && (currentBox[3] == robot)) || //second row
        ((currentBox[6] == currentBox[7]) && (currentBox[6] == currentBox[8]) && (currentBox[6] == robot)) || //third row
        ((currentBox[0] == currentBox[3]) && (currentBox[0] == currentBox[6]) && (currentBox[0] == robot)) || //first column
        ((currentBox[1] == currentBox[4]) && (currentBox[1] == currentBox[7]) && (currentBox[1] == robot)) || //second column
        ((currentBox[2] == currentBox[5]) && (currentBox[2] == currentBox[8]) && (currentBox[2] == robot)) || //third column
        ((currentBox[0] == currentBox[4]) && (currentBox[0] == currentBox[8]) && (currentBox[0] == robot)) || //diagonal 1
        ((currentBox[2] == currentBox[4]) && (currentBox[2] == currentBox[6]) && (currentBox[2] == robot))  //diagonal 2
        ) {
            robotWin = true;
            resultAlert();
            // console.log("O wins");

        } else if (((currentBox[0] == user) || (currentBox[0] == robot)) && ((currentBox[1] == user) || (currentBox[1] == robot)) && ((currentBox[2] == user) || (currentBox[2] == robot)) && ((currentBox[3] == user) || (currentBox[3] == robot)) && ((currentBox[4] == user) || (currentBox[4] == robot)) && ((currentBox[5] == user) || (currentBox[5] == robot)) && ((currentBox[6] == user) || (currentBox[6] == robot)) && ((currentBox[7] == user) || (currentBox[7] == robot)) && ((currentBox[8] == user) || (currentBox[8] == robot))) {
                // console.log("It's a tie!");
              tie = true;
              resultAlert();
            }
        };


var resultAlert = function(){
  if (userWin === true){
    console.log("User wins");
    endTic();
  } else if (robotWin === true){
    console.log("Robot wins");
    endTic();
  } else if (tie === true){
    console.log("It's a tie");
    endTic();
  }

};

//
// else {
//       randomPick();
//       if (randomOutcome == 1 && currentBox[0] == '?') {
//         ticArray[0].innerText = robot;
//         turn = 0;
//       } else if (randomOutcome == 2 && currentBox[1] == '?') {
//         ticArray[1].innerText = robot;
//         turn = 0;
//       } else if (randomOutcome == 3 && currentBox[2] == '?') {
//         ticArray[2].innerText = robot;
//         turn = 0;
//       } else if (randomOutcome == 4 && currentBox[3] == '?') {
//         ticArray[3].innerText = robot;
//         turn = 0;
//       } else if (randomOutcome == 5 && currentBox[4] == '?') {
//         ticArray[4].innerText = robot;
//         turn = 0;
//       } else if (randomOutcome == 6 && currentBox[5] == '?') {
//         ticArray[5].innerText = robot;
//         turn = 0;
//       } else if (randomOutcome == 7 && currentBox[6] == '?') {
//         ticArray[6].innerText = robot;
//         turn = 0;
//       } else if (randomOutcome == 8 && currentBox[7] == '?') {
//         ticArray[7].innerText = robot;
//         turn = 0;
//       } else if (randomOutcome == 9 && currentBox[8] == '?') {
//         ticArray[8].innerText = robot;
//         turn = 0;
//       }
//     }

// below is trash=============
// var randomOutcome;
// var randomPick = function() {
//
//   randomOutcome = Math.floor(Math.random() * 9 + 1);
//   // console.log(randomOutcome);
//
// };
//
// do {
//   randomPick();
// }
// while (randomOutcome != '?');
//
//
// randomPick == 2 && currentBox[1] == '?'
//
// var randomOutcome;
// var randomPick = function() {
//   do {
//   randomOutcome = Math.floor(Math.random() * 9 + 1);
// }
// while (currentBox[randomOutcome - 1] != '?')
//   // console.log(randomOutcome);
// };
// above is trash=========================


// var endTic = function () {
//   ticArray.forEach(function(box){
//     box.removeEventListener('click', gamePlay);
//   });
// };

// var gamePlay = function(){
//   // console.log('woah');
//   if (turn === 0) {
//     box.innerText = user;
//     boxCheck();
//     winCheck();
//     if (userWin === false && robotWin === false && tie === false){
//     turn = 1;
//     // console.log('turn: ' + turn);
//     botMove();
//     boxCheck();
//     winCheck();
//     // console.log('turn: ' + turn);
//   }
//   }
// };
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
