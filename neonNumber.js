var num = Number(prompt("Enter the number : "))

var squareOfNum = num*num
var sumOfDigit = 0

while (squareOfNum!=0){
    var r = squareOfNum%10
    sumOfDigit = sumOfDigit + r
    squareOfNum = parseInt(num/10)
}

if (num == sumOfDigit){
    console.log("neon number")
}

else{
    console.log("not neon");
}
