"use strict";
let msg = document.querySelector(".msg");
let cardClass = document.querySelector(".cardClass");
let cardNum = document.getElementById("cardNum");

function validCard(number) {
	cardClass.textContent = "";
	msg.textContent = number;
	console.log(number[0]);
	if (number[0] === "4") {
		cardClass.textContent = "Visa";
	} else if (number[0] === "5") {
		if (number[1] === "1" || number[1] === "2" || number[1] === "3" || number[1] === "4" || number[1] === "5") {
			cardClass.textContent = "MasterCard";
		}
	}
}
cardNum.addEventListener("input", (e)=>{
	validCard(e.target.value);
});