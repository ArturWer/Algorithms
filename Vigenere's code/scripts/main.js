"use strict";
let key = document.querySelector(".keyWord");
let userText = document.querySelector(".userText");
let cipherArea = document.querySelector(".cipher");
let decryptedArea = document.querySelector(".decrypted");
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphArr = [];

let cipher = (text)=>{
	let codeText = "";
	let keyWord = key.value;
	let index = 0;
	for (var i = 0; i < text.length; i++) {
		let asciiCode = text.charCodeAt(i);
		if((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)){
			// need cipher simbol	
			let char = keyWord[index];
			char = char.toLowerCase();
			let max;
			char = alphArr.indexOf(char);
			(asciiCode >= 65 && asciiCode <= 90) ? max = 90 : max = 122;
			asciiCode += char;
			if (asciiCode > max) {
				asciiCode -=26;
			}
			codeText += String.fromCharCode(asciiCode);
			index++;
			if (index >= keyWord.length) {
				index = 0;
			}
		} else {
			codeText += text[i];
		}
	}
	cipherArea.value = codeText;
	decrypted();
}

function decrypted (){
	let cipherText = cipherArea.value;
	let decryptedText = "";
	let keyWord = key.value;
	for (var i = 0; i < cipherText.length; i++) {
		let char = cipherText.charCodeAt(i);
		let min = 0;
		let j = 0;
		let stepKeyChar;
		if (char >= 65 && char <=90) min = 65;
		if (char >= 97 && char <=122) min = 97;
		if (min == 65 || min == 97) {
			//decrypte symbol
			stepKeyChar = keyWord[j].toLowerCase(); 
			stepKeyChar = alphArr.indexOf(stepKeyChar);
			char -= stepKeyChar;
			if (char < min) {
				char += 26;
			}
			decryptedText += String.fromCharCode(char);
			j++;
			if (j >= keyWord.length) {
				j = 0;
			}
		} else {
			decryptedText += cipherText[i];
		}
	}

	decryptedArea.value = decryptedText;
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
