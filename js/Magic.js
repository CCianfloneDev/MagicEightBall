/*
    populatefactFetch function
    Using the Numbers API dataset populate existing image elements
*/
function populatefactFetch() {
  let randomFactText = document.getElementById("randomFactText");

  fetch("http://numbersapi.com/random/trivia")
  .then(response => response.text())
  .then(data => { 
    randomFactText.textContent = `${data}`});
}

document.addEventListener("DOMContentLoaded", () => {
  spinButton.addEventListener("click", populatefactFetch);
})

