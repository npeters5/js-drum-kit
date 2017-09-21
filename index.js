function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //if audio is not an element/no match is found; stop the function
  if (!audio) return;
  audio.currentTime = 0; //rewind to start
  audio.play();
  key.classList.add("playing");
}

// window.addEventListener("keydown", function(e) {
//   //   console.log(e.keyCode);
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   //if audio is not an element/no match is found; stop the function
//   if (!audio) return;
//   audio.currentTime = 0; //rewind to start
//   audio.play();
//   key.classList.add("playing");
// });

const keys = document.querySelectorAll(".key");
//listening for the end of the transition, a CSS property
keys.forEach(key =>
  key.addEventListener("transitionend", function(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  })
);

window.addEventListener("keydown", playSound);
