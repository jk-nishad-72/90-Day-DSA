
//*—Right shift Operator (>>)


let prompt = require('prompt-sync')();

let n = Number(prompt('Enter a Number : '))


console.log(n>>1);

//*—Left shift Operator


console.log(n<<1);


//*—Q 70.Swap two integers without using third variable


function SwapUsingBitwise(){

     let a  = Number(prompt('Enter value of a : '))
     let b = Number(prompt('Enter value of  b : '))


    a = a^b;
    b = a^b;
    a = a^b;

 console.log(a,b);
 
}

// (SwapUsingBitwise())

//*—Q 71.check even or odd


function checkEvenOdd(){

     let num = Number(prompt('Enter any Integer : '))

     if((num&1)===0) {
        return  ('Even Number '+num)
     }else return  ('Odd Number '+num)
    
     
}

// console.log(checkEvenOdd());

//*—Q 72.check if the Number  is power of 2


function checkifNumisPowOf2(){

    let n = Number(prompt('Enter a Number : '))

    return( n>0 && (n &(n-1))===0)
}

console.log(checkifNumisPowOf2());










