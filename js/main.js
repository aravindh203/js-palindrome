var number=parseInt(prompt("Enter the number"));
var newNumber=number;
var seperate;
var answer=0;

while(number!=0){
	seperate=number%10;
	number=(number-seperate)/10;
	answer=answer*10+seperate
}

if(newNumber==answer){
	document.write(`The number ${newNumber} is palindrome`)
}
else{
	document.write(`The number ${newNumber} is not palindrome`)
}
