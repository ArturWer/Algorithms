"use strict";
let msg = document.querySelector(".msg");
let cardClass = document.querySelector(".cardClass");
let cardNum = document.getElementById("cardNum");

function validCard(number) {
	let cardNum = number.toString();
	let evenNumbers = [];
	let sum = 0;
	cardClass.textContent = "";
	msg.textContent = cardNum;
	if (cardNum.length !== 16) return;
	/* apply check algorithm */
	else if (cardNum.length === 16) {
		for (var i = 0; i < cardNum.length; i++) {
			if(i%2 === 0)
				evenNumbers.push(cardNum[i]*2);
		}
		console.log(evenNumbers);
		evenNumbers.forEach((num)=>{
			let nums;
			if (num<10) {
				sum+=num;
			} else {
				nums = num.toString();
				sum+=(Number(nums[0])+Number(nums[1]));
			}
		});
		console.log(sum);
	}
	if (cardNum[0] === "4") {
		cardClass.textContent = "Visa";
	} else if (cardNum[0] === "5") {
		if (cardNum[1] === "1" || cardNum[1] === "2" || cardNum[1] === "3" || cardNum[1] === "4" || cardNum[1] === "5") {
			cardClass.textContent = "MasterCard";
		}
	}
}
cardNum.addEventListener("input", (e)=>{
	validCard(e.target.value);
});
validCard(cardNum.value);