"use strict"
let logarithm = document.querySelector(".logarithm");
let inputA = document.getElementById('numberA');
let inputB = document.getElementById('numberB');
let aValue = document.querySelector(".a");
let bValue = document.querySelector(".b");
let cValue = document.querySelector(".c");

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

function showUserInput(e) {
	let a = inputA.value;
	let b = inputB.value;
	aValue.textContent = a;
	bValue.textContent = b;
	cValue.textContent = getBaseLog(b, a);	
}

inputA.addEventListener("change",showUserInput);
inputB.addEventListener("change",showUserInput);
