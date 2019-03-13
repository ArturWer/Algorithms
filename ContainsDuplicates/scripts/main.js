"use strict"
let myArray	= [];
let countRandomNum = 100;
let numbers = document.querySelector(".numbers");
let main = document.querySelector("main");

function random(num){
  return Math.random()*num;
}
for (let i = 0; i<=countRandomNum; i++) {
	let randomNum = Math.floor(random(400));
	myArray.push(randomNum);
}
numbers.textContent = myArray.join(', ');

/* using algorithm one */
function containsDuplicates1(array){
	let count = 0;
	let duplicates = [];
	let h2 = document.createElement("h2");
	let para = document.createElement("p");
	let paraCount = document.createElement("p");
	let msg;

	h2.textContent = "Using Algorithm One"
	main.appendChild(h2);
	main.appendChild(para);
	main.appendChild(paraCount);

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
		msg = `Random numbers have ${duplicates.length} duplicates: ${duplicates.join(', ')}`;
	} else msg = `Random numbers doesn\'t have any duplicates`;
	para.textContent = msg;
	paraCount.textContent = `There are ${countRandomNum} random numbers and algorithm One run ${count} times.`;
}

/* using algorithm two */
function containsDuplicates2(array){
	let count = 0;
	let duplicates = [];
	let h2 = document.createElement("h2");
	let para = document.createElement("p");
	let paraCount = document.createElement("p");
	let msg;

	h2.textContent = "Using Algorithm Two"
	main.appendChild(h2);
	main.appendChild(para);
	main.appendChild(paraCount);

	for (var i = 0; i < array.length-1; i++) {
		for (var j = i+1; j < array.length; j++) {
			if (i != j) {
				if (array[i] === array[j]) {
					duplicates.push(array[i]);
				}
			}
			count++;
		}
	}
	if (duplicates.length > 0) {
		msg = `Random numbers have ${duplicates.length} duplicates: ${duplicates.join(', ')}`;
	} else msg = `Random numbers doesn\'t have any duplicates`;
	para.textContent = msg;
	paraCount.textContent = `There are ${countRandomNum} random numbers and algorithm Two run ${count} times.`;
}
containsDuplicates1(myArray);
containsDuplicates2(myArray);