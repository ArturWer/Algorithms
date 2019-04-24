"use strict";
let key = document.querySelector(".key");
let userText = document.querySelector(".userText");
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphArr = [];

let cipher = (text)=>{
	let codeText = "";
	let keyWord = key.value;
	for (var i = 0; i < text.length; i++) {
		console.log(text.charCodeAt(i));
	}
}

function makeAlphabetArray (){
	for (var i = 0; i < alphabet.length; i++) {
		alphArr.push(alphabet[i]);
	}
}
key.addEventListener("input", e =>{
	let val = e.target.value;
	cipher(userText.value);
});

userText.addEventListener("input", e =>{
	let val = e.target.value;
	cipher(val);
});	

makeAlphabetArray();