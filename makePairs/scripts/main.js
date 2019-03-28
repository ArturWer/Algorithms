"use strict"
let lettersString = 'abcdefghijklmnopqrstuvwxyz';
lettersString = lettersString.toUpperCase();
let lettersArr = lettersString.split('');
let pairs = [];
console.log(lettersArr);

for (var i = 0; i < lettersArr.length; i++) {
	for (var j = i+1; j < lettersArr.length; j++) {	
		pairs.push(`${lettersArr[i]+lettersArr[j]}`);
	}
}
console.log(pairs);