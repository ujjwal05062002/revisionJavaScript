// print all perfect number in a given range

var start = Number(prompt("Enter the starting number :"))
var end = Number(prompt("Enter the ending number : "))

console.log(`perfect number between start and end number are: `);

for (var num = start; num<=end; num++){
    var sum = 0
    for (var i = 0; i<num; i++){
        if (num%i==0){
            sum = sum + i
        }
    }
    if (num==sum){
        console.log(`${num}`);
    }
}
