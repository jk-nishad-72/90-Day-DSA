let n  = Number(prompt("Enter a number"))







//*✅ while loop: Print numbers from 1 to 5

let i = 0;
while(i<=5){
    console.log(i)
    i++
}


//*✅ Q. Sum of Digits

function sumOfDigits(n) {
    // Write your logic here
    let sum =0;
    while(n>0){
        
         sum += Math.floor(n%10)
         n = Math.floor(n/10)
    }
    
    return sum 
    
}

console.log(sumOfDigits(n))



//*✅ Q. Reverse of a Number


function ReverseOfDigits(n) {
    
     let revers = 0;
     let rem =0;
     while(n>0){
        
        rem = n%10
        revers = (revers*10 )+rem
       
        n = Math.floor(n/10)
    
     }

     return revers
      
}
console.log(ReverseOfDigits(n))


 


function isAutomorphic(n) {
    // Write your logic here
    
let copy =n;
let squar = n*n;

  let count = 0;
  
  while(n>0){
       count++
       console.log(count)
       n = Math.floor(n/10)
  }
  
console.log(copy%(Math.pow(10,count)))
   
  if(copy == squar%(Math.pow(10,count))) return "Yes"
  
  else return "No"
}

console.log(isAutomorphic(n))
