



// * — Q 30. Linear Search an array - If element found print the index else -1


function linearSearch(arr, target) {
   
   let key = -1
    for(let i =  0;i<arr.length;i++){
        
        if(arr[i] === target) {
            
             key = i
             break
        }
    }
    return key
}


console.log(linearSearch([1,2,3,4,5],6))