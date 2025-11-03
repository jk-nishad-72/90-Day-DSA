
//* Find Number of integers which has exactly x divisors using js ✅ 


let prompt = require('prompt-sync')();

//* Brute force
function divisors(){

    let divisors = []
    let n = parseInt(prompt("Enter a Number for Divisors: "));

    for(let i = 1;i<=n;i++){
        if(n%i==0) divisors.push(i)
    }
    return divisors

}

// console.log(divisors());

//optimise solutn

function divisorsOptimise(){

    
    let divisors = []
    let n = parseInt(prompt("Enter a Number for Divisors: "));

    for(let i = 1;i<=Math.floor(n/2);i++){ 
        if(n%i==0) divisors.push(i)
    }
     divisors.push(n)
    return divisors
}

// console.log(divisorsOptimise());



let size = parseInt(prompt('Enter a Array size : '))

let arr = new Array(size)

for(let i = 0 ;i<arr.length;i++){

     arr[i] = parseInt(prompt(`Enter Array elements : `))

}

function leftRotation(arr){

    let cp = arr[0]
    for(let i = 0;i<arr.length-1;i++){
         arr[i] = arr[i+1] 
    }
    arr[arr.length-1] = cp

     return arr
}

// console.log(leftRotation(arr));



function leftRotationByk(arr){

    let k = parseInt(prompt('Enter value of k : '))

    if(k>arr.length) k = parseInt(k%5) 
    
    for(let i = 1;i<=k;i++){
        let cp = arr[0]

    for(let i = 0;i<arr.length-1;i++){
         arr[i] = arr[i+1] 
    }
    
    arr[arr.length-1] = cp
    }

     return arr
}



// console.log(leftRotationByk(arr));



function rightRotation(arr){

    let cp = arr[arr.length-1]
    for(let i = arr.length-1;i>=0;i--){
         arr[i] = arr[i-1]  
    }
    arr[0] = cp

     return arr
}


// console.log(rightRotation(arr));



function righttRotationByk(arr){

    let k = parseInt(prompt('Enter value of k : '))
    if(k>arr.length) k = parseInt(k%5) 

    for(let i = 1;i<=k;i++){
       let cp = arr[arr.length-1]
    for(let i = arr.length-1;i>=0;i--){
         arr[i] = arr[i-1]  
    }
    arr[0] = cp
    }

     return arr
}

console.log(righttRotationByk(arr));


