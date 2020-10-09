const nameOfMonth: Array<string> = [
	'Января',
	'Февраля',
	'Марта',
	'Апреля',
	'Мая',
	'Июня',
	'Июля',
	'Августа',
	'Сентября',
	'Октября',
	'Ноября',
	'Декабря'
];
const date = new Date();
const monthNumber = date.getMonth();
export const month = nameOfMonth[monthNumber];
