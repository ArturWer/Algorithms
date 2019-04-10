"use strict";
let msg = document.querySelector(".msg");
let cardClass = document.querySelector(".cardClass");
let invalidCard = document.querySelector(".invalidCard");
let cardNum = document.getElementById("cardNum");

function validCard(number) {
	let cardNum = number.toString();
	let evenNumbers = [];
	let oddNumbers = [];
	let sum = 0;
	cardClass.textContent = "";
	msg.textContent = cardNum;
	if (cardNum.length !== 16) return;
	/* apply check algorithm */
	else if (cardNum.length === 16) {
		for (var i = 0; i < cardNum.length; i++) {
			if(i%2 === 0)
				evenNumbers.push(cardNum[i]*2);
			else oddNumbers.push(cardNum[i]);
		}
		console.log(evenNumbers);
		console.log(oddNumbers);
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
		/* add odd numbers */
		oddNumbers.forEach((num)=>{
			sum+= Number(num);
		});
		console.log(sum);
		/* validation */
		if (sum%10 === 0) {
			console.log(`Card number's valid`);
			invalidCard.textContent = "Card number's valid";
			invalidCard.className = "validCard";
		} else {
			console.log(`Card number's INVALID`);
			invalidCard.textContent = "Card number's INVALID";
			invalidCard.className = "invalidCard";
		}
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