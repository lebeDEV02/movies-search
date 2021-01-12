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
		"Скотт Пилигрим против..."
	]
};
const ad = document.querySelector('.promo__adv'),
	genre = document.querySelector('.promo__genre'),
	bg = document.querySelector('.promo__bg'),
	films = document.querySelectorAll('.promo__interactive-item');

ad.remove();

genre.textContent = "Драма";

bg.style.backgroundImage = "url('img/bg.jpg')";

const dataBase = films.forEach((item, i) => {
	item.textContent = movieDB.movies.sort()[i];
	item.before(i + 1);
});

