/*
    populatefactFetch function
    Using: https://fungenerators.com/api/facts/#apidoc
*/
function populatefactFetch() {
  let randomFactText = document.getElementById("randomFactText");

  fetch("https://api.fungenerators.com/fact/random")
  .then(response => response.text())
  .then(data => { 
    randomFactText.textContent = `${data}`});
}

document.addEventListener("DOMContentLoaded", () => {
  spinButton.addEventListener("click", populatefactFetch);
})

