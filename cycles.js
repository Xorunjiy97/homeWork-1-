// 1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function getEven(){

		let resultSum = 0 ;

		let quantity = 0 ;

		for ( let i = 0 ; i <= 99; i++){

			if (i %2 == 0) {
				resultSum += i ;
				quantity ++;	
			}
		}
		console.log(quantity);
		console.log(resultSum);
		return;
}
getEven();
	
// 1 done

// 2. Проверить простое ли число? (число называется простым, если оно делится только
	само на себя и на 1)
	function showSimpleNum(num){
		if  (!num && num !== 0)  {

			return "некорректные данные "
		} ;


		for (let i = 2;i < num;i++){

			if (num %i != 0 ){
				return 'является простым числом ';
		
			} else {
				return 'не является простым числом' 
			}
		} 
	} 
	console.log(showSimpleNum());
// 2 done

// 3. Найти корень натурального числа с точностью до целого (рассмотреть вариант
//последовательного подбора и метод бинарного поиска)


function getRoot(num) {
	if (typeof (num) != "number" ) {
				return "Введите корректное число";
			}
	if(!num && num !== 0)  ; 
	for (let i = 1;;i++) {
		let q = i * i;

		if (num ==i) {
			return i;
		}
		else if (num < q)
		return i - 1;

	}
}

console.log(getRoot(3))
// 3 done 

 //4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!
function factorial(n) {
	if (typeof (n) != "number" ) {
		return "Введите корректное число";
	}
	if(!n && n !== 0) {
		return "Введите верные данные " ;
	} ; 
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
}
console.log (factorial());

//5. Посчитать сумму цифр заданного числа
function sumNum(num){
	if (typeof (num) != "number" ) {
		return "Введите корректное число";
	}
	if(!num && num !== 0) {
		return "Введите верные данные "
	} 

	let stringNum = " " + num  ; 

	let sum = 0;

	for(let i = 0; i < stringNum.length; i++ ){
		
		 sum += +stringNum[i];
		
	}
	return sum;
}
console.log( sumNum("b") );
 // 5 done


//6. Вывести число, которое является зеркальным отображением последовательности
//цифр заданного числа, например, задано число 123, вывести 321.
function showReverse(num) {

	if (typeof (num) != "number" ) {
				return "Введите корректное число";
			}
			if(!num && num !== 0) {
				return "Введите верные данные "
			} 

	let result = 0;
	let digit = 0;

	while (num) {
		digit = num %10
	  result = (result * 10 ) + num % 10;
	  num = num /10|0
	}
 
	return result;
}
console.log ( showReverse( 123) ); 	
