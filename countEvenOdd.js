var n = Number(prompt("Enter the number : "))

var evenDigits = 0
var oddDigits = 0

while (n!=0){
    var r = n%10
    if (r%2==0){
        evenDigits = evenDigits + 1
    }
    else{
        oddDigits = oddDigits + 1
    }
}

console.log(`even digits : ${evenDigits}  odd digits ${oddDigits}`);
