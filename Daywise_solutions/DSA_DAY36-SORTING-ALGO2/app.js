//*— Quick Sort 


function Quicksort(arr,first,last){ 


     if(first>=last) return  ;
    let pIndx = findIndex(arr,first,last);
    Quicksort(arr,first,pIndx-1)
    Quicksort(arr,pIndx+1,last)
}


function findIndex(arr,first,last) {


     let pivot = arr[last]
     let i = first-1;

     for(let j = 0;j<pivot;j++){ 
          if(arr[j] < arr[pivot]){
              i++
             swap(arr,i,j)    
          }  
     }

     i++;
     swap(arr,i,last) 
     return i ;
    
}


var swap = function(arr,i,j){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp
}

