// prime number or not

var num = Number(prompt("Enter the number to test whether prime or not : ))

var isPrime = true

for (var i = 2; i <=num**0.5; i++){
  if (num%i == 0){
    isPrime = false
    break
  }
}

if (isPrime = true){
  console.log("This number is prime")
}
else{
  console.log("This number is not prime")
}
