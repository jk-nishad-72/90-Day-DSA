
let prompt = require('prompt-sync')()

let n = Number(prompt("Enter a Number : "))

/**
 * 
 * Q1
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
 */

for(let i =1;i<=n;i++){

for(let j = 1;j<=n-i;j++)
{
     process.stdout.write(" ") 
}
for(let k =1;k<=i;k++){
      process.stdout.write('*' + ' ') 
}

console.log();

}



/*
 Q2 
        * 
      * * 
    * * * 
  * * * * 
* * * * * 
 
 */ 


function printMirroredRightTriangle(n) {
   
    
    for(let i =1;i<=n;i++){
        
        for(let j =1; j<=n-i;j++){
            
             process.stdout.write('  ' )
        }
        for(let k =1;k<=i;k++){
            process.stdout.write('* ')
        }
        
        console.log()
    }
    
}

console.log(printMirroredRightTriangle(n));





/*
   Q 3

 *         *
  *      *
    *   *
     * *
      *
 
 
 */


function printVShapePattern(n) {
   
    
for(let i =1;i<=n;i++){
    
    for(let j = 1;j<= n*2-1;j++){
        if(j==i || i+j == n*2) process.stdout.write('* ')
        
        else process.stdout.write('  ')
    }
    console.log()
}    
    
    
}

console.log((printVShapePattern(n)));




/*
 Q4

 *          *
  *       *
    *   *
      *
    *   *
  *       *
*           *


*/

function printXShapePattern(n) {
    // Write your logic here
    for(let i = 1;i<=n;i++){
        
       for(let j = 1;j<=n;j++){
            if(j==i || j+i == n+1) process.stdout.write("*")
        else process.stdout.write(" ")
       }
        
        console.log()
    }
}

console.log(printXShapePattern(n));


