


//* —Nested Looping [loop(parent loop) inside  a another loop(child loop ) ]


// * Example 

for(let i  =1;i<=5;i++){
     for(let j =1;j<=5;j++){
       process.stdout.write( j +' ')
     }
     console.log();
}

// * —Pattern programming

/* 

 * Q 35. Right Angle Traingle

 *
 * *
 * * *
 * * * *
 * * * * *  

 */

let prompt = require('prompt-sync')();

 let n  = Number(prompt('Enter a Number : '))


 

function printRightTriangle(n) { 
    for(let i =1;i<=n;i++){
        for(let j =1;j<=i;j++){
            process.stdout.write('*'+ ' ')
        }
        console.log()
    }
}
 console.log(printRightTriangle(n));



/**
 
Q 36.
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5


 */


function printRightTriangleNumbers(n) {
   
     for(let i =1;i<=n;i++){
        for(let j = 1;j<=i;j++){
            process.stdout.write(j + ' ')
        }  console.log()   
    }
}
console.log(printRightTriangleNumbers(n));


/**
 * Q 37.
A
A B
A B C
A B C D
A B C D E
 */


// console.log(String.fromCharCode(nm))

function printRightTriangleAlphabets(n) {
    // Write your logic here
  for(let i =1;i<=n;i++){
     var nm  = 65;
    for(let k = 1;k<=i;k++){
       process.stdout.write(String.fromCharCode(nm)+' ' ) 
       nm++
    }
    console.log();
    }
}
  console.log(printRightTriangleAlphabets(n))


/**
 * 
 *  Q 38. Inverted Right Angle Triangle

* * * * *
* * * *
* * *
* *
*

 */


function printInvertedRightTriangle(n) {
   
    
  
for(let j = 1;j<=n;j++){
    for(let i =1;i<=n+1-j;i++){
        process.stdout.write('*' + ' ')
    } console.log();
} 

        
}
console.log(printInvertedRightTriangle(n))


/**
 * 
 * Q 39 
1 2 3 4 5
1 2 3 4 
1 2 3 
1 2 
1 

 */

function printInvertedRightTriangleNumber(n) {
   
    
  
for(let j = 1;j<=n;j++){
    for(let i =1;i<=n+1-j;i++){
        process.stdout.write(i + ' ')
    } console.log();
} 

        
}
console.log(printInvertedRightTriangleNumber(n))


/**
 * 
 *Q 40
A B C D E 
A B C D 
A B C 
A B 
A 

 */

function printInvertedRightTriangleAlphabet(n) {
   
    
  
for(let j = 1;j<=n;j++){
     let charnm =65;
    for(let i =1;i<=n+1-j;i++){
        process.stdout.write(String.fromCharCode(charnm) + ' ')
        charnm++
    } console.log();
} 

        
}
console.log(printInvertedRightTriangleAlphabet(n))





