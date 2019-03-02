"use strict";
let userText = document.querySelector("textarea");
userText.addEventListener("keyup", ()=>{
	let text = userText.value;
	console.log(text);
});
	