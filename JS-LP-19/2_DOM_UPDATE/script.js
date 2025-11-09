const movieListUl = document.getElementById("movieList"); //--> Gets all the elements objects that meets the query

const movies = ["Hangover", "Batman", "Kill Bill", "SpiderMans"];

movies.forEach((movie) => {
  //Works in O(N)
  movieListUl.innerHTML += `<li>${movie}</li>`; // Bad Practice as this always overwrites the innerHTML and refresh
});

console.log(liMovie);

const heading = document.getElementById("heading");

heading.innerText += " FOR YOU";

const moviesOptimized = ["Hangover II", "Dark Knight", "Kill", "IT"];

moviesOptimized.forEach((movie) => {
  const newLi = document.createElement("li");
  newLi.innerText = movie;
  //Works in O(1)
  movieListUl.appendChild(newLi);
});
