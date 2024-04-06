const searchBar = document.getElementById("images-search");

searchBar.addEventListener('keydown', (event) => {
    let searchGoogle = searchBar.value.replaceAll(" ", "+");
    if (event.key === "Enter")

        window.location.assign(`https://www.google.com/search?q=${searchGoogle}&sca`);
}

)