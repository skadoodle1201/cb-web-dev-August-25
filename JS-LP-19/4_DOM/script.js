const movieUl = document.getElementById("movieList");

console.log(movieUl.children); //LIST CHILDREN

const movieLi = document.getElementById("movie");

console.log(movieLi.previousElementSibling); //PREVIOUS SIBILING
console.log(movieLi.nextElementSibling); //NEXT SIBLING

const lastMovie = document.getElementById("movieL");
console.log(lastMovie.parentElement); // GET THE PARENT

movieUl.classList.add("movieList");

console.log(movieUl.classList);

movieUl.classList.remove("container");

console.log(movieUl.classList);

setInterval(() => {
  movieLi.classList.toggle("black");
}, 2000);

document.body.style.backgroundColor = "black";
