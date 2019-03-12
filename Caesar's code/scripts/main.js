"use strict";
let userText = document.querySelector(".userText");
let alphabetEnStr = "abcdefghijklmnopqrstuvwxyz";
let alphabet = alphabetEnStr.split("");
let cipher = document.querySelector(".cipher");
function showEncriptedText(text){
	cipher.value = text;
}
function encrypt(text) {
	let encryptText = [];
	let lettersArray = text.split("");
	let arrayWithSpaces = [];
	lettersArray.forEach((letter)=>{
		let index = alphabet.indexOf(letter);
		let newIndex = index + 3;
		if (newIndex > alphabet.length) newIndex -= 26;
		encryptText.push(alphabet[newIndex]);
	});
	//added SPACES
	for (let i = 0; i <= encryptText.length; i++) {
		if ((i!==0) && (i%4 === 0)) arrayWithSpaces.push(" ");
		arrayWithSpaces.push(encryptText[i]);
	}
	arrayWithSpaces = arrayWithSpaces.join('');
	arrayWithSpaces = arrayWithSpaces.toUpperCase();
	showEncriptedText(arrayWithSpaces);
}
userText.addEventListener("keyup", ()=>{
	let text = userText.value;
	encrypt(text);
});
	