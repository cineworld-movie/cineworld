const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

const movies = document.querySelectorAll(".movie-card");

function searchMovies() {
    const searchText = searchInput.value.trim().toLowerCase();

    let found = false;

    movies.forEach(function(movie) {
        const movieName = movie.textContent.toLowerCase();

        if (movieName.includes(searchText)) {
            movie.style.display = "block";
            found = true;
        } else {
            movie.style.display = "none";
        }
    });

    if (!found) {
        alert("فیلم یا سریال مورد نظر پیدا نشد!");
    }
}

searchButton.addEventListener("click", searchMovies);

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchMovies();
    }
});

function showAllMovies() {
    movies.forEach(function(movie) {
        movie.style.display = "block";
    });

    searchInput.value = "";
}