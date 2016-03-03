// var donkeyHouse = document.querySelector('.donkey');
var donkeyStart = function() {
  var donkeyHouse = document.querySelector('.donkey');
  var left = 0;
  var direction = "right";

  var runRight = setInterval(function() {
    donkeyHouse.style.left = left + "px";
    if (direction == "right") {
      if (left <= window.innerWidth - 460) {
          left += 5;
      } else {
        direction = "left";
        donkeyHouse.className = "donkey left";
      }
    } else {
      if (left >= 0) {
          left -= 5;
      } else {
        direction = "right";
        donkeyHouse.className = "donkey right";
        clearInterval(runRight);
      }
    }
  }, 20);
};

cave.addEventListener('click', function(){
  donkeyStart();
});
