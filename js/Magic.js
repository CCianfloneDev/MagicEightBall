/*
    populatefactFetch function
    Using: https://fungenerators.com/api/facts/#apidoc
*/
function populatefactFetch() {
  let randomFactText = document.getElementById("randomFactText");

  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
  .then(response => response.json())
  .then(data => { 
    randomFactText.textContent = `${data['text']}`});
}

document.addEventListener("DOMContentLoaded", () => {
  spinButton.addEventListener("click", populatefactFetch);
})

