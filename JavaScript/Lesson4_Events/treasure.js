var width = 642;
var height = 420;
var click = 0;

var getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};

var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

var getDistance = function (event, target) {
  var diffX = event.x - target.x;
  var diffY = event.y - target.y;
  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

var getDistanceHint = function (distance) {
  if (distance < 10) return "Fire";
  else if (distance < 20) return "Very Hot";
  else if (distance < 40) return "Hot";
  else if (distance < 80) return "Warm";
  else if (distance < 160) return "Cold";
  else if (distance < 160) return "Very Cold";
  else if (distance < 360) return "Very Cold";
  else return "Ice";
};

maps.onclick = function (e) {
  click++;
  var distance = getDistance(e, target);
  var distanceHint = getDistanceHint(distance);
  console.log(distance);
  console.log(distanceHint);
  distanceP.innerText = distanceHint;
  if (distance < 8) alert(`Xezineni ${click} defeye tapdiniz`);
};
