const jsAddNewMovieInput = document.querySelector(".js-add-new-movie-input");
const jsBtnAddNewMovie = document.querySelector(".js-btn-add-new-movie");
const containerListMovies = document.querySelector(".container__list-movies");
const container = document.querySelector(".container");
const main = document.querySelector(".main");

const movies = [];

function getNameMovieFromUser() {
  const newNameMovie = jsAddNewMovieInput.value;
  return newNameMovie;
}
// getNameMovieFromUser();

jsBtnAddNewMovie.addEventListener("click", createAddNewMovie);



function createAddNewMovie() {
  const newNameMovie = getNameMovieFromUser();

if (newNameMovie === "") {
  jsAddNewMovieInput.classList.add("add-new-movie-input-red")
  return
}
jsAddNewMovieInput.classList.remove("add-new-movie-input-red")

  const newMovie = {
    name: newNameMovie,
  };

  movies.push(newMovie)


  const newDivMovie = document.createElement("div");
  newDivMovie.className = "movie";

  const divCheckBox = document.createElement("div");
  divCheckBox.className = "checkbox";

  const paragrafMovieName = document.createElement("p");
  paragrafMovieName.className = "movie-name";
  paragrafMovieName.textContent = newNameMovie;

  const newImage = document.createElement("img");
  newImage.className = "imgClose";
  newImage.src = "./resource/svg/close.svg";

  

  newDivMovie.appendChild(divCheckBox);
  newDivMovie.appendChild(paragrafMovieName);
  newDivMovie.appendChild(newImage);

  containerListMovies.appendChild(newDivMovie);
  container.appendChild(containerListMovies);
  main.appendChild(container);
  document.body.appendChild(main);

  clearInput();
}



function clearInput() {
  jsAddNewMovieInput.value = "";
}

containerListMovies.addEventListener("click", handlerEventClickMovie);

function handlerEventClickMovie(event) {
  if (event.target.className === "checkbox") {
    // нахожу родитель <div class="movie ">
    const parentNode = event.target.parentNode;

    console.log(parentNode)
    // получаю индекс фильма в массиве
    const movieIndex = Array.from(containerListMovies.children).indexOf(parentNode)
    console.log('movieIndex',movieIndex)

    // Переключаем класс у родительского элемента
    parentNode.classList.toggle("movie_hidden");
  }
}

// Удаление фильма из списка
containerListMovies.addEventListener('click', removeMovie)

function removeMovie(event) {
  if (event.target.className === "imgClose") {
    const parentNodeMovie = event.target.parentNode;
    parentNodeMovie.remove()
  }
}
