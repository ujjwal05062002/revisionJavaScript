
var start = Number(prompt("Enter the start number : "))
var end = Number(prompt("Enter the end number : "))

var count= 0

for (var num = start; num <= end; num++){
    var isPrime = true
    for (var i=2; i<=num**0.5; i++){
        if (num%i==0){
            isPrime = false
            break
        }
    }
    if (isPrime == false){
        console.log(`${num}`)
        count++
    }
}
