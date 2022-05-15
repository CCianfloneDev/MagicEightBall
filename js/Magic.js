/*
    populatefactFetch function
    Using the facts api from: https://api-ninjas.com/api/facts
*/
function populatefactFetch() {
  $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/facts?limit=1',
      // api key associated with my account on https://api-ninjas.com/profile
      headers: { 'X-Api-Key': 'ZLAxS/Jh/3J3HCto2TULLQ==aWjW5z3sRgxdk0Ih'},
      contentType: 'application/json',
      success: function(result) {
          console.log(result);
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  spinButton.addEventListener("click", populatefactFetch);
})

