let prompt = require('prompt-sync')();

let size = Number(prompt('Enter Array size : '))

let arr  = new Array(size)

for(let i =0;i<arr.length;i++){

    arr[i]= Number(prompt("Enter Array elements : "))

}

console.log(arr)


//*→1. Bubble sort ,

function bubbleSort(arr) {
    for(let i = 0;i<arr.length-1;i++){
        
        for(let j =0;j<arr.length+1-i;j++){
            
            if(arr[j]>arr[j+1]){
                
                 let cp = arr[j]
                 arr[j] = arr[j+1]
                 arr[j+1] = cp
            }
        }
    }
    return arr
    
}

console.log(bubbleSort(arr));


