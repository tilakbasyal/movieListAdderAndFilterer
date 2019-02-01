"use strict";
	var savedInput = [];
	let inputName = document.getElementById('name');
	let inputGenre = document.getElementById('genre');
	let inputRating = document.getElementById('rating');
	let inputReview = document.getElementById('review');

	let movieListAdder = document.getElementById('button1');
	let genreFilter = document.getElementById('button2');
	let ratingFilter = document.getElementById('button3');


	// let myGenreSelection = document.getElementById('genreSelection');
	// myGenreSelection.addEventListener("change", function(){
	// 	let dynamicGenreSelected = myGenreSelection.value;
	// 	// return dynamicGenreSelected;
	// 	console.log(dynamicGenreSelected);
	// })

	genreFilter.addEventListener("click", function() {
		for(let i = 0; i < savedInput.length;) {
			if (savedInput[i].Genre == document.getElementById('genreSelection').value) {
				console.log(savedInput[i].Name)
			}
			i++;
		}
	})

	ratingFilter.addEventListener("click", function() {
		for (let i = 0; i < savedInput.length; ) {
			if (savedInput[i].Rating == document.getElementById('ratingSelection').value) {
				console.log(savedInput[i].Name);
			}
			i++;
		}
	})
	
	movieListAdder.addEventListener("click", function(){
		// if (!inputName.value || !inputGenre || !inputRating || !inputReview) return false;
		savedInput.push({
			Name : inputName.value, Genre: inputGenre.value,
			Rating: inputRating.value, Review: inputReview.value
		})
		console.log(savedInput);
	})


// function Movies(name, genre, rating, review) {
// 	this.name = document.getElementById('name').value ;
// 	this.genre = genre;
// 	this.rating = rating;
// 	this.review = review;
// }

// var movieList = {};
// let movies = function addMovies(form) {
// 	movieList = {Movie_Name: movieList[form.name.value]};
// 	return movieList;
// }

