// perfect number : sum of divisor is equal to the number

var num = Number(pompt("Enter the number : "))

var sum = 0

for (var i = 1; i<=num; i++){
  if (num%i==0){
    sum = sum + i
  }
}

if (num == sum){
   console.log(`${num} is a perfect number`) 
}
