// sum of number digit

var num = Number(prompt("enter the number of which sum has to be found : "))

var sum = 0

while (n!= 0){
  let r = n%10
  sum = sum + r
  n = parseInt(n/10)
}

console.log(`sum of the digits is : ${sum}`)
