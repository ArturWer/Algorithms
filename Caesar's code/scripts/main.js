"use strict";
let userText = document.querySelector("textarea");
let alphabetStr = "abcdefghijklmnopqrstuvwxyz";
let alphabet = alphabetStr.split("");
function showEncriptedText(text){

}
function encrypt(text) {
	let encryptText = text.toUpperCase();
	console.log(encryptText);
}
userText.addEventListener("keyup", ()=>{
	let text = userText.value;
	encrypt(text);
});
	