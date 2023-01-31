function move(e) {
  stranger.style.left = e.pageX + "px";
  stranger.style.top = e.pageY + "px";
  console.log(e);
}

function changeColor() {
  bd.style["background-color"] = GetRandomRGB();

  stranger.style["background-color"] = GetRandomRGB();
}

function GetRandomRGB() {
  return `rgb(
        ${Math.round(255 * Math.random())},
        ${Math.round(255 * Math.random())},
        ${Math.round(255 * Math.random())})`;
}

bd.addEventListener("mousemove", move);

bd.addEventListener("click", changeColor);
