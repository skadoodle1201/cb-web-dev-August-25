//Query Selector

const movieList = document.querySelectorAll(".movie"); //--> Gets all the elements objects that meets the query

movieList.forEach((movie) => {
  console.log("HTML:", movie.innerHTML);
  console.log("TEXT:", movie.innerText);
});

const firstMovie = document.querySelector(".movie"); //-> Return the first element object that matches query
console.log(firstMovie.innerHTML); // Output: Cars list item

// GetElementBy

const head = document.getElementById("heading"); //--> Return single element as id is unique
console.log(head.innerHTML);

const movieListUl = document.getElementsByClassName("movieList"); //--> Gets all the elements objects that meets the query
console.log(movieListUl[0].innerText);
