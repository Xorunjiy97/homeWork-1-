// //1. Получить строковое название дня недели по номеру дня.
module.exports = {

      resultWeek,
}
function resultWeek(str) {
    if (typeof (str) != "number" ) {
    		return "Введите число ";
    	}
    	if (!str ){
    		return "Введите все данные " ;
    	}
	switch (str){
		case 1 : 
		day = 'Понедельник';
		break;
		case 2 : 
		day = 'Вторник';
		break;
		case 3 :
			day = 'Среда';
		break;
		case 4 : 
		day = 'Четверг';
		break;
		case 5 :
		day = 'Пятница';
		break;
		case 6 : 
		day = 'Суббота';
		break;
		case 7 :
			day =  'Воскресенье';
		break;
		default: 
		day = 'Неверно введен день недели';
		
		
		
	}
	return day;
}
console.log(resultWeek(95));
// //1 done 
// //2. Вводим число (0-999), получаем строку с прописью числа.
function nameOfNum(num) {
	let singleNum = ['один','два','три','четыре ','пять','шесть','семь','восемь','девять',] ;
	let uniqueNum = ['одинадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать',] ;
	let tenNum = ['десять','двадцать','тридцать','сорок','пятьдесять','шестьдесят','семьдесят ','восемьдесят','девяносто'] ;
	let hundredNum = ['100']

}