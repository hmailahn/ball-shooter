var shootBtn = document.querySelector(".shoot-btn");

var shootBall = function (event) {
  event.preventDefault();
  console.log("shoot!");
};

shootBtn.addEventListener("click", shootBall);
