"use strict"
let logarithm = document.querySelector(".logarithm");
let inputA = document.getElementById('numberA');
let inputB = document.getElementById('numberB');
let aValue = document.querySelector(".a");
let bValue = document.querySelector(".b");
let cValue = document.querySelector(".c");

function showUserInput(e) {
	if (e.target.id === "numberA") {
		aValue.textContent = e.target.value;
	} else if (e.target.id === "numberB") {
		bValue.textContent = e.target.value;
	}	
}

inputA.addEventListener("change",showUserInput);
inputB.addEventListener("change",showUserInput);
