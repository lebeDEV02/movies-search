/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)  

2) Изменить жанр фильма, поменять "комедия" на "драма" 

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS  

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: [
		"Деньги, карты, два ствола",
		"2012",
		"Ла-ла лэнд",
		"Я - легенда",
		"Скотт Пилигрим против...",
	]
};
const ad = document.querySelector('.promo__adv'),
	genre = document.querySelector('.promo__genre'),
	bg = document.querySelector('.promo__bg'),
	listItems = document.querySelector('.promo__interactive-list'),
	films = listItems.querySelectorAll('li'),
	buttonTracker = document.querySelector("button");
ad.remove();
genre.textContent = "Драма";
bg.style.backgroundImage = "url('img/bg.jpg')";
let inputFilm,
	clearInputFilm,
	moviesCurrentLenght = movieDB.movies.length;
let dataBase = films.forEach((item, i) => {
	item.innerHTML = `${i + 1} ${movieDB.movies.sort()[i]} ${"<div class='delete'></div>"}`;
});
const newFilm = buttonTracker.addEventListener('click', (e => {
	e.preventDefault();
	inputFilm = document.querySelector('.adding__input').value;
	if (inputFilm.length > 21) {
		inputFilm = `${inputFilm.slice(0, 20)}...`;
	}
	if (inputFilm !== "") {
		clearInputFilm = document.querySelector('.adding__input').value = "";
		if (document.querySelector('.favourite').checked) {
			console.log('Добавляем любимый фильм...');
			document.querySelector('.favourite').checked = false;
		};
		movieDB.movies[moviesCurrentLenght++] = inputFilm;
		films.forEach((item, i) => {
			item.innerHTML = `${i + 1} ${movieDB.movies.sort()[i]} ${"<div class='delete'></div>"}`;
		});
	}
}));