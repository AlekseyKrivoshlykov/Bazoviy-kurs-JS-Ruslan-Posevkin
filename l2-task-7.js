// =============THE TASK 7===============

// *Сравнить null и 0. Попробуйте объяснить результат.

'use sctrict';

let a = null;
let b = 0;
console.log(typeof a); 		// object
console.log(typeof b); 		// number
console.log(a === b);		// false (ни по значению, ни по типу данных не равны)
console.log(a == b);		// false (по значению не равны)

// На самом деле, null - это отдельный тип данных, который
// так и называется null и является примитивом. 
// Но команда typeof выводит в консоли тип данных object - это баг, 
// который тянется с предыдущих версий ECMAScript.
// Тип данных 0 - число.
