"use strict"
let numsArr = [];

function random(num){
  return Math.random()*num;
}	

for (var i = 0; i < 100000; i++) {
	let num = Math.floor(random(500));
	numsArr.push(num);
}

	console.log(`Unsorted array is: ${numsArr}`);