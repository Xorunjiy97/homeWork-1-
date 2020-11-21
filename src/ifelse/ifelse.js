// 1

function getResult(a,b) {
	if (typeof (a) != "number" || typeof b != "number" ) {
		return "Ввелите число ";
	}
	if (!a || !b){
		return "Введите все данные " ; 
	}
	
	if (a % 2 == 0) {
		return a * b;
	} else {
		return a + b;
	}
}

 console.log(getResult(5, 5));


//1 done 

function getQuadrant(x, y) {
	if (typeof (x) != "number" || typeof (y) != "number" ) {
				return "Введите число ";
	}
	if (!x || !y){
		return "Введите все данные " ; 
	}
	if (x > 0 && y > 0){
		return  'Первая четверть (I) ';
	} else if (x < 0 && y > 0){
		return 'Вторая четверть (II) ';
	} else if (x < 0 && y < 0){
		return 'Третья четверть (III)';
	} else if (x > 0 && y < 0){
		return 'Четвертая  четверть (IV) ';
	} else if (x==0 && y != 0) {
		return 'Лежит на акцессе ';
	} else if (x!=0 && y ==0) {
		return 'Лежит на акцессе ';
	} else if (x==0 && y == 0 ) {
		return 'начало координат';
	}
}

console.log( getQuadrant( 0, -3) );


//2 done 


// Найти суммы только положительных из трех чисел
 
function getPositive(a, b,c ) {
	if (typeof (a) != "number" || typeof (b) != "number" || typeof (c) != "number") {
				return "Ввелите число ";
	}
	if (!a || !b || !c){

		return "Введите все данные " ; 
	}
	
	let sum = 0;
	
	if (a > 0 ) {

		 sum += a  ;
     
	 } if (b > 0) {

		  sum +=  b ;
		 
	 }  if (c > 0) {

		 sum +=  c ;
	 }
	return sum;
	}

 console.log ( getPositive( 1, -3, 5) ) ;
 
//  3 done

//4. Посчитать выражение макс(а*б*с, а+б+с)+3

function getMax(a, b, c) {
	if (typeof (a) != "number" || typeof b != "number" ) {
				return "Ввелите число ";
			}
			if (!a || !b || !c){
				return "Введите все данные " ; 
			}
	
	let multyNum = a * b * c;

	let sumNum = a + b + c;

	if (sumNum > multyNum) {

		return sumNum + 3 ;

	} else if (sumNum < multyNum){

		return multyNum + 3 ;
	} 

	
} console.log( getMax(1,3,7) );
 	

// //4 done

// 5 Написать программу определения оценки студента по его рейтингу, на основе
// следующих правил


function getGrade(rating) {
 
	if (typeof (rating) != "number"  ) {
		return "Ввелите число ";
	}

	if (!rating){
		return "Введите все данные " ; 
	}

	if ( rating >= 90 && rating <= 100) {
		return 'Ваша оценка "A" ';
	} else if (rating >= 75 && rating <= 89){
		return 'Ваша оценка "B" ';
	} else if (rating >= 51 && rating <= 74){
		return 'Ваша оценка "C" ';
	} else if (rating >= 40 && rating <= 59){
		return 'Ваша оценка "D" ';
	} else if (rating >= 20 && rating <= 39){
		return 'Ваша оценка "E" ';
	} else if (rating >= 0 && rating <= 19){
		return 'Ваша оценка "F" ';
	}else {
		return "Такого рейтинга не существует";
	}
}

console.log ( getGrade(135) );
module.exports = {
  getResult,
  getQuadrant,
  getPositive,
  getMax,
  getGrade,
 }

// 5 done 