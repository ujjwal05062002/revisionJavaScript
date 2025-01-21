// print all armstrong number in a given range


var start  =  Number(prompt("Enter the start number : "))
var end = Number(prompt("Enter the ending number : "))

for (var num = start; num <= end; num++){
    var originalNum = num
    var count = 0
    var sum = 0
    while (num!=0){
        count = count + 1
        num = parseInt(num/10)
    }
    num = originalNum
    while (num!=0){
        let r = num%10
        sum = sum + r**(count)
    }
    
    if (originalNum == sum){
        console.log(`${sum}`)
    }
}
