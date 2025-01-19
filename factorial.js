// factorial of the number

var factNum = Number(prompt("Enter the number of which factorial is to be found out : "))

var factorial = 1

for (var i = factNum; i>=1; i--){
  factorial = factorial*i
}

console.log(`factorial of the ${factNum} is ${factorial}`)
