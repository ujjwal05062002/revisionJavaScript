var start  = Number(prompt("Enter the start number : "))
var end  = Number(prompt("Enter the ending number : "))


for (var num = start; num <= end; num++){
    var originalNum = num
    var rev = 0
    var tempNum = num
    while (tempNum!=0){
        var r = tempNum%10
        rev = rev*10 + r
        tempNum = parseInt(tempNum/10)
    }
    if (rev==originalNum){
        console.log(`${originalNum}`)
    }
}
