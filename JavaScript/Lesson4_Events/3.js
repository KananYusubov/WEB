// clickable.onclick = function (e) {
//   outText.innerText = e.target.nodeName;
// };

clickable.addEventListener("click", function (e) {
  outText.innerText = e.target.nodeName;
});
