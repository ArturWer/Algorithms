"use strict"
let myArray	= [];
let numbers = document.querySelector(".numbers");
let main = document.querySelector("main");

function random(num){
  return Math.random()*num;
}
for (let i = 0; i<=300; i++) {
	let randomNum = Math.floor(random(400));
	myArray.push(randomNum);
}
numbers.textContent = myArray.join(', ');

/* using algorithm one */
function containsDuplicates1(array){
	let count = 0;
	let duplicates = [];
	let para = document.createElement("p");
	main.appendChild(para);

	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if (i != j) {
				if (array[i] === array[j]) {
					duplicates.push(array[i]);
				}
			}
			count++;
		}
	}
	if (duplicates.length > 0) {
		para.textContent = `Random numbers have ${duplicates.length/2} duplicates: ${duplicates.join(', ')}`;
	}
	console.log(count);
}

containsDuplicates1(myArray);