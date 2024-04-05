// Get elements from HTML
/*const searchButton = document.getElementById("search-button");


// Event Listeners
searchButton.addEventListener("click", "" )
searchBar.addEventListener("click", function() {
    searchGoogle();
  });
  
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      searchGoogle();
    }
  });
  
  function searchGoogle() {  
    let searchTerm = document.getElementById("search-bar").value;
    searchTerm.replaceAll(" ", "+" );
      let googleSearchUrl = `https://www.google.com/search?q=${searchTerm}`;
      // Open search results in a new tab
      window.open(googleSearchUrl);
  }*/

const searchBar = document.getElementById("search-bar");

searchBar.addEventListener('keydown', (event) => {
    let searchGoogle = searchBar.value.replaceAll(" ", "+");
    if (event.key === "Enter")

        window.location.assign("https://www.google.com/search?q=" + searchGoogle)
}

)