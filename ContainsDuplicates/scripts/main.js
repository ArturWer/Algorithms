"use strict"
let myArray	= [];
let numbers = document.querySelector(".numbers");

function random(num){
  return Math.random()*num;
}
for (let i = 0; i<=300; i++) {
	let randomNum = Math.floor(random(400));
	myArray.push(randomNum);
}
numbers.textContent = myArray.join(', ');