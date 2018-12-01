function myFunction(){
	alert("Уважаемый пользователь ваше сообщение отправлено!");
}

// function myFunction2(){
// 	alert("Вы не отправили сообщение!");
// }

function calc() {
	var num1,num2,num3,result1,result2;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1); 

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2); 

	num3 = document.getElementById('n3').value;
	num3 = parseInt(num3);

	result1 = num2 / num1;
	result2 =	num2 / num1 * num3;

	document.getElementById('out1').innerHTML = result1;
	document.getElementById('out2').innerHTML = result2;
}