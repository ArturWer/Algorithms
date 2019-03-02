"use strict";
let userText = document.querySelector("textarea");
let alphabetStr = "abcdefghijklmnopqrstuvwxyz";
let alphabet = alphabetStr.split("");
function showEncriptedText(text){

}
function encrypt(text) {
	let encryptText = [];
	let lettersArray = text.split("");
	lettersArray.forEach((letter)=>{
		let index = alphabet.indexOf(letter);
		let newIndex = index + 3;
		if (newIndex > alphabet.length) newIndex -= 26;
		encryptText.push(alphabet[newIndex]);
	});
	encryptText = encryptText.join('');
	encryptText = encryptText.toUpperCase();
	console.log(encryptText);
}
userText.addEventListener("keyup", ()=>{
	let text = userText.value;
	encrypt(text);
});
	