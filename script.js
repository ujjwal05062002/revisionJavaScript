// wap to print sum of even and odd numbers in a range

var start_num = prompt(Number("Enter the starting number : "))
var end_num = prompt(Number("Enter the ending number : "))

var even_sum = 0
var odd_sum = 0

for (var i = start_num; i<=end_num; i++){
    if (i%2==0){
        even_sum = even_sum + i
    }
    else{
        odd_sum = odd_sum + i
    }
}

// factorial of any number

var fact = prompt(Number("Enter the factorial number : "))

var factorial = 1

for (var i=fact; i>=1; i--){
    factorial = factorial*i
}


