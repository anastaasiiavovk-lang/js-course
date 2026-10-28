'use strict';
let numberOfFilms;

function start (){
    numberOfFilms = +prompt('How many films have you already watched?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
       numberOfFilms = +prompt('How many films have you already watched?', ''); 

    }

}

start();

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};




function rememberMyFilms(){
    for (let i = 0; i < 2; i++){

    const a = prompt ('One of tha last seen films', ''),
          b = prompt ('How will you estimate it', '');

    if (a != null && b !=null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
    console.log('error');
    i--;
    }

}

}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
    console.log("Quite a few films were watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classic watcher");
} else if (personalMovieDB.count >= 30) {
    console.log("You are kinoman");
} else {
    console.log("Error occured");
}
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat)

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favourite genre is under number ${i}`);
    }
}

writeYourGenres();