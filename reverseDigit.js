// reverse a digit


var n= Number(prompt("Enter the number here : "))

var rev = 0

while (n!=0){
    var r = n%10
    rev = rev*10 + r
    n = parseInt(n/10)
}

console.log(`reverse of the number ${n} : ${rev} `)
