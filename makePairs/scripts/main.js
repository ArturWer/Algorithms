"use strict"
let main = document.querySelector("main")
let lettersString = 'abcdefghijklmnopqrstuvwxyz';
lettersString = lettersString.toUpperCase();
let lettersArr = lettersString.split('');
let pairs = [];
console.log(lettersArr);

let writePairs = ()=>{
	let para = document.createElement("p");
	para.textContent = pairs.join(", ");
	main.appendChild(para);
}
/* using for loop */
/*for (var i = 0; i < lettersArr.length; i++) {
	for (var j = i+1; j < lettersArr.length; j++) {	
		pairs.push(`${lettersArr[i]+lettersArr[j]}`);
	}
}*/

/* using forEach */
lettersArr.forEach(letters=>{
	let i = lettersArr.indexOf(letters);
	for (var k = i+1; k < lettersArr.length; k++) {
		pairs.push(letters+lettersArr[k]);
	}
});
writePairs();
console.log(pairs);

