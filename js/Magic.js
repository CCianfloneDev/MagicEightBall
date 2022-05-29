/*
    populatefactFetch function
    Using: https://uselessfacts.jsph.pl/random.json?language=en
*/
function populatefactFetch() {
  let randomFactText = document.getElementById("randomFactText");

  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
  .then(response => response.json())
  .then(data => { 
    randomFactText.textContent = `${data['text']}`});
}

/*
    Shakes the magic eight ball div.
*/
function animation(){
  let eightBall = document.getElementById("eightBall");
  eightBall.classList.add("animate");

  /* removes the animation so that it can restart */
  setTimeout(function() {
    eightBall.classList.remove("animate");
  }, 500); // 500 is the same time as the CSS animation
}

document.addEventListener("DOMContentLoaded", () => {
  spinButton.addEventListener("click", () => {
    /* on button click populate fact and animate the eightball */
    populatefactFetch();
    animation();
  });
})

