'use strict';

let numberOfFilm = prompt('Сколько фильмов вы смотрели?', '');

let personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}


for(let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', '');
    let b = prompt('На сколько оцените его?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    }else {
        console.log('error');
        i--;
    }
}

if(personalMovieDB.count < 10) {
    console.log('Просмотрено давольно мало фильмов');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
}else if(personalMovieDB.count >= 30){
    console.log('Вы киноман');
}else {
    console.log('error');
}

console.log(personalMovieDB);




















