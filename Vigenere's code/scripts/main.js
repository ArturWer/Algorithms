"use strict";
let key = document.querySelector(".key");

key.addEventListener("input", e =>{
	let val = e.target.value;
	console.log(val);
	/*val.forEach(char=>{
		console.log(char);
	});*/
});
	