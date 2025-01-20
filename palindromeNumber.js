// palindrome number

var rev = 0

while (num!=0){
    var r = num%10
    rev = rev*10+r
    num = parseInt(num/10)
}

if (rev==num){
    console.log("palindrome number");
}
else{
    console.log("not palindrome number");
}

