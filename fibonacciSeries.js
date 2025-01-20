// fibonacci series

var fib = Number(prompt("Enter the fibonacci series number : "))

var a = 0
var b = 1
var sum  = a+b

console.log(`${a} ${b}`)

while (sum<=fib){
 console.log(`${sum}`) 
  a = b
  b = sum
  a = a+b
}
