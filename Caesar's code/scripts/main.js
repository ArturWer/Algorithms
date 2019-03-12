"use strict";
let userText = document.querySelector(".userText");
let alphabetStr = "abcdefghijklmnopqrstuvwxyz\n ,.;:0123456789*абвгдеєёжзийіїклмнопрстуфхцчшщьъыэюя-=+!?/\\@#$%^()_-";
let alphabet = alphabetStr.split("");
let cipher = document.querySelector(".cipher");
let decrypted = document.querySelector(".decrypted");
function showEncriptedText(text){
	cipher.value = text;
	decrypt(text);
}
function encrypt(text) {
	let encryptText = [];
	let lettersArray = text.split("");
	let arrayWithSpaces = [];
	lettersArray.forEach(letter=>{
		let index = alphabet.indexOf(letter);
		let newIndex = index + 3;
		if (newIndex > alphabet.length) newIndex -= alphabetStr.length;
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
function decrypt(code){
	let arr = code.split("");
	let decryptText = [];
	// delete SPACES
	for (let i = 0; i <= arr.length; i++) {
		if ((i!==0) && (i%4 === 0) && (arr[i] === " ")) 
			arr.splice(i, 1); 
	}
	arr.forEach(letter=>{
		let index = alphabet.indexOf(letter.toLowerCase());
		let oldIndex = index - 3;
		if (oldIndex < 0) oldIndex += alphabetStr.length;
		decryptText.push(alphabet[oldIndex]);
	});
	decryptText = decryptText.join('');
	decrypted.value = decryptText;
}
userText.addEventListener("keyup", ()=>{
	let text = userText.value;
	encrypt(text.toLowerCase());
});
	