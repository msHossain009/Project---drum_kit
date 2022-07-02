window.addEventListener("keydown", function (e) {
  let key = document.querySelector(`.key[data-key= '${e.keyCode}']`);
  let audio = document.querySelector(`audio[data-key= '${e.keyCode}']`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});
function removeClass(e) {
  if (e.propertyName != "transform") return;
  this.classList.remove("playing");
}

let keys = document.querySelectorAll(".key");
keys.forEach(function (key) {
  key.addEventListener("transitionend", removeClass);
});
