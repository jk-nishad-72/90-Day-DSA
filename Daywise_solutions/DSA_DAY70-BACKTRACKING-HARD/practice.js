/**
 * Maximum number of handshakes in Java
Here, we will discuss the maximum number of 
handshakes in java. The given program will find the maximum number 
of handshakes in a room. Suppose there are N persons in a room. 
We have to find the maximum number of Handshakes possible.
 Given the fact that any two persons shake hand only once.
 Algorithm
For N = 8
handshakes  =  ( (N-1) * N ) / 2  =  ( 8 x 7 )/2  =  28
Print Result
 */

let prompt = require('prompt-sync')();

class Hello{

    
 totalHandShack(){
    
   let n = parseInt(prompt('Enter a Number of Person available in a Classroom : '))

   let ans = parseInt(((n-1)*n)/2)

   console.log(ans);
   
}




}

const solve = new Hello()

solve.totalHandShack()