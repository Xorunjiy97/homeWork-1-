// // 1.min
module.exports = {

               showMin,
               showMax,
               showMaxIndex,
               showMinIndex,
               sumElementsOddIndex,
               reversArr,
               getSum,
               arrReverse,
               bubbleSort,
           };
function showMin(num) {



	if (!Array.isArray(num)) {
		return "type array" ;
	}

let min = num[0];

for (let i = 0; i < num.length; i++){
	if ( num[i] < min ){
		min = num[i];

	}
	return min ;
}

console.log(min);

}
showMin([4, 2, 4, 1, 0 ,5]);

//// 2. max
function showMax (num) {
	if (!Array.isArray(num)) {
		return "type array" ;
	}

	let max = num[0];
	for (let i = 0; i < num.length; i++) {
		if (num[i]> max) {
			max = num[i] ;
		}

	}
	return max ;
}

showMax( [4, 2, 4, 1 , 0 ,5] );
// 2 done


// 3 Найти индекс минимального элемента массива

function showMinIndex(num){
	if (!Array.isArray(num)) {
		return "type array" ;
	}

	let min = 0 ;
	for (let i = 0; i < num.length; i++) {
		if (num[i]< num[min]) {
			min = i ;
		}
	}

return min;
}
console.log(showMinIndex( [4, 2, 4, 10 , 9 ,5] ) );



// 4 Найти индекс max элемента массива
//
//
//
function showMaxIndex(num){
	if (!Array.isArray(num)) {
		return "type array" ;
	}

	let max = 0 ;
	for (let i = 0; i < num.length; i++) {
		if (num[i] > num[0]) {
			max = i ;
		}
	}

return max;
}
console.log(showMaxIndex( [11, 2, 4, 10 , 9 ,5] ) );


//4 done

//5. Посчитать сумму элементов массива с нечетными индексами

function sumElementsOddIndex(myArray){
    if(!Array.isArray(myArray)){
        return "Please type an array";
    }
    let sumWithOddIndex = 0;
    let oddElementIndex = 0;

    for (let i = 0; i < myArray.length; i++) {
        if(oddElementIndex = i % 2 !== 0) {
            sumWithOddIndex += i;
        }
    }
    return sumWithOddIndex;
}
console.log("sumElementsOddIndex", sumElementsOddIndex([]));

	//5
//
//	// 6.Сделать реверс массива (массив в обратном направлении)
//
//
	function reversArr(arr) {
      if (!Array.isArray(arr)) {
        return "type array";
      }
      let newArr = [];

      for (i = arr.length - 1; i >= 0; i--) {
        newArr[arr.length - 1 - i] = arr[i];
      }

      return newArr;
    }

    console.log(reversArr([1, 2, 3, 4, 5, 6, 7]));


	//  6 done
//
	// 7 Посчитать количество нечетных элементов массива
	function getSum(arr) {
		if (!Array.isArray(arr)) {
			return "type array" ;
		}

		let arrEven = 0;

		for (let i = 0; i < arr.length; i++){

					if (arr[i] %2 !== 0) {
						arrEven ++  ;

					}

		}return arrEven

	}
	console.log(getSum([4, 22, 4, 1 , 9, 2]));
	//7 done
	//8. Поменять местами первую и вторую половину массива, например, для массива 1 2 3
	//4, результат 3 4 1 2

	function arrReverse(arr) {
	if (!Array.isArray(arr)) {
				return "type array" ;
			}


		let  halflen = arr.length /2;
		let  centerpos = halflen + arr.length % 2;

		for (let i = 0; i < halflen; i++) {
		 let temp = arr[i];
		  arr[i] = arr[centerpos + i];
		  arr[centerpos + i] = temp;


	}
	return  arr;
}
console.log (arrReverse( [4, 22, 4, 1 , 9, 2]) );

// 9. Отсортировать массив пузырьком (Bubble)
function bubbleSort(arr) {
	if (!Array.isArray(arr)) {
			return "type array" ;
		}

	for (let i = 0, endI = arr.length - 1; i < endI; i++) {
		 for (let j = 0, endJ = endI - i; j < endJ; j++) {
			  if (arr[j] > arr[j + 1]) {
					let  swap = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = swap;
			  }
		 }
	}
	return arr;
}
console.log(bubbleSort([4, 22, 4, 1 , 9, 2]));
// 9 done