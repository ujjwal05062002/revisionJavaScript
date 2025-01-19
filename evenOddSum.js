// print sum of odd and even number in specific range

var startNum = Number(prompt("Enter the starting number :"))
var endNum = Number(prompt("Enter the ending number :"))

var evenSum = 0
var oddSum = 0

for (var i = startNum; i <= endNum; i++){
  if (i%2==0){
    evenSum = evenSum + i
  }
  else{
    oddSum = oddSum + i
  }
}

console.log(`sum of even sum = ${evenSum} and oddSum = ${oddSum}`)
