"use strict";

// let user = [];

// user [0] = prompt('Какое ваше имя');
// user [1] = prompt('Введите число');
// user [2] = prompt('Приветствую на своем репозитории');
// user [3] = prompt('Сколько вам лет?');

// console.log(user);

// let question = confirm('Вас зовут Николай, я угадал?');

// let gamers = 'Привет';
// let  players = ' Как дела?';
// console.log(gamers + players);

let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let a = prompt('Один из последних просмотренних фильмов',  ''); 
let b = prompt('На сколько оцените фильм', '');
let c = prompt('Один из последних просмотренних фильмов',  ''); 
let d = prompt('На сколько оцените фильм', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);