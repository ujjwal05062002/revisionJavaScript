/*

// array in javascript 
var a  = [10,20,30,40,50,60,70,80,90,100]
methods to create an array


Method 1 : 

var a  = [10,20,30,40,50,60,70,80,90,100]

Method 2 : 

var a = []

a.push(10)
a.push(20)
a.push(30)


Method 3 : 

var a  = Array(10) // this is the size of the array

var a  = Array(10,20,30,40,50)

Method 4 : 

var a = Array()

a.push(10)
a.push(20)
a.push(30)
a.push(40)
a.push(50)



Array elements using loops :

1. For Loop: array using for loop

    for (let i =0 ; i<=a.length; i++){
        console.log(a[i])
    }

2. While Loop: 

    let i = 0;
    while(i<a.length){
        console.log(a[i])
        i++
    }

3. Do While Loop: 

    let i = 0;
    do{
        console.log(a[i])
        i++
    }
    while (i<a.length)

4. Array using for in loop:

    for (let i in a){
        console.log(a[i])
    }

5. Array using for of loop:

    for (let i of a){
        console.log(a[i])
    }

    
    
// to string function of toString()
    console.log(a.toString())
    
 // join  
 
 console.log(a.join(" "));
 console.log(a.join("-"));
 console.log(a.join("_"));
 console.log(a.join("."));
 console.log(a.join(","));
    
 // push() pop() unshift() shift() splice() delete  
 
 let a = [10,20,30,40]
 
 // push : inserts the element at the last.  
 
 // a.push(50)
 
 // pop : removes the last element from the array.
 
 // a.pop()
 // console.log(a);
 
 // shift  : delete the first element of the array. works like pop function.
 
 // a.shift()
 // console.log(a);
 
 
 // unshift : insert the element at first place   
 
 a.unshift(100)
 console.log(a);
 
 
 // splice : array.splice(position, numberOfItemsToBeDeleted, [itemsToBeInserted])
 
 a.splice(5,0,[110,120,130])
 console.log(a);
*/

// var a = [1,2,3,4,5]
var b = [10,20,30,40,50]
// var c = [100,200,300,400,500]
// var d = ["Nitin", "Ujjwal", "Kamal", "Gaurav"]

// var e = a.concat(b,c,d)
// var e = a + b + c + d

// console.log(e);

// console.log(a.entries) 

// for (let item of b.entries()){
//     console.log(item)
// }

// reverse an array

// var a = [10,20,30,40,50]

// console.log(a.reverse())

// array sort function


// var a = ["Ujjwal", "Aviral" , "Gaurav" , "Shaily" , "Kamal" , "Vimal" ]

// console.log(a.sort());  // array sort function works here but not in the case of number

// var a =  [10,203,50,320,235,100, 210421, 1242]

// console.log(a.sort());  // gives wrong output

// console.log(a.sort((x,y)=>x-y))  // gives right output


// array destructuring

// var a  = [1001,"Ujjwal","Trainee", "Meerut", "Uttar Pradesh"]

// var [id,name,dsg,city,state] = a
// console.log(
//     `
//     id =  ${id}
//     name = ${name}

//     `
// );
