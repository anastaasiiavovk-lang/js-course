const numberOfFilms = +prompt('How many films have you already watched?', '');

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt ('One of tha last seen films', ''),
    b = prompt ('How will you estimate it', ''),
    c = prompt ('One of tha last seen films', ''),
    d = prompt ('How will you estimate it', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
