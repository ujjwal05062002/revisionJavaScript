// armstrong number


var num = Number(prompt("Enter the number : "))

var originalNum = num

var count =  0 //length
var sum  = 0  // sum of digits

while (num!=0){
    count = count + 1
    num = parseInt(num/10)
}

num = originalNum

while (num!=0){
    var r = num%10
    sum = sum + r**(count)
    num = parseInt(num/10)
}



if (originalNum == sum){
    console.log("ArmStrong number");
}
else{
    console.log("Not an armstrong number");
}
