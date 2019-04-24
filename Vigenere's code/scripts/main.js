"use strict";
let key = document.querySelector(".keyWord");
let userText = document.querySelector(".userText");
let cipherArea = document.querySelector(".cipher");
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphArr = [];

let cipher = (text)=>{
	let codeText = "";
	let keyWord = key.value;
	let index = 0;
	console.log(keyWord);
	for (var i = 0; i < text.length; i++) {
		let asciiCode = text.charCodeAt(i);
		if((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)){
			// need cipher simbol	
			let char = keyWord[index];
			console.log(char);
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