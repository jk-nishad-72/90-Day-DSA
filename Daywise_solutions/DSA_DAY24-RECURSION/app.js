

let prompt= require('prompt-sync')()


//* 1: Print "Hello World" N times

function greatNtimes(){
    
let n = Number(prompt('Enter a Number : '))

function great(n){

      if(n===0) return
     console.log('hello bhai free fir khelega ')

     return great(n-1)
}

console.log(great(n));



}

greatNtimes()


//*2: Print N to 1 using Recursion


function ntoOne(){

     let n = Number(prompt('Enter a Number : '))

     function print(){
        if(n===0) return

        console.log(n--)

        
        print(n)

     }

  console.log(print(n));
  
     
}

ntoOne()


