$(document).ready(function(){
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	let $num1, $num2, $myForm = $('#myForm'), $mainCanvas= $('#mainCanvas');
	$('#mainCanvas').hide();

	function AlgEvklid(num1,num2){
		let r;
		num1=Number(num1);
		num2=Number(num2);
		if (num1>num2) {
			console.log(`Первое число больше второго и все норм... считаю...`);
		} else {
			let t = num1;
			num1 = num2;
			num2 = t;
			console.log('Второе число больше первого. Произведен обмен значениями.');
		}
		while (r!==0){
			console.log('Ушел в цикл... считаю...');
			r = num1%num2;
			if (r===0) {break;}
			num1=num2;
			num2=r;
		}	
		console.log(`Искомое значение - это ${num2}. Congrats!`);
		return num2;
	};

	$myForm.on("submit",function(event){
		event.preventDefault();
		$num1 = $('#num1').val();
		$num2 = $('#num2').val();
		$('#mainCanvas').hide().fadeIn(1000);
		text.content = `Наибольший общий целый делитель: ${AlgEvklid($num1,$num2)}`;
	});

	var c = Shape.Circle(300, 300, 300);
	c.fillColor = 'hsl(255, 96%, 47%)';
	c.strokeColor = 'black';
	var text = new PointText(300,300);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 26;

	paper.view.draw();
});