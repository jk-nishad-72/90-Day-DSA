



// * Q1 sum of two integer 

let a = 10 ;
let b = 20 ;

console.log(a+b);

// * guess the output 
console.log(a+"addition "+ a + b)


// * Q2 take input from user and greet them with their name
let Name = prompt('Enter your Name :- ');

console.log('namaste 🙏 '+Name)

 const container = document.querySelector('.container');
    container.innerHTML = `<h1> Namaste 🙏 ${Name} </h1>` 



 /*
  * Q3 swapping of two numbers 
  *  It can be solved in 3 ways
  *  1. using third variable 
  *  2. without using third variable (arithmetic operation)
  *  3. using destructuring 

 */

// 1. using third variable

let x  = 5;
let y = 10 ;

let temp = x ;
x = y ;
y = temp;

console.log('the values of x and y after swapping is '+x +'and'+ y);

// 2. without using third variable (arithmetic operation) {now the x = 10 and y = 5}

  x = x + y;
  y = x -y;
  x = x-y;
console.log('the values of x and y after swapping is '+x +'and'+ y);

// 3. using destructuring { now the x = 5 and y = 10}
    [x,y]=   [y ,x]

console.log('the values of x and y after swapping is '+x +'and'+ y);














 
 
 

