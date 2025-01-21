// print palindrome from the range


var start = Number(prompt("Enter the start number : "))
var end = Number(prompt("Enter the end number : "))
var count = 0

for (var num = start; num <=end;){
    var originalNum = num;
    var rev = 0;
    while (num!=0){
        var r = num%10
        rev  = rev*10 + r
        num = parseInt(num/10)
    }
    if (originalNum == rev){
        console.log(`${originalNum}`)
    }
}

