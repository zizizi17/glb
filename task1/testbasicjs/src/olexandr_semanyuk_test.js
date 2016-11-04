/*
	Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/
function getDataType (variable) {
  return typeof variable;
}

/*
	Напишите функцию, которая принимает 1 аргумент и возвращает:
	'primitive' если тип данных относится к примивным
	'primitive-special' если тип данных специальный
	'object' - если простой обьект
	'object-array' - если массив
	'object-function' - если функция
*/
function getDataTypePseudoName (variable) {
  if(variable === undefined || variable === null) return 'primitive-special'
  switch (variable.constructor.name) {
    case "String":
    case "Number":
    case "Boolean":
      return 'primitive';
      break;
    case "Object":
      return 'object';
      break;
    case "Array":
      return 'object-array';
      break;
    case "Function":
      return 'object-function';
      break;
  }
}


/*
	Напишите функцию, которая принимает 2 аргумента,
	и возврвщает 1 если их значения и их типы равны,
	0 если равны только значения
	и -1 в другом случае
*/
function compareByType (a, b) {
  if(a === b) {
    return 1;
  } else if(a == b) {
    return 0;
  } else {
    return -1;
  }
}

// Numbers

/*
	Напишите функцию, которая принимает 1 аргумент,
	и в случае если аргумент имеет числовой тип увеличивает его на 1
	и возврвщвет результат,
	в любом другом случае возврвщвет -1
*/
function increase (value) {
  if(typeof value === 'number') return ++value;
  return -1;
}

/*
	Напишите функцию, которая принимает 1 аргумент(число),
	и в случае если аргумент не Infinity или NaN возвращает строку 'safe' иначе 'danger'
*/
function testForSafeNumber (value) {
  return (isNaN(value) || !isFinite(value)) ? 'danger' : 'safe';
}



// Strings

/*
	Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает массив из елементов строки разделенных по пробелу ' '
*/
function stringToArray (str) {
  return str.split(' ');
}


/*
	Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает часть этой строки до первой запятой
*/
function getStringPart(str) {
  return str.split(',')[0];
}

/*
	Напишите функцию, которая принимает 2 аргумента (строку и симовл),
	и возвращает порядковый номер симовола в строе если символ встречается в строке 1 раз,
	false в противоположном случае
*/
function isSingleSymbolMatch(str, symbol) {
  var pattern = new RegExp(symbol, 'g');
  if(str.match(pattern).length == 1) return str.indexOf(symbol)
  return false;
}

/*
	Напишите функцию, которая принимает 2 аргумента,
	массив в разделитель[опционально],
	и возвращает строку ввиде элементов массива c разделителями если разделитель задан
	или строку разделенную "-" если не задан
*/
function join (array, separator) {
  if(separator) return array.join(separator);
  return array.join("-");
}


/*
	Напишите функцию, которая принимает 2 массива,
	и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
function glue (arrA, arrB) {
  return arrA.concat(arrB);
}


/*
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой массив отсортированный от большего к меньшему
*/
function order (arr) {
  return arr.sort(function(a, b){
    if(a < b) {
      return 1
    } else if( a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}


/*
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой без чисел которые меньше 0
*/
  function removeNegative (arr) {
    return arr.filter(function(el){
      return el >= 0;
    });
  }

/*
	Напишите функцию, которая принимает 2 числовых массива,
	и возвращает новый массив, состоящий из элементов первого но без элементов
	которые присутствуют во втром
  	[1,2,3], [1, 3] => [2]
*/
function without (arrA, arrB) {
  return arrA.filter(function(el) {
    return arrB.indexOf(el) < 0;
  })
}
