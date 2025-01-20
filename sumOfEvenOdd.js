var n = Number(prompt("Enter the number : "))

var evenSum = 0
var oddSum = 0

while (n!=0){
    let r = n%10

    if(r%2==0){
        evenSum = evenSum + r
    }
    else{
        oddSum = oddSum + r
    }
    num = parseInt(n%10)
}
