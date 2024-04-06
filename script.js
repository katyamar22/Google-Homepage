
const searchBar = document.getElementById("search-bar");

searchBar.addEventListener('keydown', (event) => {
    let searchGoogle = searchBar.value.replaceAll(" ", "+");
    if (event.key === "Enter")

        window.location.assign(`https://www.google.com/search?q=${searchGoogle}`);
}

)


const searchButton = document.getElementById("search-button");

searchBar.addEventListener('click', (event) => {
    if (event === 'click')

        window.location.assign(`https://www.google.com/search?q=${searchGoogle}`)
})

