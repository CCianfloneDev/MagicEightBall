/*
    populateImages function
    Using the dog API dataset populate existing image elements
*/
function populatefactFetch() {
  let randomFactText = document.getElementById("randomFactText");

  fetch("http://numbersapi.com/random/trivia")
  .then(data => { 
    randomFactText.textContent = `${data.type}`});
}

document.addEventListener("DOMContentLoaded", () => {
  spinButton.addEventListener("click", populatefactFetch);
})
