// var donkeyHouse = document.querySelector('.donkey');
var donkeyStart = function() {
  var donkeyHouse = document.querySelector('.donkey');
  var left = 0;
  var direction = "right";

  var runRight = setInterval(function() {
    donkeyHouse.style.left = left + "px";
    if (direction == "right") {
      if (left <= window.innerWidth - 460) {
          left += 4;
      } else {
        direction = "left";
        donkeyHouse.className = "donkey left";
      }
    } else {
      if (left >= 0) {
          left -= 4;
      } else {
        direction = "right";
        donkeyHouse.className = "donkey right";
        clearInterval(runRight);
      }
    }
  }, 10);
  //lasso that donkey!
  donkeyHouse.addEventListener('click', growFlower);
  // donkeyHouse.addEventListener('click', function(){
  //   // console.log("You got em!");
  //   growFlower();
  // });
};


cave.addEventListener('click', function(){

  donkeyStart();
});
