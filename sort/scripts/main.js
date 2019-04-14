"use strict"
let numsArr = [];
let count = 0;
let min, temp;

function getRandomInt(max){
  return Math.floor(Math.random()*Math.floor(max));
}

for (var i = 0; i < 100; i++) {
	let num = getRandomInt(50);
	numsArr.push(num);
}
console.log(`Unsorted array is: ${numsArr}`);

/* Bubble sort*/
let swapCounter = -1;
let bubbleArr = numsArr.map(x => x);
let maxUnsort = bubbleArr.length;
while (swapCounter !== 0){
	swapCounter = 0;
	maxUnsort--;
	for (var i = 0; i < maxUnsort; i++) {
		if (bubbleArr[i] > bubbleArr[i+1]){
			temp = bubbleArr[i];
			bubbleArr[i] = bubbleArr[i+1];
			bubbleArr[i+1] = temp;
			swapCounter++;
		}
	}
}
console.log(`Bubble sorted array is: ${bubbleArr}`);
/* use a sorting smallest number */
min = numsArr[0];
for (var i = 1; i < numsArr.length; i++) {
	count++;
	if (numsArr[i] < min) {
		min = numsArr[i];
	} 
}
console.log(`sorting smallest number count is ${count}`);
console.log(`min num is ${min}`);