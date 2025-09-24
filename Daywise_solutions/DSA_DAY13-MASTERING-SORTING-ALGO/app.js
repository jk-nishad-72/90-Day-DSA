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

//*→2.Insertion sort , 

function insertionSort(arr) {
    for(let i = 1;i<arr.length;i++)
    {
        let key = arr[i]
        let j = i-1;
        while(j>=0&& arr[j]>key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1] = key;
    }
    return arr
}

console.log(insertionSort(arr));


//*→3.selection sort , 

function selectionSort(arr) {
    
    for(let i = 0;i<arr.length;i++){
        
        let small = i;
         
         for(let j  = 1+i ;j<arr.length;j++){
             
             if(arr[small] > arr[j]){
                 
                 small = j
             }
         }
         
         if(i!==small){
             let cp = arr[small]
             arr[small] = arr[i]
             arr[i] = cp
         }
    }

    return arr
    
}

console.log(selectionSort(arr));


